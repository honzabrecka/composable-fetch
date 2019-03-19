import { composableFetch } from '../index'

describe('withClone', () => {
  it('clones itself', () => {
    const res: any = {
      clone: jest.fn(),
    }
    composableFetch.withClone(res)
    expect(res).toHaveProperty('cloned')
    expect(res.clone).toHaveBeenCalledTimes(1)
  })
})
