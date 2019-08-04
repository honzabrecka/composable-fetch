import { withJSONEncodedBody } from '../src/index'

describe('withEncodedBody', () => {
  it('does nothing when body is empty', () => {
    const req = {
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withJSONEncodedBody(req)).toEqual({
      headers: {},
      method: 'post',
      url: 'foo',
    })
  })

  it('does nothing when method == get', () => {
    const req = {
      body: 'a',
      headers: {},
      url: 'foo',
    }
    expect(withJSONEncodedBody(req)).toEqual({
      body: 'a',
      headers: {},
      url: 'foo',
    })
  })

  it('encodes body when method != get && body', () => {
    const req = {
      body: 'a',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withJSONEncodedBody(req)).toEqual({
      body: '"a"',
      headers: {},
      method: 'post',
      url: 'foo',
    })
  })
})
