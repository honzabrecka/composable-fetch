import { asyncForAll, generators } from 'rapid-check'
import { delay, pipeP } from '../index'

const ns = (x: number): string => x + ''
const sn = (x: string): number => parseInt(x, 10)
const nsP = (x: number): Promise<string> => Promise.resolve(x + '')
const snP = (x: string): Promise<number> => Promise.resolve(parseInt(x, 10))

const okPipes: Array<Promise<number>> = [
  pipeP(ns, sn)(1),
  pipeP(nsP, snP)(1),
  pipeP(nsP, sn)(1),
  pipeP(ns, snP)(1),
]

it('pipeP', async () => {
  const gen = generators.array(generators.tuple(
    // to check that composition is in right order '3' + '2' == '32'
    generators.choose(0, 9),
    // delayed? == fn returns promise
    generators.bool,
    // when delayed, then how much?
    generators.choose(0, 25),
  ), 0, 20)

  const prop = async (vs) => {
    const toFn = ([n, delayed, time]) => delayed
      ? (p) => delay(time).then((_) => p + n)
      : (p) => p + n

    const empty = 'x'
    const a = await pipeP.apply(null, vs.map(toFn))(empty)
    const b = vs.map(([n]) => n).reduce((a, b) => a + b, empty)

    return a === b
  }

  const [result] = await asyncForAll(gen, prop)
  expect(result).toBe(true)
}, 25000)
