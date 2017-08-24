import { composableFetch } from '../index'

describe('decodeJSONResponse', () => {
  it('decodes json response', async () => {
    const res = { json: () => Promise.resolve('foo') }
    const decodedRes = await composableFetch.decodeJSONResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })
})
