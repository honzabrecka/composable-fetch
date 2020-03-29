import { delays, errorIds,  withRetry } from '../src/index'

const failingFetch = async () => {
  const e = new Error('Failed')
  ;(e as any).id = errorIds.RetryError
  throw e
}

const failingFetchWithRes = (retryAfter: number) => async () => {
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
  return (): any => tries[i++]()
}

describe('withRetry', () => {
  it('fails when all tries fails', async () => {
    const tries = [failingFetch, failingFetch, failingFetch, successfulFetch]
    try {
      await withRetry({ max: 3, delay: delays.linear(1) })(retryableF(tries))
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
    }
  })

  it('successfully resolves when one try is successful', async () => {
    const tries = [failingFetch, failingFetch, successfulFetch]
    await withRetry({ max: 3, delay: delays.linear(1) })(retryableF(tries))
  })

  it('calls delay with increasing sequence', async () => {
    const tries = [failingFetch, failingFetch, failingFetch]
    const delay = jest.fn().mockReturnValue(Promise.resolve())
    try {
      await withRetry({ max: 3, delay })(retryableF(tries))
      fail()
    } catch (e) {
      expect(delay.mock.calls).toEqual([[1], [2], [3]])
    }
  })

  it('retry-after header without timeout => retry', async () => {
    const tries = [failingFetchWithRes(50), successfulFetch]
    const delay = jest.fn()
    await withRetry({ max: 2, delay })(retryableF(tries))
    expect(delay).not.toBeCalled()
  })

  it('retry-after header is lower than timeout => retry', async () => {
    const tries = [failingFetchWithRes(50), successfulFetch]
    const delay = jest.fn()
    await withRetry({ max: 2, delay, maxTimeout: 100 })(retryableF(tries))
    expect(delay).not.toBeCalled()
  })

  it('retry-after header is higher than timeout => retry is rejected', async () => {
    const tries = [failingFetchWithRes(100), successfulFetch]
    const delay = jest.fn()
    try {
      await withRetry({ max: 2, delay, maxTimeout: 50 })(retryableF(tries))
      fail()
    } catch (e) {
      expect(delay).not.toBeCalled()
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
    }
  })

  it('does not retry error with id !== RetryError', async () => {
    const tries = [() => { throw new Error('oops') }]
    const delay = jest.fn()
    try {
      await withRetry({ max: 2, delay })(retryableF(tries))
      fail()
    } catch (e) {
      expect(delay).not.toBeCalled()
      expect(e).toBeInstanceOf(Error)
      expect(e.message).toBe('oops')
    }
  })
})
