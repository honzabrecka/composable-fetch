const $fetch = require('isomorphic-fetch')

const isPromise = (v) => !!v
  && (typeof v === 'object' || typeof v === 'function')
  && typeof v.then === 'function'

const pipeP = (...fns) => (value) => {
  return new Promise((resolve, reject) => {
    const run = ([f, ...fns]) => (value) => {
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

const delay = (time) => new Promise((resolve, _) => {
  setTimeout(() => resolve(), time)
})

const delayedFail = (timeout) => delay(timeout).then(() => {
  throw new Error('Timeout')
})

const delays = {
  constant: (time = 1000) => (i) => delay(time),
  linear: (time = 1000) => (i) => delay(i * time),
  exponential: (time = 1000) => (i) => delay(i * i * time)
}

const fetch = (req) => $fetch(req.url, req)

const retryableFetch = (req) => () => fetch(req)

const withBaseUrl = (baseUrl) => (req) => {
  req.url = baseUrl + req.url
  return req
}

const withHeader = (header, value) => (req) => {
  req.headers = req.headers || {}
  req.headers[header.toLowerCase()] = value
  return req
}

const withEncodedBody = (encoder) => (req) => {
  if ((req.method && req.method.toLowerCase() !== 'get') && req.body)
    req.body = encoder(req.body)
  return req
}

const withSafe204 = (text = '', json = {}) => (res) => {
  if (res.status === 204) {
    res.text = () => Promise.resolve(text),
    res.json = () => Promise.resolve(json)
  }
  return res
}

const decodeResponse = async (res) => {
  const body = await res[(res.headers.get('content-type') || '').indexOf('application/json') === 0 ? 'json' : 'text']()
  res.body = body
  return res
}

const decodeTextResponse = async (res) => {
  const body = await res.text()
  res.body = body
  return res
}

const decodeJSONResponse = async (res) => {
  const body = await res.json()
  res.body = body
  return res
}

const checkStatus = (res) => {
  if (res.status < 200 || res.status >= 400)
    throw new Error('Invalid status code.')
  return res
}

const withTimeout = (timeout) => (retryableFetch) => {
  return () => Promise.race([retryableFetch(), delayedFail(timeout)])
}

const withRetry = (max = 5, delay = delays.linear()) => (retryableFetch) => {
  return new Promise((resolve, reject) => {
    const run = (t) => {
      if (t === max) return reject(new Error('Retry failed'))
      retryableFetch().then(resolve).catch((e) => {
        delay(t).then(() => run(t + 1))
      })
    }
    run(0)
  })
}

module.exports = {
  pipeP,
  delay,
  delays,
  composableFetch: {
    fetch,
    retryableFetch,
    withBaseUrl,
    withHeader,
    withEncodedBody,
    withSafe204,
    decodeResponse,
    decodeTextResponse,
    decodeJSONResponse,
    checkStatus,
    withTimeout,
    withRetry,
  },
}
