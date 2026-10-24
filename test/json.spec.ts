import { describe, expect, it, vi } from 'vitest'
import { json } from '../src/index.ts'

const fakeFetch = (res: () => Response) => vi.fn(async () => res())

const noRetry = { max: 0 }

describe('json', () => {
  it('encodes request body, sets headers and decodes response', async () => {
    const fetch = fakeFetch(
      () =>
        new Response('{"a":1}', {
          headers: { 'content-type': 'application/json' },
        }),
    )
    const res = await json(fetch)({
      url: 'foo',
      method: 'POST',
      body: { b: 2 } as any,
    })
    expect((res as any).data).toEqual({ a: 1 })
    const [url, init]: any = fetch.mock.calls[0]
    expect(url).toBe('foo')
    expect(init.body).toBe('{"b":2}')
    expect(init.headers).toEqual({
      'content-type': 'application/json',
      accept: 'application/json',
    })
  })

  it('resolves 204 with empty object', async () => {
    const fetch = fakeFetch(() => new Response(null, { status: 204 }))
    const res = await json(fetch)({ url: 'foo' })
    expect((res as any).data).toEqual({})
  })

  it('fails with InvalidStatusCodeError and decoded data for JSON error response', async () => {
    const fetch = fakeFetch(
      () => new Response('{"message":"bad"}', { status: 400 }),
    )
    const error = await json(fetch)({ url: 'foo' }).catch((e) => e)
    expect(error).toMatchObject({ id: 'InvalidStatusCodeError' })
    expect(error.res.data).toEqual({ message: 'bad' })
  })

  it('fails with InvalidStatusCodeError for non-JSON error response', async () => {
    const fetch = fakeFetch(
      () => new Response('<h1>Not Found</h1>', { status: 404 }),
    )
    await expect(json(fetch)({ url: 'foo' })).rejects.toMatchObject({
      id: 'InvalidStatusCodeError',
      message: 'Invalid status code: 404',
    })
  })

  it('fails with DecodeResponseError for non-JSON success response', async () => {
    const fetch = fakeFetch(() => new Response('<h1>Hello</h1>'))
    await expect(json(fetch)({ url: 'foo' })).rejects.toMatchObject({
      id: 'DecodeResponseError',
    })
  })

  it('retries retryable status', async () => {
    const responses = [new Response('', { status: 503 }), new Response('{}')]
    const fetch = vi.fn(async () => responses.shift() as Response)
    const res = await json(fetch, { max: 1, delay: async () => {} })({
      url: 'foo',
    })
    expect(res.status).toBe(200)
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('gives up after retries with RetryError', async () => {
    const fetch = fakeFetch(() => new Response('', { status: 503 }))
    await expect(json(fetch, noRetry)({ url: 'foo' })).rejects.toMatchObject({
      id: 'RetryError',
    })
  })
})
