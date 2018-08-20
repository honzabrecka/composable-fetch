// @flow

import { pipeP, tryCatchP } from './index'
import type { UnaryFn, UnaryFnP } from './index'

const a = (x: number): string => x + ''
const b = (x: string): number => parseInt(x)
const aP = (x: number): Promise<string> => Promise.resolve(x + '')
const bP = (x: string): Promise<number> => Promise.resolve(parseInt(x))

pipeP(a, b)(1)
pipeP(aP, bP)(1)
pipeP(aP, b)(1)
pipeP(a, bP)(1)

const x: Promise<string> = tryCatchP(aP, () => 'foo')(1)

declare type Comp<A, B, C> = (f: UnaryFn<A, B>, g: UnaryFn<B, C>) => UnaryFnP<A, C>

const comp: Comp<*, * , *> = (f, g) => (v) => (g((f((v: any)): any)): any)

comp(a, b)(1)
comp(aP, bP)(1)
comp(aP, b)(1)
comp(a, bP)(1)
