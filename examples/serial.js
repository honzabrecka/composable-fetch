const { composableFetch, pipeP } = require('../index')
const fetch = require('isomorphic-fetch')
const log = console.log.bind(console)
const serialFetch = require('serial-fetch').default

const fetchJSON = pipeP(
  composableFetch.withBaseUrl('https://honzabrecka.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  composableFetch.retryable(pipeP(
    serialFetch(fetch),
    composableFetch.checkStatus
  )),
  composableFetch.withTimeout(6000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeResponse
)

// requests are run one by one
// for more info check https://github.com/honzabrecka/serial-fetch
fetchJSON({ url: '/aletta/status/201?sleep=5' }).then(log).catch(log)
fetchJSON({ url: '/aletta/status/200?sleep=2' }).then(log).catch(log)
