const fetch = require('isomorphic-fetch')

const pipe = (...fns) => (value) => fns.reduce((r, f) => f(r), value)

const delay = (time) => new Promise((resolve, _) => { setTimeout(() => resolve(), time) })

const requestMiddlewares = {

  withBaseUrl: (baseUrl) => (req) => {
    return Object.assign(req, { url: baseUrl + req.url })
  },

  withHeader: (header, value) => (req) => {
    return Object.assign(req, { headers: Object.assign(req.headers || {}, { [header]: value }) })
  },

  withEncodedBody: (encoder) => (req) => {
    if ((req.method && req.method.toLowerCase() !== 'get') && req.body)
      return Object.assign(req, { body: encoder(req.body) })
    return req
  },

}

const delays = {
  constant: (time = 1000) => (i) => delay(time),
  linear: (time = 1000) => (i) => delay(i * time),
  exponential: (time = 1000) => (i) => delay(i * i * time)
}

const responseMiddlewares = {

  withSafe204: (text = '', json = {}) => (req, res, next) => {
    if (res.status === 204) {
      next(Object.assign(res, {
        text: () => Promise.resolve(text),
        json: () => Promise.resolve(json)
      }))
      return
    }

    next(res)
  },

  decodeResponse: async (req, res, next) => {
    try {
      const body = await res[(res.headers.get('content-type') || '').indexOf('application/json') === 0 ? 'json' : 'text']()
      next(Object.assign(res, { body }))
    } catch (e) {
      next(e)
    }
  },

  decodeTextResponse: async (req, res, next) => {
    try {
      const body = await res.text()
      next(Object.assign(res, { body }))
    } catch (e) {
      next(e)
    }
  },

  decodeJSONResponse: async (req, res, next) => {
    try {
      const body = await res.json()
      next(Object.assign(res, { body }))
    } catch (e) {
      next(e)
    }
  },

  checkStatus: (req, res, next) => {
    if (res.status < 200 || res.status >= 400)
      return next(new Error('Invalid status code.'))

    next(res)
  },

  withRetry: (max = 5, delay = delays.linear()) => (req, res, next) => {
    if (res.status >= 500) {
      if (!req.retry || req.retry < max) {
        const retry = (req.retry || 0) + 1
        delay(retry).then(() => next(Object.assign(req, { retry }), res))
      } else {
        next(new Error('Retry failed.'))
      }

      return
    }

    next(res)
  },

  tap: (f) => (req, res, next) => {
    f(req, res)
    next(res)
  }

}

const composableFetch = (requestMiddlewares = []) => (responseMiddlewares = []) => (req) => {
  const reqM = pipe.apply(null, requestMiddlewares)(req)

  return fetch(reqM.url, reqM).then((res) => new Promise((resolve, reject) => {

    const error = (e, req, res) => {
      const err = new Error(e.message)
      err.original = e
      err.req = req
      err.res = res
      return err
    }

    const next = ([head, ...tail], req, res) => {
      if (!head) return res
      head(req, res, (...args) => {
        if (args.length === 1 && args[0] instanceof Error) reject(error(args[0], req, res))
        else if (args.length === 1) next(tail, req, args[0])
        else if (args.length === 2) next([head].concat(tail), args[0], args[1])
        else reject(error(new Error('next function called with wrong arity')))
      })
    }

    next(responseMiddlewares.concat((req, res) => resolve(res)), reqM, res)
  }))
}

module.exports = {
  pipe,
  delay,
  delays,
  requestMiddlewares,
  responseMiddlewares,
  fetch: composableFetch,
}
