import { composableFetch } from '../index'

it('retryable', () => {
  const req = { url: 'foo' }
  const fetch = jest.fn()
  composableFetch.retryable(fetch)(req)()
  expect(fetch).toBeCalledWith({ url: 'foo' })
})
