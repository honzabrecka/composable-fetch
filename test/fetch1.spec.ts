import { fetch1 } from '../src/index'

it('fetch1', () => {
  const req = {
    body: 'bar',
    headers: {},
    method: 'post',
    url: 'foo',
  }
  const fetch = jest.fn()
  fetch1(fetch)(req)
  expect(fetch).toBeCalledWith('foo', {
    body: 'bar',
    headers: {},
    method: 'post',
    url: 'foo',
  })
})
