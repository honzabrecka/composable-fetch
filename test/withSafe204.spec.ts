import { withSafe204 } from '../src/index'

describe('withSafe204', () => {
  it('returns untouched response when res.status != 204', () => {
    const res = { status: 200 }
    expect(withSafe204()(res as any)).toBe(res)
  })

  it('assocs text and json methods with predefined values when res.status != 204', async () => {
    const res = { status: 204 }
    const safeRes = withSafe204()(res as any)
    const text = await safeRes.text()
    const json = await safeRes.json()
    expect(text).toBe('')
    expect(json).toEqual({})
  })
})
