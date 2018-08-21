// @flow

import { pipeP, tryCatchP, composableFetch } from './index'
import type { UnaryFn, UnaryFnP } from './index'

const ns: UnaryFn<number, string> = (x: number): string => x + ''
const sn: UnaryFn<string, number> = (x: string): number => parseInt(x)
const nsP: UnaryFn<number, string> = (x: number): Promise<string> => Promise.resolve(x + '')
const snP: UnaryFn<string, number> = (x: string): Promise<number> => Promise.resolve(parseInt(x))

const okPipes: Promise<number>[] = [
  pipeP(ns, sn)(1),
  pipeP(nsP, snP)(1),
  pipeP(nsP, sn)(1),
  pipeP(ns, snP)(1),
]

const fetchJSON = pipeP(
  composableFetch.withBaseUrl('https://example.com/api'),
  composableFetch.withHeader('Content-Type', 'application/json'),
  composableFetch.withHeader('Accept', 'application/json'),
  composableFetch.withEncodedBody(JSON.stringify),
  composableFetch.retryable(composableFetch.fetch1(fetch)),
  composableFetch.withTimeout(1000),
  composableFetch.withRetry(),
  composableFetch.withSafe204(),
  composableFetch.decodeJSONResponse,
  composableFetch.checkStatus
)
