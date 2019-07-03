import { composableFetch, delay } from '../index'

describe('withTimeout', () => {
  it('fails when promise isn\'t resolved in timeout', async () => {
    try {
      await composableFetch.withTimeout(10)((): any => delay(100))()
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })

  it('does not fail when promise is resolved in timeout', () => {
    return composableFetch.withTimeout(100)((): any => delay(10))()
  })

  it('passes timeout value in error when promise fails', async () => {
    try {
      await composableFetch.withTimeout(100)((): any => { throw Error('Fail') })()
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })
})
