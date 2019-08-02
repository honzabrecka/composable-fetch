import { forAll, generators } from 'rapid-check'
import { checkStatus } from '../src/index'

describe('checkStatus', () => {
  it('passes untouched res for res.status >= 200 && res.status < 400', async () => {
    const prop = (status: number) => {
      const res = { status }
      return checkStatus(res as any) === res
    }
    const result = await forAll(generators.choose(200, 399), prop)
    expect(result).toMatchObject({ success: true })
  })

  it('fails for res.status < 200 || res.status >= 400', async () => {
    const prop = (status: number) => {
      const res = { status }
      try {
        checkStatus(res as any)
        return false
      } catch (_) {
        return true
      }
    }
    const gen = generators.oneOf(
      generators.choose(100, 199),
      generators.choose(400, 599),
    )
    const result = await forAll(gen, prop)
    expect(result).toMatchObject({ success: true })
  })

  it('checks that error contains res', () => {
    const res = { status: 100 }
    try {
      checkStatus(res as any)
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.res).toBe(res)
    }
  })
})
