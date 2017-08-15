# composable-fetch

A library that brings composition to fetch requests.

## Installation

```
npm install composable-fetch
```

## Examples

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
  composableFetch.decodeResponse,
  composableFetch.checkStatus
)

fetchJSON({ url: '/foo' }).then(log).catch(log)

```
## pipeP

Performs left-to-right function composition. Each function in composition must be unary. If function returns promise, than `pipeP` waits to its resolution before it calls next function in chain.

## fetch

As noted above, `pipeP` expects unary functions. But because the `window.fetch` function is binary, it's necessary to wrap it with an unary lambda:

```js
const $fetch = (req) => window.fetch(req.url, req)

// where req has the following interface:
const req = {
  url: string,
  method?: string,
  headers?: object,
  body?: any,
}
```

or use `composableFetch.fetch1` function which does this for you.

## Retries

When using `composableFetch.withRetry`, make sure that `fetch` is wrapped with `composableFetch.retryable`.

```js
const { composableFetch, delays, delay } = require('composable-fetch')

composableFetch.withRetry(3, delays.constant())
// retries after 1 sec, then again after 1 sec, then again after 1 sec

composableFetch.withRetry(3, delays.linear())
// retries after 1 sec, then after 2 secs, then after 3 secs

composableFetch.withRetry(3, delays.exponential())
// retries after 1 sec, then after 4 secs, then after 9 secs

const customDelay = (time = 1000) => (i) => delay((((i - 1) % 3) + 1) * time),
composableFetch.withRetry(6, customDelay())
// retries after 1 sec, then 2 secs, 3 secs, then 1 sec, 2 secs, 3 secs
```

Retry is often used together with `composableFetch.timeout`.

If you're dealing with a legacy API which may or may not successfully respond, then the following pattern may be used:

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
