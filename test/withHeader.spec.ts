import { describe, expect, it } from 'vitest'
import { withHeader } from '../src/index.ts'

describe('withHeader', () => {
  it('assocs header', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withHeader('a', 'b')(req)).toEqual({
      body: 'bar',
      headers: { a: 'b' },
      method: 'post',
      url: 'foo',
    })
  })

  it('assocs header, key converts to lower case', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withHeader('A', 'b')(req)).toEqual({
      body: 'bar',
      headers: { a: 'b' },
      method: 'post',
      url: 'foo',
    })
  })

  it('assocs header into Headers instance', () => {
    const req = {
      body: 'bar',
      headers: new Headers(),
      method: 'post',
      url: 'foo',
    }
    const { headers } = withHeader('a', 'b')(req as any)
    expect((headers as any).get('a')).toEqual('b')
  })

  it('overrides header in Headers instance', () => {
    const req = {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      url: 'foo',
    }
    const { headers } = withHeader('Content-Type', 'application/json')(req)
    expect((headers as Headers).get('Content-Type')).toEqual('application/json')
  })

  it('overrides header with different case in plain object', () => {
    const req = {
      headers: { 'Content-Type': 'text/plain', Accept: 'text/html' },
      url: 'foo',
    }
    expect(withHeader('content-type', 'application/json')(req).headers).toEqual(
      { Accept: 'text/html', 'content-type': 'application/json' },
    )
  })

  it('assocs header into array of tuples', () => {
    const req: any = {
      headers: [['X-Foo', 'bar']],
      url: 'foo',
    }
    const { headers } = withHeader('Accept', 'application/json')(req)
    expect(headers).toEqual([
      ['X-Foo', 'bar'],
      ['Accept', 'application/json'],
    ])
  })

  it('overrides header with different case in array of tuples', () => {
    const req: any = {
      headers: [
        ['accept', 'text/html'],
        ['X-Foo', 'bar'],
      ],
      url: 'foo',
    }
    const { headers } = withHeader('Accept', 'application/json')(req)
    expect(headers).toEqual([
      ['X-Foo', 'bar'],
      ['Accept', 'application/json'],
    ])
  })
})
