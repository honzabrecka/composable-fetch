import { composableFetch } from '../index'

describe('decodeJSONResponse', () => {
  it('decodes json response', async () => {
    const res = { json: () => Promise.resolve('foo') }
    const decodedRes = await composableFetch.decodeJSONResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('catches error when trying to decode invalid json response', async () => {
    const res = { json: () => Promise.reject('no') }
    try {
      await composableFetch.decodeJSONResponse(res as any)
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('DecodeResponseError')
      expect(e.res).toBe(res)
    }
  })
})
