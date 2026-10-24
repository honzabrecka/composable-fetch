import { describe, expect, it, vi } from 'vitest'
import { delays, errorIds, withRetry } from '../src/index.ts'

const failingFetch = async () => {
  const e = new Error('Failed')
  ;(e as any).id = errorIds.RetryError
  throw e
}

const failingFetchWithReq = (method: string) => async () => {
  const e = new Error('Failed')
  ;(e as any).id = errorIds.RetryError
  ;(e as any).req = { url: 'foo', method }
  throw e
}

const failingFetchWithRes = (retryAfter: string) => async () => {
  const e = new Error('Fail')
  ;(e as any).id = errorIds.RetryError
  ;(e as any).res = {
    headers: {
      get: () => retryAfter,
    },
  }
  throw e
}

const successfulFetch = async () => 'ok'

function retryableF(tries: Function[]) {
  let i = 0
  const f = vi.fn((): any => tries[i++]())
  return f
}

describe('withRetry', () => {
  it('fails when all tries fails', async () => {
    const tries = [failingFetch, failingFetch, failingFetch, failingFetch]
    await expect(
      withRetry({ max: 3, delay: delays.linear(1) })(retryableF(tries)),
    ).rejects.toMatchObject({ id: 'RetryError', message: 'Retry failed' })
  })

  it('attaches errors of all tries and req of the last one to final error', async () => {
    const tries = [
      failingFetchWithReq('GET'),
      failingFetchWithReq('GET'),
      failingFetchWithReq('GET'),
    ]
    const error = await withRetry({ max: 2, delay: vi.fn() })(
      retryableF(tries),
    ).catch((e) => e)
    expect(error).toMatchObject({
      id: 'RetryError',
      message: 'Retry failed',
      req: { url: 'foo', method: 'GET' },
    })
    expect(error.errors).toHaveLength(3)
    expect(error.errors[0]).toMatchObject({
      id: 'RetryError',
      message: 'Failed',
    })
  })

  it('attaches errors when retry-after is higher than timeout', async () => {
    const tries = [failingFetch, failingFetchWithRes('1')]
    const error = await withRetry({ max: 2, delay: vi.fn(), maxTimeout: 500 })(
      retryableF(tries),
    ).catch((e) => e)
    expect(error.message).toBe('Retry-after is higher than maxTimeout')
    expect(error.errors).toHaveLength(2)
    expect(error.res).toBe(error.errors[1].res)
  })

  it('makes max + 1 requests at most', async () => {
    const tries = [failingFetch, failingFetch, failingFetch, successfulFetch]
    const fetch = retryableF(tries)
    await expect(
      withRetry({ max: 3, delay: delays.linear(1) })(fetch),
    ).resolves.toBe('ok')
    expect(fetch).toHaveBeenCalledTimes(4)
  })

  it('makes exactly one request when max = 0', async () => {
    const fetch = retryableF([failingFetch, successfulFetch])
    const delay = vi.fn()
    await expect(withRetry({ max: 0, delay })(fetch)).rejects.toMatchObject({
      id: 'RetryError',
    })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(delay).not.toBeCalled()
  })

  it('makes exactly one request when max is negative', async () => {
    const fetch = retryableF([failingFetch, successfulFetch])
    await expect(
      withRetry({ max: -1, delay: vi.fn() })(fetch),
    ).rejects.toMatchObject({ id: 'RetryError' })
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('calls delay with increasing sequence and not after the last try', async () => {
    const tries = [failingFetch, failingFetch, failingFetch, failingFetch]
    const delay = vi.fn().mockResolvedValue(undefined)
    await expect(
      withRetry({ max: 3, delay })(retryableF(tries)),
    ).rejects.toThrow()
    expect(delay.mock.calls).toEqual([[1], [2], [3]])
  })

  it('rejects when delay rejects', async () => {
    const tries = [failingFetch, successfulFetch]
    const delay = vi.fn().mockRejectedValue(new Error('delay failed'))
    await expect(
      withRetry({ max: 3, delay })(retryableF(tries)),
    ).rejects.toThrow('delay failed')
  })

  it('retries every request by default', async () => {
    const tries = [failingFetchWithReq('POST'), successfulFetch]
    await expect(
      withRetry({ max: 1, delay: vi.fn() })(retryableF(tries)),
    ).resolves.toBe('ok')
  })

  it('does not retry request rejected by filter', async () => {
    const tries = [failingFetchWithReq('POST'), successfulFetch]
    const fetch = retryableF(tries)
    const filter = vi.fn((req: any) => req.method !== 'POST')
    await expect(
      withRetry({ max: 3, delay: vi.fn(), filter })(fetch),
    ).rejects.toMatchObject({ id: 'RetryError', req: { method: 'POST' } })
    expect(filter).toBeCalledWith({ url: 'foo', method: 'POST' })
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('retries request accepted by filter', async () => {
    const tries = [failingFetchWithReq('GET'), successfulFetch]
    const filter = (req: any) => req.method !== 'POST'
    await expect(
      withRetry({ max: 3, delay: vi.fn(), filter })(retryableF(tries)),
    ).resolves.toBe('ok')
  })

  it('retry-after header without timeout => retry', async () => {
    const tries = [failingFetchWithRes('0'), successfulFetch]
    const delay = vi.fn()
    await withRetry({ max: 2, delay })(retryableF(tries))
    expect(delay).not.toBeCalled()
  })

  it('retry-after header is lower than timeout => retry', async () => {
    const tries = [failingFetchWithRes('0'), successfulFetch]
    const delay = vi.fn()
    await withRetry({ max: 2, delay, maxTimeout: 100 })(retryableF(tries))
    expect(delay).not.toBeCalled()
  })

  it('retry-after header is higher than timeout => retry is rejected', async () => {
    const tries = [failingFetchWithRes('1'), successfulFetch]
    const delay = vi.fn()
    await expect(
      withRetry({ max: 2, delay, maxTimeout: 500 })(retryableF(tries)),
    ).rejects.toMatchObject({ id: 'RetryError' })
    expect(delay).not.toBeCalled()
  })

  it('does not retry error with id !== RetryError', async () => {
    const tries = [
      () => {
        throw new Error('oops')
      },
    ]
    const delay = vi.fn()
    await expect(
      withRetry({ max: 2, delay })(retryableF(tries)),
    ).rejects.toThrow('oops')
    expect(delay).not.toBeCalled()
  })
})
