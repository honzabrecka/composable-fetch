import { composableFetch, delays } from '../index'

const tries = [
  () => Promise.reject('no 1'),
  () => Promise.reject('no 2'),
  () => Promise.reject('no 3'),
  () => Promise.resolve('yes'),
]

function retryableF() {
  let i = 0
  return () => tries[i++]()
}

describe('withRetry', () => {
  it('fails when all tries failed', async () => {
    try {
      await composableFetch.withRetry(3, delays.linear(10))(retryableF() as any)
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.id).toBe('RetryError')
      expect(e.errors).toEqual(['no 1', 'no 2', 'no 3'])
    }
  })

  it('successfully resolves when all one try is successful', () => {
    composableFetch.withRetry(5, delays.linear(10))(retryableF() as any)
  })
})
