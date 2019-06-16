import { isAllPropsFilled } from '~/components/SlotDisplay/utils'

describe('components/SlotDisplay/utils/isAllPropsFilled()', () => {
  test('returns true when all props are not null', () => {
    expect(isAllPropsFilled({ a: 'a', b: [2, 3], c: 1 })).toBeTruthy()
  })

  test('returns false when some/all props are null', () => {
    expect(isAllPropsFilled({ a: null, b: [2, 3], c: 1 })).toBeFalsy()
  })
})
