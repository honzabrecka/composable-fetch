import { asyncForAll, generators } from 'rapid-check'
import { delay, pipeP } from '../index'

type GeneratedValue = [number, boolean, number]

it('pipeP', async () => {
  const gen = generators.array(generators.tuple(
    // to check that composition is in right order '3' + '2' == '32'
    generators.choose(0, 9),
    // delayed? == fn returns promise
    generators.bool,
    // when delayed, then how much?
    generators.choose(0, 25),
  ), 0, 20)

  const prop = async (vs: GeneratedValue[]) => {
    const toFn = ([n, delayed, time]: GeneratedValue) => delayed
      ? (p: string) => delay(time).then((_) => p + n)
      : (p: string) => p + n

    const empty = 'x'
    const a = await pipeP.apply(null, vs.map(toFn))(empty)
    const b = vs.map(([n]) => n).reduce((a, b) => a + b, empty)

    return a === b
  }

  const [result] = await asyncForAll(gen, prop)
  expect(result).toBe(true)
}, 25000)
