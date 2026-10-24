import { describe, expect, it, vi } from 'vitest'
import { logError, retryable, withRetry } from '../src/index.ts'

const assert = async (error: any, output: string) => {
  const log = vi.fn()
  try {
    await logError(log)(error)
    expect.unreachable()
  } catch (e: any) {
    expect(log).toBeCalledWith(output)
    expect(e).toBe(error)
  }
}

describe('logError', () => {
  it('Non-fetch error', async () => {
    const error = new TypeError('whatever')
    const output = 'Fetch error: whatever\n'
    await assert(error, output)
  })

  it('InvalidStatusCode error', async () => {
    const error: any = new Error('whatever')
    error.id = 'InvalidStatusCodeError'
    error.res = { data: 'foo' }
    const output = 'Fetch error [InvalidStatusCodeError]: whatever\n\nfoo\n\n'
    await assert(error, output)
  })

  it('InvalidStatusCode error with decoded JSON data', async () => {
    const error: any = new Error('whatever')
    error.id = 'InvalidStatusCodeError'
    error.res = { data: { message: 'not found' } }
    const output =
      'Fetch error [InvalidStatusCodeError]: whatever\n\n{"message":"not found"}\n\n'
    await assert(error, output)
  })

  it('DecodeResponseError error', async () => {
    const error: any = new Error('whatever')
    error.id = 'DecodeResponseError'
    error.res = { cloned: { text: () => Promise.resolve('bar') } }
    const output = 'Fetch error [DecodeResponseError]: whatever\n\nbar\n\n'
    await assert(error, output)
  })

  it('RetryError error without errors', async () => {
    const error: any = new Error('Retry error')
    error.id = 'RetryError'
    error.req = { url: 'foo' }
    const output = 'Fetch error [RetryError]: Retry error\nurl: foo\n'
    await assert(error, output)
  })

  it('RetryError produced by withRetry', async () => {
    const fetch = retryable(async () => new Response('', { status: 503 }))
    const error = await withRetry({ max: 1, delay: async () => {} })(
      fetch({ url: 'foo' }),
    ).catch((e) => e)
    const output =
      'Fetch error [RetryError]: Retry failed\nurl: foo\n\nretry: [0] [RetryError]: Retry error\nurl: foo\nretry: [1] [RetryError]: Retry error\nurl: foo\n\n\n'
    await assert(error, output)
  })

  it('RetryError error', async () => {
    const errorA: any = new Error('a')
    errorA.id = 'InvalidStatusCodeError'
    errorA.res = { data: 'foo' }
    const errorB: any = new Error('b')
    errorB.id = 'DecodeResponseError'
    errorB.res = { cloned: { text: () => Promise.resolve('bar') } }
    const error: any = new Error('whatever')
    error.id = 'RetryError'
    error.errors = [errorA, errorB]
    const output =
      'Fetch error [RetryError]: whatever\n\nretry: [0] [InvalidStatusCodeError]: a\n\nfoo\n\nretry: [1] [DecodeResponseError]: b\n\nbar\n\n\n\n'
    await assert(error, output)
  })
})
