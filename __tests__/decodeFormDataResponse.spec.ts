import { composableFetch, DecodeResponseError } from '../index'

describe('decodeFormDataResponse', () => {
  it('decodes form data response', async () => {
    const res = { formData: () => Promise.resolve('foo') }
    const decodedRes = await composableFetch.decodeFormDataResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('catches error when trying to decode invalid formData response', async () => {
    const res = { formData: () => Promise.reject('no') }
    try {
      await composableFetch.decodeFormDataResponse(res as any)
    } catch (e) {
      console.log(e instanceof DecodeResponseError);
      expect(e).toBeInstanceOf(DecodeResponseError)
      expect(e.res).toBe(res)
    }
  })
})
