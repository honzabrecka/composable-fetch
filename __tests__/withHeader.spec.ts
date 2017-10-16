import { Headers } from 'node-fetch'
import { composableFetch } from '../index'

(global as any).Headers = Headers

describe('withHeader', () => {
  it('assocs header', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(composableFetch.withHeader('a', 'b')(req)).toEqual({
      body: 'bar',
      headers: { a: 'b' },
      method: 'post',
      url: 'foo',
    })
  })

  it('assocs header, key converts to lower case', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(composableFetch.withHeader('A', 'b')(req)).toEqual({
      body: 'bar',
      headers: { a: 'b' },
      method: 'post',
      url: 'foo',
    })
  })
})
