import { afterEach, describe, expect, it } from 'vitest'
import { decodeRetryAfterHeaderValue } from '../src/index.ts'

const originalNow = Date.now

afterEach(() => {
  Date.now = originalNow
})

const resWithRetryAfter = (value: string): any => {
  const headers = new Headers()
  headers.set('retry-after', value)
  return { headers }
}

const date = Date.UTC(1994, 10, 6, 8, 49, 37)

describe('decodeRetryAfterHeaderValue', () => {
  it('returns undefined when passed response = undefined', () => {
    expect(decodeRetryAfterHeaderValue(undefined)).toBe(undefined)
  })

  it('decodes delta-seconds value to milliseconds', () => {
    expect(decodeRetryAfterHeaderValue(resWithRetryAfter('20'))).toBe(20000)
  })

  it.each([
    ['IMF-fixdate', 'Sun, 06 Nov 1994 08:49:37 GMT'],
    ['RFC 850', 'Sunday, 06-Nov-94 08:49:37 GMT'],
    ['asctime', 'Sun Nov  6 08:49:37 1994'],
  ])('decodes %s date value', (_, value) => {
    Date.now = () => date - 20000
    expect(decodeRetryAfterHeaderValue(resWithRetryAfter(value))).toBe(20000)
  })

  it('clamps date in the past to 0', () => {
    Date.now = () => date + 20000
    const res = resWithRetryAfter('Sun, 06 Nov 1994 08:49:37 GMT')
    expect(decodeRetryAfterHeaderValue(res)).toBe(0)
  })

  it.each(['soon', '1.5', '-1', '1994-11-06T08:49:37Z'])(
    'returns undefined for invalid value %j',
    (value) => {
      expect(decodeRetryAfterHeaderValue(resWithRetryAfter(value))).toBe(
        undefined,
      )
    },
  )
})
