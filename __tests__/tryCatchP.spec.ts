import { tryCatchP } from '../index'

const id = (a) => Promise.resolve(a)
const fail = (a) => Promise.reject(new Error('error-' + a))

describe('tryCatchP', async () => {
  it('acts as identity when trier doesn\'t throw', async () => {
    const catcher = jest.fn()
    const result = await tryCatchP(id, catcher)('a')
    expect(result).toBe('a')
  })

  it('doesn\'t call catcher when trier doesn\'t throw', async () => {
    const catcher = jest.fn()
    const result = await tryCatchP(id, catcher)('a')
    expect(catcher).not.toBeCalled()
  })

  it('calls catcher when trier throws', async () => {
    const catcher = jest.fn()
    const result = await tryCatchP(fail, catcher)('a')
    expect(catcher).toBeCalledWith(new Error('error-a'), 'a')
  })
})
