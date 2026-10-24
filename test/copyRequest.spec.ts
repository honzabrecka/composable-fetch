import { describe, expect, it } from 'vitest'
import {
  copyHeaders,
  copyRequest,
  json,
  withBaseUrl,
  withCredentials,
  withEncodedBody,
  withHeader,
} from '../src/index.ts'

describe('copyHeaders', () => {
  it('returns undefined for undefined', () => {
    expect(copyHeaders(undefined)).toBe(undefined)
  })

  it('copies plain object', () => {
    const headers = { a: 'b' }
    const copy = copyHeaders(headers)
    expect(copy).toEqual(headers)
    expect(copy).not.toBe(headers)
  })

  it('copies array of tuples including tuples', () => {
    const headers: [string, string][] = [['a', 'b']]
    const copy = copyHeaders(headers) as [string, string][]
    expect(copy).toEqual(headers)
    expect(copy).not.toBe(headers)
    expect(copy[0]).not.toBe(headers[0])
  })

  it('copies Headers instance', () => {
    const headers = new Headers({ a: 'b' })
    const copy = copyHeaders(headers) as Headers
    expect(copy).toBeInstanceOf(Headers)
    expect(copy).not.toBe(headers)
    expect(copy.get('a')).toBe('b')
  })
})

describe('copyRequest', () => {
  it('copies request with headers and applies patch', () => {
    const req = { url: 'foo', method: 'POST', headers: { a: 'b' } }
    const copy = copyRequest(req, { url: 'bar' })
    expect(copy).toEqual({ url: 'bar', method: 'POST', headers: { a: 'b' } })
    expect(copy).not.toBe(req)
    expect(copy.headers).not.toBe(req.headers)
  })

  it('lets patch override headers', () => {
    const req = { url: 'foo', headers: { a: 'b' } }
    expect(copyRequest(req, { headers: { c: 'd' } }).headers).toEqual({
      c: 'd',
    })
  })
})

describe('request enhancers', () => {
  const original = () => ({
    url: '/foo',
    method: 'POST',
    body: { a: 1 } as any,
    headers: { 'Content-Type': 'text/plain' },
  })

  it.each([
    ['withBaseUrl', withBaseUrl('https://example.com')],
    ['withHeader', withHeader('Content-Type', 'application/json')],
    ['withCredentials', withCredentials('include')],
    ['withEncodedBody', withEncodedBody(JSON.stringify)],
  ])('%s does not mutate passed request', (_, enhance) => {
    const req = original()
    enhance(req)
    expect(req).toEqual(original())
  })

  it('withHeader does not mutate passed Headers instance', () => {
    const headers = new Headers({ a: 'b' })
    withHeader('a', 'c')({ url: 'foo', headers })
    expect(headers.get('a')).toBe('b')
  })

  it('withHeader does not mutate passed array of tuples', () => {
    const headers: [string, string][] = [['a', 'b']]
    withHeader('c', 'd')({ url: 'foo', headers })
    expect(headers).toEqual([['a', 'b']])
  })

  it('reused request is sent the same way twice', async () => {
    const sent: any[] = []
    const fetch = async (url: string, init: any) => {
      sent.push({ url, body: init.body })
      return new Response('{}')
    }
    const fetchJSON = json(fetch)
    const req = { url: '/foo', method: 'POST', body: { a: 1 } as any }
    await fetchJSON(req)
    await fetchJSON(req)
    expect(sent).toEqual([
      { url: '/foo', body: '{"a":1}' },
      { url: '/foo', body: '{"a":1}' },
    ])
    expect(req.body).toEqual({ a: 1 })
  })
})
