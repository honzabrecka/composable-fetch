const isPromise = (v: any) => !!v
  && (typeof v === 'object' || typeof v === 'function')
  && typeof v.then === 'function'

const pipeP = (...fns: Function[]) => (value: any) => {
  return new Promise((resolve, reject) => {
    const run = ([f, ...fns]) => (value: any) => {
      if (!f) resolve(value)
      else {
        value = f(value)
        if (isPromise(value)) value.then(run(fns)).catch(reject)
        else run(fns)(value)
      }
    }
    run(fns)(value)
  })
}

const delay = (time: number) => new Promise<void>((resolve, _) => {
  setTimeout(() => resolve(), time)
})

const delayedFail = (timeout: number) => delay(timeout).then(() => {
  throw new Error('Timeout')
})

export type Delay = (i: number) => Promise<void>

const delays = {
  constant: (time: number = 1000): Delay => (i: number) => delay(time),
  exponential: (time: number = 1000): Delay => (i: number) => delay(i * i * time),
  linear: (time: number = 1000): Delay => (i: number) => delay(i * time),
}

export interface Request {
  url: string
  method?: string
  headers?: object
  body?: any
}

export type Fetch = (url: string, req: Request) => Promise<Response>

const fetch1 = (fetch: Fetch) => (req: Request) => fetch(req.url, req)

const retryable = (fetch1: Function) => (req: Request) => () => fetch1(req)

const withBaseUrl = (baseUrl: string) => (req: Request) => {
  req.url = baseUrl + req.url
  return req
}

const withHeader = (header: string, value: string) => (req: Request) => {
  req.headers = req.headers || {}
  req.headers[header.toLowerCase()] = value
  return req
}

export type Encoder<A, B>  = (v: A) => B

const withEncodedBody = <A, B>(encoder: Encoder<A, B>) => (req: Request) => {
  if ((req.method && req.method.toLowerCase() !== 'get') && req.body)
    req.body = encoder(req.body)
  return req
}

const withSafe204 = (text: string = '', json: any = {}) => (res: Response) => {
  if (res.status === 204) {
    res.text = () => Promise.resolve(text)
    res.json = () => Promise.resolve(json)
  }
  return res
}

const decodeResponse = async (res: Response) => {
  const body = await res[(res.headers.get('content-type') || '').indexOf('application/json') === 0 ? 'json' : 'text']();
  (res as any).body = body
  return res
}

const decodeTextResponse = async (res: Response) => {
  const body = await res.text();
  (res as any).body = body
  return res
}

const decodeJSONResponse = async (res: Response) => {
  const body = await res.json();
  (res as any).body = body
  return res
}

const checkStatus = (res: Response) => {
  if (res.status < 200 || res.status >= 400)
    throw new Error('Invalid status code.')
  return res
}

export type Retryable<T> = () => T

const withTimeout = (timeout: number) => (retryableFetch: Retryable<Promise<Response>>): Retryable<Promise<Response>> => {
  return () => Promise.race([retryableFetch(), delayedFail(timeout)])
}

const withRetry = (max: number = 5, delay: Delay = delays.linear()) => (retryableFetch: Retryable<Promise<Response>>): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const run = (t: number) => {
      if (t === max + 1) return reject(new Error('Retry failed'))
      retryableFetch().then(resolve).catch((e: any) => {
        delay(t).then(() => run(t + 1))
      })
    }
    run(1)
  })
}

const composableFetch = {
  checkStatus,
  decodeJSONResponse,
  decodeResponse,
  decodeTextResponse,
  fetch1,
  retryable,
  withBaseUrl,
  withEncodedBody,
  withHeader,
  withRetry,
  withSafe204,
  withTimeout,
}

export {
  pipeP,
  composableFetch,
  delay,
  delays,
}
