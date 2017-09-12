import { forAll, generators } from 'rapid-check'
import { composableFetch } from '../index'

describe('checkStatus', () => {
  it('passes untouched res for res.status >= 200 && res.status < 400', () => {
    const prop = (status) => {
      const res = { status }
      return composableFetch.checkStatus(res as any) === res
    }
    const [result] = forAll(generators.choose(200, 399), prop)
    expect(result).toBe(true)
  })

  it('fails for res.status < 200 && res.status >= 400', () => {
    const prop = (status) => {
      const res = { status }
      try {
        composableFetch.checkStatus(res as any)
        return false
      } catch (_) {
        return true
      }
    }
    const [result] = forAll(generators.oneOf(
      generators.choose(100, 199),
      generators.choose(400, 599),
    ), prop)
    expect(result).toBe(true)
  })

  it('fails for res.status < 200', async () => {
    const res = { status: 100 }
    try {
      composableFetch.checkStatus(res as any)
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.res).toBe(res)
    }
  })

  it('fails for res.status >= 400', async () => {
    const res = { status: 400 }
    try {
      composableFetch.checkStatus(res as any)
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.res).toBe(res)
    }
  })
})
