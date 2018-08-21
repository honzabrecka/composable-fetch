import { composableFetch } from '../index'

describe('withCredentials', () => {
  it('assocs credentials property', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(composableFetch.withCredentials('same-origin')(req)).toEqual({
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
      credentials: 'same-origin',
    })
  })
})
