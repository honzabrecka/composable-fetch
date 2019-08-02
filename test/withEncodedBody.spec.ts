import { withEncodedBody } from '../src/index'

const encoder = (v: string) => v + 'b'

describe('withEncodedBody', () => {
  it('does nothing when body is empty', () => {
    const req = {
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withEncodedBody(encoder)(req)).toEqual({
      headers: {},
      method: 'post',
      url: 'foo',
    })
  })

  it('does nothing when body is empty', () => {
    const req = {
      body: 'a',
      headers: {},
      url: 'foo',
    }
    expect(withEncodedBody(encoder)(req)).toEqual({
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
    expect(withEncodedBody(encoder)(req)).toEqual({
      body: 'ab',
      headers: {},
      method: 'post',
      url: 'foo',
    })
  })
})
