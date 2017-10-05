import { composableFetch } from '../index'

describe('decodeFormDataResponse', () => {
  it('decodes form data response', async () => {
    const res = { formData: () => Promise.resolve('foo') }
    const decodedRes = await composableFetch.decodeFormDataResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })
})
