import transit from 'transit-js'
import * as composableFetch from '../src/index.ts'
import { pipeP, tryCatchP } from '../src/index.ts'

const log = console.log.bind(console)
const writer = transit.writer('json')
const reader = transit.reader('json')

const fetch = pipeP(
  composableFetch.retryable(composableFetch.fetch1(globalThis.fetch)),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.withClone,
  composableFetch.checkStatus,
)

const data = ({ data }: any) => data

const JSONReq = pipeP(
  composableFetch.withBaseUrl('https://jsonplaceholder.typicode.com'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withJSONEncodedBody,
)

const JSONRes = composableFetch.decodeJSONResponse

const fetchJSON = tryCatchP(
  pipeP(JSONReq, fetch, JSONRes, data),
  composableFetch.logError(),
)

const encodeTransit = (v: unknown) => writer.write(v)

// httpbin echoes the raw request body back in the `data` field
const decodeTransit = (res: any) => {
  res.data = reader.read(res.data.data)
  return res
}

const transitReq = pipeP(
  composableFetch.withBaseUrl('https://httpbin.org'),
  composableFetch.withHeader('Content-Type', 'application/transit+json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(encodeTransit),
)

const transitRes = pipeP(composableFetch.decodeJSONResponse, decodeTransit)

const fetchTransit = tryCatchP(
  pipeP(transitReq, fetch, transitRes, data),
  composableFetch.logError(),
)

//
// usage:
//

const ignore = () => {}

fetchJSON({ url: '/todos/1' }).then(log).catch(ignore)
// or
fetchTransit({ url: '/anything', method: 'post', body: ['foo', 'bar'] as any })
  .then(log)
  .catch(ignore)
