import { withCredentials } from '../src/index'

describe('withCredentials', () => {
  it('assocs credentials property', () => {
    const req = {
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
    }
    expect(withCredentials('same-origin')(req)).toEqual({
      body: 'bar',
      headers: {},
      method: 'post',
      url: 'foo',
      credentials: 'same-origin',
    })
  })
})
