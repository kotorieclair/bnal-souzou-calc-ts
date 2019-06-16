import { numToStars } from '~/components/SlotDisplay/utils'

describe('components/SlotDisplay/utils/numToStars()', () => {
  test('return correct number of stars for a given number', () => {
    expect(numToStars(5)).toBe('★★★★★')
  })
})
