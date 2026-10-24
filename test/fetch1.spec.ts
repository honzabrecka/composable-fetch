import { expect, it, vi } from 'vitest'
import { fetch1 } from '../src/index.ts'

it('fetch1', () => {
  const req = {
    body: 'bar',
    headers: {},
    method: 'post',
    url: 'foo',
  }
  const fetch = vi.fn()
  fetch1(fetch)(req)
  expect(fetch).toBeCalledWith('foo', {
    body: 'bar',
    headers: {},
    method: 'post',
    url: 'foo',
  })
})
