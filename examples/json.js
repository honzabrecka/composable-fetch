const { composableFetch, pipeP } = require('../dist/index')
const fetch = require('isomorphic-fetch')
const log = console.log.bind(console)

const fetchJSON = pipeP(
  composableFetch.withBaseUrl('https://honzabrecka.com/api'),
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

fetchJSON({ url: '/aletta/status/201' }).then(log).catch(log)
