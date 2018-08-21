// @flow

import { pipeP, tryCatchP } from './index'
import type { UnaryFn, UnaryFnP } from './index'

const ns = (x: number): string => x + ''
const sn = (x: string): number => parseInt(x)
const nsP = (x: number): Promise<string> => Promise.resolve(x + '')
const snP = (x: string): Promise<number> => Promise.resolve(parseInt(x))

const okPipes: Promise<number>[] = [
  pipeP(ns, sn)(1),
  pipeP(nsP, snP)(1),
  pipeP(nsP, sn)(1),
  pipeP(ns, snP)(1),
]
