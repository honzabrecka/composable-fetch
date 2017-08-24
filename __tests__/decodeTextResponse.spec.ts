import { composableFetch } from '../index'

describe('decodeTextResponse', () => {
  it('decodes text response', async () => {
    const res = { text: () => Promise.resolve('foo') }
    const decodedRes = await composableFetch.decodeTextResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })
})
