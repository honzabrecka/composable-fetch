import { composableFetch } from '../index'

const assert = async (error: any, output: string) => {
  const log = jest.fn()
  try {
    await composableFetch.logError(log)(error)
    fail()
  } catch (e) {
    expect(log).toBeCalledWith(output)
    expect(e).toBe(error)
  }
}

describe('logError', async () => {
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

  it('DecodeResponseError error', async () => {
    const error: any = new Error('whatever')
    error.id = 'DecodeResponseError'
    error.res = { cloned: { text: () => Promise.resolve('bar') } }
    const output = 'Fetch error [DecodeResponseError]: whatever\n\nbar\n\n'
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
    const output = 'Fetch error [RetryError]: whatever\n\nretry: [0] [InvalidStatusCodeError]: a\n\nfoo\n\nretry: [1] [DecodeResponseError]: b\n\nbar\n\n\n\n'
    await assert(error, output)
  })
})
