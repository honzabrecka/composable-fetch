const $fetch = require('node-fetch')
const composableFetch = require('../dist/index')
const { pipeP, tryCatchP } = require('../dist/index')
const transit = require('transit-js')

const log = console.log.bind(console)
const writer = transit.writer('json')
const reader = transit.reader('json')

const fetch = pipeP(
  composableFetch.retryable(composableFetch.fetch1($fetch)),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.withClone,
  composableFetch.checkStatus,
)

const data = ({ data }) => data

const JSONReq = pipeP(
  composableFetch.withBaseUrl('https://example.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withJSONEncodedBody,
)

const JSONRes = composableFetch.decodeJSONResponse

const fetchJSON = tryCatchP(
  pipeP(
    JSONReq,
    fetch,
    JSONRes,
    data,
  ),
  composableFetch.logError(),
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
    data,
  ),
  composableFetch.logError(),
)

module.exports = {
  fetch,
  fetchJSON,
  fetchTransit,
}


//
// usage:
//

const ignore = () => {}

fetchJSON({ url: '/status' }).then(log).catch(ignore)
// or
fetchTransit({ url: '/', method: 'post', body: ['foo', 'bar'] }).then(log).catch(ignore)
