import { getAdjustedCardStatus } from '~/components/SlotDisplay/utils'
import { BaseStatus } from '~/store/data'

describe('components/SlotDisplay/utils/getAdjustedCardStatus()', () => {
  test('returns correct lv.2 estimated card status', () => {
    const status = {
      1: {
        tech: 10,
        truth: 20,
      },
    }
    expect(getAdjustedCardStatus(status, 2)).toEqual({
      tech: status[1].tech * 1.4,
      truth: status[1].truth * 1.4,
    })
  })

  test('returns correct lv.3 estimated card status', () => {
    const status = {
      1: {
        genius: 10,
        beauty: 20,
        theme: 15,
      },
    }
    expect(getAdjustedCardStatus(status, 3)).toEqual({
      genius: status[1].genius * 2,
      beauty: status[1].beauty * 2,
      theme: status[1].theme * 2,
    })
  })
})
