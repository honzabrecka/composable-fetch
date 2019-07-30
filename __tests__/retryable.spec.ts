import { composableFetch } from '../index'

describe('retryable', () => {
  it('calls fetch with passed request', async () => {
    const req = { url: 'foo' }
    const fetch = jest.fn().mockReturnValue({ status: 200 })
    await composableFetch.retryable(fetch)(req)()
    expect(fetch).toBeCalledWith({ url: 'foo' })
  })

  it('throws when bad status code is returned', async () => {
    const req = { url: 'foo' }
    const res = { status: 408 }
    const fetch = jest.fn().mockReturnValue(res)
    try {
      await composableFetch.retryable(fetch)(req)()
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
      expect(e.res).toBe(res)
    }
  })

  it('throws when bad error is thrown while fetching', async () => {
    const req = { url: 'foo' }
    const fetch = async () => {
      const e = new Error('Fail');
      (e as any).code = 'ETIMEDOUT'
      throw e
    }
    try {
      await composableFetch.retryable(fetch)(req)()
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
      expect(e.res).toBe(undefined)
    }
  })
})
