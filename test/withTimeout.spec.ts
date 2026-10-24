import { describe, expect, it } from 'vitest'
import { delay, withTimeout } from '../src/index.ts'

describe('withTimeout', () => {
  it("fails when promise isn't resolved in timeout", async () => {
    await expect(
      withTimeout(10)((): any => delay(100))(),
    ).rejects.toMatchObject({ id: 'TimeoutError' })
  })

  it('does not fail when promise is resolved in timeout', async () => {
    await expect(
      withTimeout(100)((): any => delay(10).then(() => 'ok'))(),
    ).resolves.toBe('ok')
  })

  it('propagates error of fetch', async () => {
    await expect(
      withTimeout(100)(async (): Promise<any> => {
        throw Error('Fail')
      })(),
    ).rejects.toThrow('Fail')
  })
})
