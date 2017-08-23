const isPromise = (v: any) => !!v
  && (typeof v === 'object' || typeof v === 'function')
  && typeof v.then === 'function'

const pipeP = (...fns: Function[]) => (value: any) => {
  return new Promise((resolve, reject) => {
    const run = ([f, ...fns], value: any) => {
      if (!f)
        resolve(value)
      else {
        value = f(value)
        if (isPromise(value))
          value
            .then((value: any) => run(fns, value))
            .catch(reject)
        else
          run(fns, value)
      }
    }
    run(fns, value)
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

const decodeResponse = (res: Response) => {
  const contentType = (res.headers.get('content-type') || '')
  return contentType.indexOf('application/json') === 0
    ? decodeJSONResponse(res)
    : decodeTextResponse(res)
}

const decodeTextResponse = async (res: Response) => {
  (res as any).data =  await res.text()
  return res
}

const decodeJSONResponse = async (res: Response) => {
  (res as any).data = await res.json()
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
    const run = (i: number) => {
      if (i === max + 1)
        reject(new Error('Retry failed'))
      else
        retryableFetch()
          .then(resolve)
          .catch((_) => delay(i).then(() => run(i + 1)))
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
