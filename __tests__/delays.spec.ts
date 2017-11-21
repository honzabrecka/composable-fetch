import { delays } from '../index'

jest.useFakeTimers()

const runWithAssert = (delay, f, expected) => {
  jest.clearAllMocks()
  expected.forEach((_, i) => delay(i + 1))
  expected.forEach((v, i) => expect(f.mock.calls[i][0]).toBe(v))
  expected.forEach((v, i) => expect((setTimeout as any).mock.calls[i][1]).toBe(v))
}

describe('delays', () => {
  it('tests constant delay', async () => {
    const f = jest.fn()
    const delay = delays.constant(1000, f)
    const expected = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
    runWithAssert(delay, f, expected)
  })

  it('tests linear delay', async () => {
    const f = jest.fn()
    const delay = delays.linear(1000, f)
    const expected = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
    runWithAssert(delay, f, expected)
  })

  it('tests exponential delay', async () => {
    const f = jest.fn()
    const delay = delays.exponential(1000, f)
    const expected = [1000, 4000, 9000, 16000, 25000, 36000, 49000, 64000, 81000, 100000]
    runWithAssert(delay, f, expected)
  })

  it('tests linear delay with limit 3', async () => {
    const f = jest.fn()
    const delay = delays.limited(3, delays.linear(1000, f))
    const expected = [1000, 2000, 3000, 1000, 2000, 3000, 1000, 2000, 3000, 1000]
    runWithAssert(delay, f, expected)
  })
})
