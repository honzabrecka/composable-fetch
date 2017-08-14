const { composableFetch, pipeP } = require('../index')
const fetch = require('isomorphic-fetch')
const log = console.log.bind(console)

// this will run request one by one
// for more info check https://github.com/honzabrecka/serial-fetch
const $serialFetch = require('serial-fetch').default
const serialFetch = $serialFetch(fetch)
const retryableSerialFetch = (req) => () => serialFetch(req.url, req)

const fetchJSON = pipeP(
  composableFetch.withBaseUrl('https://honzabrecka.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  retryableSerialFetch,
  composableFetch.withTimeout(6000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeResponse,
  composableFetch.checkStatus,
)

fetchJSON({ url: '/aletta/status/201?sleep=5' }).then(log).catch(log)
fetchJSON({ url: '/aletta/status/200?sleep=2' }).then(log).catch(log)
