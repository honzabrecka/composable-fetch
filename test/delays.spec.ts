import { describe, expect, it, type Mock, vi } from 'vitest'
import { type Delay, delays } from '../src/index.ts'

vi.useFakeTimers()
const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout')

const runWithAssert = (delay: Delay, f: Mock, expected: number[]) => {
  vi.clearAllMocks()
  for (let i = 0; i < expected.length; i++) delay(i + 1)
  expected.forEach((v, i) => {
    expect(f.mock.calls[i][0]).toBe(v)
    expect(setTimeoutSpy.mock.calls[i][1]).toBe(v)
  })
}

describe('delays', () => {
  it('tests constant delay', async () => {
    const f = vi.fn()
    const delay = delays.constant(1000, f)
    const expected = [
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
    ]
    runWithAssert(delay, f, expected)
  })

  it('tests linear delay', async () => {
    const f = vi.fn()
    const delay = delays.linear(1000, f)
    const expected = [
      1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
    ]
    runWithAssert(delay, f, expected)
  })

  it('tests exponential delay', async () => {
    const f = vi.fn()
    const delay = delays.exponential(1000, f)
    const expected = [
      1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000,
    ]
    runWithAssert(delay, f, expected)
  })

  it('tests quadratic delay', async () => {
    const f = vi.fn()
    const delay = delays.quadratic(1000, f)
    const expected = [
      1000, 4000, 9000, 16000, 25000, 36000, 49000, 64000, 81000, 100000,
    ]
    runWithAssert(delay, f, expected)
  })

  it('accepts tap taking time', () => {
    const times: number[] = []
    delays.linear(1000, (time: number) => times.push(time))(2)
    expect(times).toEqual([2000])
  })

  it('tests linear delay with limit 3', async () => {
    const f = vi.fn()
    const delay = delays.limited(3, delays.linear(1000, f))
    const expected = [
      1000, 2000, 3000, 1000, 2000, 3000, 1000, 2000, 3000, 1000,
    ]
    runWithAssert(delay, f, expected)
  })
})
