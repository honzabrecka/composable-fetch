import { describe, expect, it } from 'vitest'
import { decodeJSONResponse } from '../src/index.ts'

describe('decodeJSONResponse', () => {
  it('decodes json response', async () => {
    const res = { json: () => Promise.resolve('foo') }
    const decodedRes = await decodeJSONResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('catches error when trying to decode invalid json response', async () => {
    const res = { json: () => Promise.reject(new SyntaxError('no')) }
    const error = await decodeJSONResponse(res as any).catch((e) => e)
    expect(error).toBeInstanceOf(Error)
    expect(error).toMatchObject({ id: 'DecodeResponseError', message: 'no' })
    expect(error.res).toBe(res)
  })
})
