import { describe, expect, it, vi } from 'vitest'
import { retryable } from '../src/index.ts'

describe('retryable', () => {
  it('calls fetch with passed request', async () => {
    const req = { url: 'foo' }
    const fetch = vi.fn().mockReturnValue({ status: 200 })
    await retryable(fetch)(req)()
    expect(fetch).toBeCalledWith({ url: 'foo' })
  })

  it('throws when bad status code is returned', async () => {
    const req = { url: 'foo' }
    const res = { status: 408 }
    const fetch = vi.fn().mockReturnValue(res)
    try {
      await retryable(fetch)(req)()
      expect.unreachable()
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
      expect(e.res).toBe(res)
    }
  })

  it.each([
    'ECONNREFUSED',
    'ENOTFOUND',
    'UND_ERR_CONNECT_TIMEOUT',
    'UND_ERR_SOCKET',
  ])(
    'throws RetryError when Node fetch fails with cause.code = %s',
    async (code) => {
      const req = { url: 'foo' }
      const fetch = async () => {
        throw new TypeError('fetch failed', { cause: { code } })
      }
      await expect(retryable(fetch)(req)()).rejects.toMatchObject({
        id: 'RetryError',
        req,
      })
    },
  )

  it('rethrows non-retryable error', async () => {
    const error = new TypeError('fetch failed', { cause: { code: 'EOTHER' } })
    const fetch = async () => {
      throw error
    }
    await expect(retryable(fetch)({ url: 'foo' })()).rejects.toBe(error)
  })

  it('throws when bad error is thrown while fetching', async () => {
    const req = { url: 'foo' }
    const fetch = async () => {
      const e = new Error('Fail')
      ;(e as any).code = 'ETIMEDOUT'
      throw e
    }
    try {
      await retryable(fetch)(req)()
      expect.unreachable()
    } catch (e: any) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
      expect(e.res).toBe(undefined)
    }
  })
})
