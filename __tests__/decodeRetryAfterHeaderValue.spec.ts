import { composableFetch } from '../index'

const originalNow = Date.now

afterEach(() => {
  Date.now = originalNow
})

describe('decodeRetryAfterHeaderValue', () => {
  it('returns undefined when passed response = undefined', () => {
    expect(composableFetch.decodeRetryAfterHeaderValue(undefined)).toBe(undefined)
  })

  it('decodes number value', () => {
    const headers = new Headers()
    headers.set('retry-after', 20 as any)
    const res: any = { headers }
    expect(composableFetch.decodeRetryAfterHeaderValue(res)).toBe(20)
  })

  it('decodes date value', () => {
    const d = new Date()
    Date.now = () => d.getTime() - 20
    const headers = new Headers()
    headers.set('retry-after', d.toISOString())
    const res: any = { headers }
    expect(composableFetch.decodeRetryAfterHeaderValue(res)).toBe(20)
  })
})
