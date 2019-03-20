const { composableFetch, pipeP, tryCatchP } = require('../dist/index')
const $fetch = require('isomorphic-fetch')
const transit = require('transit-js')
const log = console.log.bind(console)
const writer = transit.writer('json')
const reader = transit.reader('json')

const fetch = tryCatchP(
  composableFetch.retryable(composableFetch.fetch1($fetch)),
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.withClone,
  composableFetch.checkStatus,
)

const JSONReq = pipeP(
  composableFetch.withBaseUrl('https://honzabrecka.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
)

const JSONRes = composableFetch.decodeJSONResponse

const fetchJSON = tryCatchP(
  pipeP(
    JSONReq,
    fetch,
    JSONRes,
  ),
  composableFetch.logFetchError,
)

const encodeTransit = (v) => writer.write(v)

const decodeTransit = (res) => {
  res.data = reader.read(res.data)
  return res
}

const transitReq = pipeP(
  composableFetch.withBaseUrl('https://echo-http-server.herokuapp.com'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(encodeTransit),
)

const transitRes = pipeP(
  composableFetch.decodeTextResponse,
  decodeTransit,
)

const fetchTransit = tryCatchP(
  pipeP(
    transitReq,
    fetch,
    transitRes,
  ),
  composableFetch.logError,
)

module.exports = {
  fetch,
  fetchJSON,
  fetchTransit,
}


//
// usage:
//

fetchJSON({ url: '/status' }).then(log).catch(log)
// or
fetchTransit({ url: '/', method: 'post', body: ['foo', 'bar'] }).then(log).catch(log)
