import { decodeBlobResponse } from '../src/index'

describe('decodeBlobResponse', () => {
  it('decodes blob response', async () => {
    const res = { blob: () => Promise.resolve('foo') }
    const decodedRes = await decodeBlobResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })
})
