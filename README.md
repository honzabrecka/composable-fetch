# composable-fetch

A library that brings composition to fetch requests.

## Installation

```
npm install composable-fetch
```

## pipeP

Performs left-to-right function composition. Each function in composition must be unary. If function returns promise, than `pipeP` wait to its resolution before it calls next function in chain.

## Request format

```js
const req = {
  url: string,
  method?: string,
  headers?: object,
  body?: any,
}
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
  composableFetch.retryableFetch,
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeResponse,
  composableFetch.checkStatus,
)

fetchJSON({ url: '/foo' }).then(log).catch(log)
```

## Retries

When using `composableFetch.withRetry`, make sure you're using `composableFetch.retryableFetch` instead of `composableFetch.fetch`.

```js
const { composableFetch, delays } = require('composable-fetch')

composableFetch.withRetry(3, delays.constant())
// retries after 1 sec, then again after 1 sec, then again after 1 sec

composableFetch.withRetry(3, delays.linear())
// retries after 1 sec, then after 2 secs, then after 3 secs

composableFetch.withRetry(3, delays.exponential())
// retries after 1 sec, then after 4 secs, then after 9 secs

// custom
const customDelay = (time = 1000) => (i) => delay(((i % 3) + 1) * time),
composableFetch.withRetry(15, customDelay())
```
