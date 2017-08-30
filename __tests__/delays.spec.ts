import { delays } from '../index'

jest.useFakeTimers()

const runWithAssert = (delay, expected) => {
  jest.clearAllMocks()
  expected.forEach((_, i) => delay(i + 1))
  expected.forEach((v, i) => expect((setTimeout as any).mock.calls[i][1]).toBe(v))
}

describe('delays', () => {
  it('tests constant delay', async () => {
    const delay = delays.constant()
    const expected = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
    runWithAssert(delay, expected)
  })

  it('tests linear delay', async () => {
    const delay = delays.linear()
    const expected = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
    runWithAssert(delay, expected)
  })

  it('tests exponential delay', async () => {
    const delay = delays.exponential()
    const expected = [1000, 4000, 9000, 16000, 25000, 36000, 49000, 64000, 81000, 100000]
    runWithAssert(delay, expected)
  })

  it('tests linear delay with limit 3', async () => {
    const delay = delays.limited(3, delays.linear())
    const expected = [1000, 2000, 3000, 1000, 2000, 3000, 1000, 2000, 3000, 1000]
    runWithAssert(delay, expected)
  })
})
