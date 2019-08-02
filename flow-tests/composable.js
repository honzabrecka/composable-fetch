// @flow

const {
  pipeP,
  withBaseUrl,
  withHeader,
  withEncodedBody,
  retryableFetch,
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
  retryableFetch,
  withTimeout(1000),
  withRetry(),
  withSafe204(),
  decodeJSONResponse,
  checkStatus,
)

fetch({ url: '/api/foo' })
