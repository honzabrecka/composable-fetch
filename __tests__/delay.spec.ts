import { delay } from '../index'

describe('delay', () => {
  it('delays promise resolution', async () => {
    const e = 10
    const time = 100
    const before = Date.now()
    const promise = delay(time)
    await promise
    const after = Date.now()
    expect(after - before).toBeGreaterThanOrEqual(time - e)
    expect(after - before).toBeLessThanOrEqual(time + e)
  })
})
