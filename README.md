# composable-fetch [![CircleCI](https://circleci.com/gh/honzabrecka/composable-fetch/tree/master.svg?style=svg&circle-token=eefe6811545741764260a25f382c13da0d6e31a7)](https://circleci.com/gh/honzabrecka/composable-fetch/tree/master)

A library that:

 1. brings composition to fetch requests
 1. solves most common tasks such as retries, timeouts, status code checking, ...

## Installation

```
npm install composable-fetch
```

## Example

To consume JSON APIs:

```js
const { composableFetch, pipeP } = require('composable-fetch')

const log = console.log.bind(console)

const fetchJSON = pipeP(
  composableFetch.withBaseUrl('https://example.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  composableFetch.retryable(composableFetch.fetch1(fetch)),
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeJSONResponse,
  composableFetch.checkStatus
)

fetchJSON({ url: '/foo' }).then(log).catch(log)
fetchJSON({ url: '/foo', method: 'POST', body: [1, 2, 3] }).then(log).catch(log)
```

For better overview of how composability may help take a look at `examples/composable.js` example.

## pipeP

Performs left-to-right function composition. Each function in composition must be unary. If function returns promise, than `pipeP` waits to its resolution before it calls next function in chain.

## tryCatchP

`tryCatchP` takes two functions, an async tryer and a catcher. The returned function evaluates the tryer; if it does not throw, it simply returns the result. If the tryer does throw, the returned function evaluates the catcher function and returns its result.

## fetch

As noted above, `pipeP` expects unary functions. But because the `window.fetch` function is binary, it's necessary to wrap it with an unary lambda:

```js
type Request = {
  url: string,
  method?: string,
  headers?: object,
  body?: any,
}

const fetch1 = (req: Request) => window.fetch(req.url, req)
```

or use `composableFetch.fetch1` function which does this for you.

## Retries

When using `composableFetch.withRetry`, make sure that `fetch` is wrapped with `composableFetch.retryable`.

```js
const { composableFetch, delays } = require('composable-fetch')

composableFetch.withRetry(3, delays.constant())
// retries after 1 sec, then again after 1 sec, then again after 1 sec

composableFetch.withRetry(3, delays.linear())
// retries after 1 sec, then after 2 secs, then after 3 secs

composableFetch.withRetry(3, delays.exponential())
// retries after 1 sec, then after 4 secs, then after 9 secs

composableFetch.withRetry(6, delays.limited(3, delays.linear()))
// retries after 1 sec, then 2 secs, 3 secs, then 1 sec, 2 secs, 3 secs
```

Retry is often used together with `composableFetch.timeout`. Please note that when the timeout is reached, the fetch request is not killed. In other words request will always finish.

If you're dealing with a legacy API which may or may not successfully respond, then the following pattern may be used, thanks to composability:

```js
const fetchJSON = pipeP(
  // ...
  composableFetch.retryable(pipeP(
    composableFetch.fetch1(fetch),
    composableFetch.checkStatus// when this check fails => do retry
  )),
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(10),
  // ...
)
```

## Error handling & logging

To log all failed requests (any reason):

```js
const { composableFetch, pipeP, tryCatchP } = require('composable-fetch')

const fetchJSON: tryCatchP(
  pipeP(...),
  composableFetch.logFetchError,
)
```

In case you are interested in details of all requests made by your application, you can add simple `tap` function which performs desired side effect:

```js
const tap = (f) => (v) => { f(v); return v }

const fetchJSON = pipeP(
  // ...
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  tap(log),
  composableFetch.retryable(composableFetch.fetch1(fetch)),
  composableFetch.withTimeout(1000),
  // ...
)
```
