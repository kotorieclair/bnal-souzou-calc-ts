import { addSign } from '~/components/SlotDisplay/utils'

describe('components/SlotDisplay/utils/addSign()', () => {
  test('returns a number with plus sign for a given positive number', () => {
    expect(addSign(3)).toBe('+3')
  })

  test('returns a number with minus sign for a given negative number', () => {
    expect(addSign(-9)).toBe('-9')
  })
})
