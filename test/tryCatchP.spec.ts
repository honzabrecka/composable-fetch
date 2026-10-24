import { describe, expect, it, vi } from 'vitest'
import { tryCatchP } from '../src/index.ts'

const id = <T>(a: T): Promise<T> => Promise.resolve(a)
const fail = (a: string) => Promise.reject(new Error(`error-${a}`))

describe('tryCatchP', () => {
  it("acts as identity when trier doesn't throw", async () => {
    const catcher = vi.fn()
    const result = await tryCatchP(id, catcher)('a')
    expect(result).toBe('a')
  })

  it("doesn't call catcher when trier doesn't throw", async () => {
    const catcher = vi.fn()
    await tryCatchP(id, catcher)('a')
    expect(catcher).not.toBeCalled()
  })

  it('calls catcher when trier throws', async () => {
    const catcher = vi.fn()
    await tryCatchP(fail, catcher)('a')
    expect(catcher).toBeCalledWith(new Error('error-a'), 'a')
  })
})
