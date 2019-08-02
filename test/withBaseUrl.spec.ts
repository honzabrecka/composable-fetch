import { withBaseUrl } from '../src/index'

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
