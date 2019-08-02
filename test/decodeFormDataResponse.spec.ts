import { decodeFormDataResponse } from '../src/index'

describe('decodeFormDataResponse', () => {
  it('decodes form data response', async () => {
    const res = { formData: () => Promise.resolve('foo') }
    const decodedRes = await decodeFormDataResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('catches error when trying to decode invalid response', async () => {
    const res = { formData: () => Promise.reject('no') }
    try {
      await decodeFormDataResponse(res as any)
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('DecodeResponseError')
      expect(e.res).toBe(res)
    }
  })
})
