import { afterEach, describe, expect, it, vi } from 'vitest'
import { delay } from '../src/index.ts'

afterEach(() => {
  vi.useRealTimers()
})

describe('delay', () => {
  it('delays promise resolution', async () => {
    vi.useFakeTimers()
    let resolved = false
    delay(100).then(() => {
      resolved = true
    })
    await vi.advanceTimersByTimeAsync(99)
    expect(resolved).toBe(false)
    await vi.advanceTimersByTimeAsync(1)
    expect(resolved).toBe(true)
  })
})
