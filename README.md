# composable-fetch

A library that brings composition to fetch requests

## Request -> Response

```js
const req = {
  url: string,
  method?: string,
  headers?: object,
  body?: any,
}

const res = {
  status: number,
  headers: object,
  body: any
}
```

## Examples

To consume JSON APIs:

```js
const log = console.log.bind(console)

const fetchJSON = fetch([
  requestMiddlewares.withBaseUrl('https://example.com/api'),
  requestMiddlewares.withHeader('Content-Type', 'application/json'),
  requestMiddlewares.withHeader('Accept', 'application/json'),
  requestMiddlewares.withEncodedBody(JSON.stringify),
])([
  responseMiddlewares.withRetry(),
  responseMiddlewares.withSafe204(),
  responseMiddlewares.decodeJSONResponse,
  responseMiddlewares.checkStatus,
])

fetchJSON({ url: '/foo' }).then(log).catch(log)
```

To consume transit APIs:

```js
const transit = require('transit-js')
const log = console.log.bind(console)
const writer = transit.writer()
const reader = transit.reader()

const decodeTransit = (req, res, next) =>
  next(Object.assign(res, { body: reader.read(res.body) }))

const fetchTransit = fetch([
  requestMiddlewares.withBaseUrl('https://example.com/api'),
  requestMiddlewares.withHeader('Content-Type', 'application/json'),
  requestMiddlewares.withHeader('Accept', 'application/json'),
  requestMiddlewares.withEncodedBody(writer.write),
])([
  responseMiddlewares.withRetry(),
  responseMiddlewares.withSafe204(),
  responseMiddlewares.decodeTextResponse,
  responseMiddlewares.checkStatus,
  decodeTransit,
])

fetchTransit({ url: '/bar', method: 'post', body: [1, 2, 3] }).then(log).catch(log)
```

To log each outcoming request (thanks to composition):

```js
const log = console.log.bind(console)

const tap = (f) => (v) => {
  f(v)
  return v
}

const fetch = fetch([tap(log)])()
```

## Retries

```js
responseMiddlewares.withRetry(3, delays.constant())
// retries after 1 sec, then again after 1 sec, then again after 1 sec

responseMiddlewares.withRetry(3, delays.linear())
// retries after 1 sec, then after 2 secs, then after 3 secs

responseMiddlewares.withRetry(3, delays.exponential())
// retries after 1 sec, then after 4 secs, then after 9 secs
```

## Error handling

Just add `catch` and in case of any error you get the following object:

```js
err.message
err.original
err.req = req
err.res = res
```
