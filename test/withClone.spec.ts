import { withClone } from '../src/index'

describe('withClone', () => {
  it('clones itself', () => {
    const res: any = {
      clone: jest.fn(),
    }
    withClone(res)
    expect(res).toHaveProperty('cloned')
    expect(res.clone).toHaveBeenCalledTimes(1)
  })
})
