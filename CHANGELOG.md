# Changelog

## 8.0.0

### Breaking changes

- Requires Node.js 22 or newer (`engines.node >= 22`). Flow types (`index.js.flow`) are no longer shipped.
- The package is ESM first (`"type": "module"`) with a CommonJS build, exposed through `exports`. Deep imports into `dist` are no longer possible.
- Request enhancers (`withBaseUrl`, `withHeader`, `withCredentials`, `withEncodedBody`, `withJSONEncodedBody`) no longer mutate the passed request, they return a copy. Code that read the changed `url`, `headers` or `body` from its own request object after the pipe ran now sees the original values.
- `withHeader` replaces an existing header with the same (case-insensitive) name instead of appending to it, for a `Headers` instance as well as for plain objects and arrays of tuples.
- `withRetry`: `max` is the number of retries, so `max: 3` makes at most 4 requests (previously 3). The default `max: 5` now makes up to 6 requests. `max: 0` disables retries.
- `delays.exponential` is now exponential: `1×, 2×, 4×, 8×…` the base time. The previous behaviour (`1×, 4×, 9×…`) is available as `delays.quadratic`.
- `decodeRetryAfterHeaderValue` treats a delay given in seconds as seconds (it returns milliseconds) and accepts only the HTTP-date formats from RFC 9110. An invalid value returns `undefined`, so the regular `delay` is used, and a date in the past returns `0`.
- `json()` fails with `InvalidStatusCodeError` instead of `DecodeResponseError` when a response with an invalid status code has a body that can't be decoded (e.g. an HTML 404 page).

### Added

- `copyRequest(req, patch)` and `copyHeaders(headers)` helpers for writing custom request enhancers that don't mutate the request.
- `withRetry({ filter })` decides which requests are retried, e.g. only idempotent ones. Defaults to `() => true`.
- `delays.quadratic`.
- `retryable` also retries on the `UND_ERR_CONNECT_TIMEOUT` and `UND_ERR_SOCKET` errors and reads the error code from `error.cause.code`, so network errors of Node's built-in `fetch` (undici) are retried.
- Errors carry the request in `error.req`. A `RetryError` thrown by `withRetry` also has the errors of all tries in `error.errors`, and `logError` prints the URL and every try.
- The `Tap` type for the callback of `delays.*`.

### Fixed

- `withRetry` makes no further request once it has rejected (e.g. when `delay` rejects).
- `withEncodedBody` encodes falsy bodies such as `0`, `false` and `''`. It skips only `null` and `undefined`.
- `logError` prints decoded (non-string) response data with `JSON.stringify` instead of `[object Object]`, and no longer fails on a `RetryError` without `errors`.

## 7.0.0 (2020-11-03)

### Breaking changes

- `isomorphic-fetch` is no longer a dependency, and the `fetch` and `retryableFetch` exports were removed. `json` and `text` take the `fetch` implementation as their first argument: `json(fetch, options)`, `text(fetch, options)`.
- `withRetry` retries only errors with `id === 'RetryError'` (those thrown by `retryable`). Any other error is rethrown immediately.

### Added

- `abortable()` returns `{ signal, abort }` for aborting a request.
- `ignoreAbortError(handler)` calls `handler` for any error except `AbortError`.

### Fixed

- `decodeRetryAfterHeaderValue` handles a numeric `Retry-After` value that `node-fetch` returns as a string.
