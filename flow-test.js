// @flow

import { pipeP } from './index'

const a = (x: number): string => x + ''
const b = (x: string): number => parseInt(x)
const aP = (x: number): Promise<string> => Promise.resolve(x + '')
const bP = (x: string): Promise<number> => Promise.resolve(parseInt(x))

pipeP(a, b)(1)
pipeP(aP, bP)(1)
pipeP(aP, b)(1)
pipeP(a, bP)(1)
