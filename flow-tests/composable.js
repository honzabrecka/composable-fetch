// @flow

const { composableFetch, pipeP } = require('../index')

const fetch = pipeP(
  composableFetch.withBaseUrl('https://example.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  composableFetch.retryableFetch,
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeJSONResponse,
  composableFetch.checkStatus
)

fetch({ url: '/api/foo' })
