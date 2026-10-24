import { forAll, generators } from 'rapid-check'
import { describe, expect, it } from 'vitest'
import { delay, pipeP } from '../src/index.ts'

describe('pipeP', () => {
  it('pipeP', async () => {
    const prop = async (vs: any) => {
      const toFn = ([n, delayed, time]: any) =>
        delayed
          ? (p: string) => delay(time).then((_: any) => p + n)
          : (p: string) => p + n

      const empty = 'x'
      const a = await pipeP.apply(null, vs.map(toFn))(empty)
      const b = vs
        .map(([n]: any) => n)
        .reduce((a: string, b: string) => a + b, empty)

      return a === b
    }
    const gen = generators.array(
      generators.tuple(
        // to check that composition is in right order '3' + '2' == '32'
        generators.choose(0, 9),
        // delayed? == fn returns promise
        generators.bool,
        // when delayed, then how much?
        generators.choose(0, 25),
      ),
      0,
      20,
    )

    const result = await forAll(gen, prop)
    expect(result).toMatchObject({ success: true })
  }, 25000)

  it('fails the pipe when any function fails', async () => {
    await expect(
      pipeP(() => {
        throw new Error('Fail')
      })('whatever'),
    ).rejects.toThrow('Fail')
  })
})
