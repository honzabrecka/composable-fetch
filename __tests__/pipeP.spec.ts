import { pipeP } from '../index'

const add5 = (n) => n + 5
const rem3 = (n) => n - 3
const toPromise = (f) => (v) => Promise.resolve(f(v))

describe('pipeP', () => {
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
