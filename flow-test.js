// @flow

import { pipeP } from './index'

const a = (x: number): string => x + ''
const b = (x: string): number => parseInt(x)
const aP = (x: number) => Promise.resolve(x + '')
const bP = (x: string) => Promise.resolve(parseInt(x))

async function test() {
  await pipeP(a)(1)
  await pipeP(aP)(1)

  await pipeP(a, b)(1)
  await pipeP(aP, bP)(1)
  await pipeP(aP, b)(1)
  await pipeP(a, bP)(1)

  await pipeP(a, b, a)(1)
  await pipeP(aP, bP, aP)(1)
  await pipeP(aP, b, a)(1)
  await pipeP(a, bP, a)(1)

  // should fail
  // await pipeP(b)(1)
  // await pipeP(bP)(1)

  // await pipeP(a, a)(1)
  // await pipeP(b, b)(1)
  // await pipeP(aP, aP)(1)
  // await pipeP(bP, b)(1)

  // await pipeP(a, b, b)(1)
  // await pipeP(aP, bP, bP)(1)
  // await pipeP(aP, b, b)(1)
  // await pipeP(a, bP, a)("a")
}
