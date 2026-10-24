import { describe, expect, it } from 'vitest'
import { decodeFormDataResponse } from '../src/index.ts'

describe('decodeFormDataResponse', () => {
  it('decodes form data response', async () => {
    const res = { formData: () => Promise.resolve('foo') }
    const decodedRes = await decodeFormDataResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('catches error when trying to decode invalid response', async () => {
    const res = { formData: () => Promise.reject(new TypeError('no')) }
    const error = await decodeFormDataResponse(res as any).catch((e) => e)
    expect(error).toBeInstanceOf(Error)
    expect(error).toMatchObject({ id: 'DecodeResponseError', message: 'no' })
    expect(error.res).toBe(res)
  })
})
