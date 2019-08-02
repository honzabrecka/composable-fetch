import { decodeTextResponse } from '../src/index'

describe('decodeTextResponse', () => {
  it('decodes text response', async () => {
    const res = { text: () => Promise.resolve('foo') }
    const decodedRes = await decodeTextResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })
})
