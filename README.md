# composable-fetch [![CircleCI](https://circleci.com/gh/honzabrecka/composable-fetch/tree/master.svg?style=svg&circle-token=eefe6811545741764260a25f382c13da0d6e31a7)](https://circleci.com/gh/honzabrecka/composable-fetch/tree/master)

 - Composable and extensible
 - Just javascript and promises
 - Brings solutions for most common cases such as status code checking, body encoding/decoding, retries & retries strategies, ...
 - Provides functional API
 - First class support for both TypeScript and Flow

## Installation

```
npm install composable-fetch
```

## Example

```js
const composableFetch = require('composable-fetch')

const log = console.log.bind(console)

const fetchJSON = composableFetch.pipeP(
  composableFetch.withBaseUrl('https://example.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  composableFetch.retryableFetch,
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeJSONResponse,
  composableFetch.checkStatus
)

fetchJSON({ url: '/foo' }).then(log).catch(log)
fetchJSON({ url: '/foo', method: 'POST', body: [1, 2, 3] }).then(log).catch(log)
```

For better overview of how composability may help take a look at `examples/composable.js` example.

## Overview

The main concept of composable-fetch is [piping (left-to-right composition)](#pipep) - passing data through pipe of unary functions. Pipe typically has three blocks, subpipes ([see API](#api) for more details about applicable functions):

```
pipe = enhance request -> fetch (with retries) -> enhance response
```

## fetch

Composable-fetch comes with [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) and exposes its own (wrapped unary) `fetch`, respectively `retryableFetch` function.

## Retries

```js
withRetry({ max: 3, delay: delays.constant() })
// retries after 1 sec, then again after 1 sec, then again after 1 sec

withRetry({ max: 3, delay: delays.linear() })
// retries after 1 sec, then after 2 secs, then after 3 secs

withRetry({ max: 3, delay: delays.exponential() })
// retries after 1 sec, then after 4 secs, then after 9 secs

withRetry({ max: 6, delay: delays.limited(3, delays.linear()) })
// retries after 1 sec, then 2 secs, 3 secs, then 1 sec, 2 secs, 3 secs
```

When using `withRetry`, make sure that you are using `retryableFetch` instead of `fetch`.

## Error handling & logging

To pretty print failed request (any reason):

```js
const fetchJSON: tryCatchP(
  pipeP(/* ... */),
  logError(), // to console.error by default
)
```

In case you are interested in details of all requests made by your application, you can add simple `tap` function which performs desired side effect:

```js
const tap = (f) => (v) => {
  f(v)
  return v
}

const fetchJSON = pipeP(
  // ...
  withHeader('Accept', 'application/json'),
  withEncodedBody(JSON.stringify),
  tap(console.log.bind(console, 'request:')),
  fetch,
  // ...
)
```

The `fetch` API has one major "limitation" - body of the response can be read just once. For example you deal with an API that returns HTML encoded reponse even though you asked for JSON encoded one - fetch fails on DecodeResponseError. You cannot just catch this error and decode that HTML encoded response, because you already read it. In browser it typically does not matter, you have network tab with all the details, however in non-browser environment it's not that easy, therefore composable-fetch comes with `withClone` function that gives you second chance to read the response:

```js
const fetchJSON = tryCatchP(
  pipeP(
    // ...
    withRetry(),
    withClone,
    decodeJSONResponse, // this will fail for any non application/json response
    // ...
  ),
  logError
)
```

## API

### pipeP

Performs left-to-right function composition. Each function in composition must be unary. If function returns promise, than `pipeP` waits to its resolution before it calls next function in chain.

### tryCatchP

`tryCatchP` takes two functions, an async trier and an async catcher. The returned function evaluates the trier; if it does not throw, it simply returns the result. If it does throw, the catcher function is evaluated and result is returned.

### Enhance request phase

```js
withBaseUrl: (baseUrl: string) => (req: Request) => Request
withEncodedBody: <A, B>(encoder: Encoder<A, B>) => (req: Request) => Request
withJSONEncodedBody: (req: Request) => Request
withHeader: (header: string, value: string) => (req: Request) => Request
withCredentials: (value: 'omit' | 'same-origin' | 'include') => (req: Request) => Request
withTimeout: (timeout: number) => (fetch: RetryableFetch) => RetryableFetch
```

### Fetch phase

```js
fetch: UnaryFetch
fetch1: (fetch: BinaryFetch) => UnaryFetch
retryableFetch: (req: Request) => RetryableFetch
retryable: (fetch: UnaryFetch) => (req: Request) => RetryableFetch
withRetry: (options?: RetryOptions) => (fetch: RetryableFetch) => Promise<Response>
```

### Enhance response phase

```js
checkStatus: (res: Response) => Response
decodeArrayBufferResponse: (res: Response) => DecodedResponse
decodeBlobResponse: (res: Response) => DecodedResponse
decodeFormDataResponse: (res: Response) => DecodedResponse
decodeJSONResponse: (res: Response) => DecodedResponse
decodeResponse: (res: Response) => DecodedResponse
decodeTextResponse: (res: Response) => DecodedResponse
withSafe204: (text?: string, json?: any) => (res: Response) => Response
withClone: (res: Response) => Response
```

### Predefined pipes

```js
json: (options?: RetryOptions) => Promise<DecodedResponse>
text: (options?: RetryOptions) => Promise<DecodedResponse>
```
