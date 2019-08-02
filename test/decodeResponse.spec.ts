import { decodeResponse } from '../src/index'

interface Dict<T> {
  [key: string]: T
}

class Headers {
  private headers: Dict<string>
  constructor(headers: Dict<string>) {
    this.headers = headers
  }
  public get(header: string) {
    return this.headers[header]
  }
}

describe('decodeResponse', () => {
  it('decodes text response', async () => {
    const res = {
      headers: new Headers({ 'content-type': 'text/html' }),
      text: () => Promise.resolve('foo'),
    }
    const decodedRes = await decodeResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('decodes json response when content-type starts with application/json', async () => {
    const res = {
      headers: new Headers({ 'content-type': 'application/json' }),
      json: () => Promise.resolve('foo'),
    }
    const decodedRes = await decodeResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('decodes json response when content-type starts with application/json', async () => {
    const res = {
      headers: new Headers({ 'content-type': 'application/json; transit' }),
      json: () => Promise.resolve('foo'),
    }
    const decodedRes = await decodeResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('decodes formData response when content-type starts with application/x-www-form-urlencoded', async () => {
    const res = {
      formData: () => Promise.resolve('foo'),
      headers: new Headers({
        'content-type': 'application/x-www-form-urlencoded',
      }),
    }
    const decodedRes = await decodeResponse(res as any)
    expect((decodedRes as any).data).toBe('foo')
  })

  it('acts as identity when no pattern matches', async () => {
    const res = {
      headers: new Headers({}),
    }
    const decodedRes = await decodeResponse(res as any)
    expect(decodedRes as any).toBe(res)
  })
})
