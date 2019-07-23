import { numToStars } from '~/components/utils'

describe('components/utils/numToStars()', () => {
  test('return correct number of stars for a given number', () => {
    expect(numToStars(5)).toBe('★★★★★')
  })
})
