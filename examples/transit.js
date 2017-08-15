const { composableFetch, pipeP } = require('../dist/index')
const fetch = require('isomorphic-fetch')
const transit = require('transit-js')
const log = console.log.bind(console)
const writer = transit.writer('json')
const reader = transit.reader('json')

const decodeTransit = (res) => {
  res.body = reader.read(res.body)
  return res
}

const fetchTransit = pipeP(
  composableFetch.withBaseUrl('https://echo-http-server.herokuapp.com'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody((v) => writer.write(v)),
  composableFetch.retryable(composableFetch.fetch1(fetch)),
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeTextResponse,
  decodeTransit,
  composableFetch.checkStatus
)

fetchTransit({ url: '/', method: 'post', body: ['foo', 'bar'] }).then(log).catch(log)
