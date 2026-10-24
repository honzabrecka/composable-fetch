import { describe, expect, it, vi } from 'vitest'
import { withClone } from '../src/index.ts'

describe('withClone', () => {
  it('clones itself', () => {
    const res: any = {
      clone: vi.fn(),
    }
    withClone(res)
    expect(res).toHaveProperty('cloned')
    expect(res.clone).toHaveBeenCalledTimes(1)
  })
})
