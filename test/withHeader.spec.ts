import { Headers } from 'node-fetch'
import { withHeader } from '../src/index'

(global as any).Headers = Headers

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

  it('assocs header', () => {
    const req = {
      body: 'bar',
      headers: new Headers(),
      method: 'post',
      url: 'foo',
    }
    const { headers } = withHeader('a', 'b')(req as any)
    expect((headers as any).get('a')).toEqual('b')
  })

  it('appends header', () => {
    const req = {
      body: 'bar',
      headers: new Headers({ 'Accept-Encoding': 'deflate' }),
      method: 'post',
      url: 'foo',
    }
    const { headers } = withHeader('Accept-Encoding', 'gzip')(req as any)
    expect((headers as any).get('Accept-Encoding')).toEqual('deflate, gzip')
  })
})
