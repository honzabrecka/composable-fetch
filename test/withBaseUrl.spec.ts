import { describe, expect, it } from 'vitest'
import { withBaseUrl } from '../src/index.ts'

describe('withBaseUrl', () => {
  it('prepends baseUrl before req.url', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withBaseUrl('http://example.com/')(req)).toEqual({
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'http://example.com/foo',
    })
  })
})
