import { describe, expect, it } from 'vitest'
import { withEncodedBody } from '../src/index.ts'

const encoder = (v: string) => `${v}b`

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

  it('does nothing when method == get', () => {
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

  it.each([
    [0, '0b'],
    [false, 'falseb'],
    ['', 'b'],
  ])('encodes falsy body %j', (body, encoded) => {
    const req: any = { body, method: 'post', url: 'foo' }
    expect(withEncodedBody(encoder)(req).body).toBe(encoded)
  })

  it('does nothing when body is null', () => {
    const req = { body: null, method: 'post', url: 'foo' }
    expect(withEncodedBody(encoder)(req).body).toBe(null)
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
