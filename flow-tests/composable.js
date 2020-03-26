// @flow

const {
  pipeP,
  withBaseUrl,
  withHeader,
  withEncodedBody,
  fetch1,
  retryable,
  withTimeout,
  withRetry,
  withSafe204,
  decodeJSONResponse,
  checkStatus,
} = require('../index')

const fetch = pipeP(
  withBaseUrl('https://example.com/api'),
  withHeader('Content-Type', 'application/json'),
  withHeader('Accept', 'application/json'),
  withEncodedBody(JSON.stringify),
  retryable(fetch1(window.fetch)),
  withTimeout(1000),
  withRetry(),
  withSafe204(),
  decodeJSONResponse,
  checkStatus,
)

fetch({ url: '/api/foo' }).then(({ status }) => console.log(status))
