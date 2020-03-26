import { ignoreAbortError } from '../src/index'

describe('ignoreAbortError', () => {
  it('it ignores AbortError', () => {
    const abortError = new Error('abort')
    abortError.name = 'AbortError'
    const handler = jest.fn()
    ignoreAbortError(handler)(abortError)
    expect(handler).not.toBeCalled()
  })

  it('it invokes handler when called with any other error', () => {
    const abortError = new Error('any other error')
    const handler = jest.fn()
    ignoreAbortError(handler)(abortError)
    expect(handler).toBeCalledWith(abortError)
  })
})
