import { getCardLvOfCard } from '~/components/utils'
import { Card } from '~/store/data'

describe('components/utils/getCardLvOfCard()', () => {
  test('returns given cardLv when given card has that status lv', () => {
    const card: Card = {
      id: 1,
      name: 'card1',
      rare: 1,
      status: {
        1: { tech: 10 },
        2: { tech: 20 },
        3: { tech: 30 },
      },
      skill: null,
    }

    expect(getCardLvOfCard(2, card)).toBe(2)
  })

  test('returns the first status lv when given card does not have given cardLv', () => {
    const card: Card = {
      id: 1,
      name: 'card1',
      rare: 1,
      status: {
        3: { tech: 30 },
      },
      skill: null,
    }

    expect(getCardLvOfCard(1, card)).toBe(3)
  })
})
