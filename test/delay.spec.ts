import { delay } from '../src/index'

describe('delay', () => {
  it('delays promise resolution', async () => {
    const e = 10
    const time = 100
    const before = Date.now()
    await delay(time)
    const after = Date.now()
    expect(after - before).toBeGreaterThanOrEqual(time - e)
    expect(after - before).toBeLessThanOrEqual(time + e)
  })
})
