import { describe, expect, it, vi } from 'vitest'
import { text } from '../src/index.ts'

describe('text', () => {
  it('decodes text response', async () => {
    const fetch = vi.fn(async () => new Response('hello'))
    const res = await text(fetch)({ url: 'foo' })
    expect((res as any).data).toBe('hello')
    expect(fetch).toBeCalledWith('foo', { url: 'foo' })
  })

  it('resolves 204 with empty string', async () => {
    const fetch = vi.fn(async () => new Response(null, { status: 204 }))
    const res = await text(fetch)({ url: 'foo' })
    expect((res as any).data).toBe('')
  })

  it('fails with InvalidStatusCodeError and decoded data', async () => {
    const fetch = vi.fn(async () => new Response('nope', { status: 404 }))
    const error = await text(fetch)({ url: 'foo' }).catch((e) => e)
    expect(error).toMatchObject({ id: 'InvalidStatusCodeError' })
    expect(error.res.data).toBe('nope')
  })
})
