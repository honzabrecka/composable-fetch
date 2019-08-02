import { decodeArrayBufferResponse } from '../src/index'

describe('decodeArrayBufferResponse', () => {
  it('decodes text response', async () => {
    const res = { arrayBuffer: () => Promise.resolve('foo') }
    const decodedRes = await decodeArrayBufferResponse(
      res as any,
    )
    expect((decodedRes as any).data).toBe('foo')
  })
})
