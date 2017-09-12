import { asyncForAll, generators } from 'rapid-check'
import { delay, pipeP } from '../index'

const add5 = (n) => n + 5
const rem3 = (n) => n - 3
const toPromise = (f) => (v) => Promise.resolve(f(v))

describe('pipeP', () => {
  it('tests pipeP', async () => {
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

  it('returns promise with untouched value for empty chain', async () => {
    const value = { foo: 'bar' }
    const result = await pipeP()(value)
    expect(result).toBe(value)
  })

  it('returns promise with applied left-to-right composition', async () => {
    const result = await pipeP(add5)(2)
    expect(result).toBe(7)
  })

  it('returns promise with applied left-to-right composition', async () => {
    const result = await pipeP(add5, rem3)(2)
    expect(result).toBe(4)
  })

  it('returns promise with applied left-to-right composition', async () => {
    const result = await pipeP(toPromise(add5), toPromise(rem3))(2)
    expect(result).toBe(4)
  })

  it('returns promise with applied left-to-right composition', async () => {
    const result = await pipeP(add5, toPromise(rem3))(2)
    expect(result).toBe(4)
  })

  it('returns promise with applied left-to-right composition', async () => {
    const result = await pipeP(toPromise(add5), rem3)(2)
    expect(result).toBe(4)
  })
})
