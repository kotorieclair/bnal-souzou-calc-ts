import { combineBaseStatus } from '~/components/SlotDisplay/utils'

describe('components/SlotDisplay/utils/combineBaseStatus()', () => {
  test('adds given two BaseStatus values', () => {
    const a = {
      tech: 10,
      genius: 15,
      beauty: 20,
      theme: 40,
      truth: 30,
    }
    const b = {
      tech: 8,
      theme: 17,
    }

    expect(combineBaseStatus(a, b)).toEqual({
      tech: a.tech + b.tech,
      genius: a.genius,
      beauty: a.beauty,
      theme: a.theme + b.theme,
      truth: a.truth,
    })
  })
})
