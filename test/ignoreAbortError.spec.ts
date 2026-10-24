import { describe, expect, it, vi } from 'vitest'
import { ignoreAbortError } from '../src/index.ts'

describe('ignoreAbortError', () => {
  it('it ignores AbortError', () => {
    const abortError = new Error('abort')
    abortError.name = 'AbortError'
    const handler = vi.fn()
    ignoreAbortError(handler)(abortError)
    expect(handler).not.toBeCalled()
  })

  it('it invokes handler when called with any other error', () => {
    const abortError = new Error('any other error')
    const handler = vi.fn()
    ignoreAbortError(handler)(abortError)
    expect(handler).toBeCalledWith(abortError)
  })
})
