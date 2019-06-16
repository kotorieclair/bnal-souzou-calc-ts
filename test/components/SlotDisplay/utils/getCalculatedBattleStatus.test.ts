import { getCalculatedBattleStatus } from '~/components/SlotDisplay/utils'
import { weapons } from '~/data'
import { BaseStatus, BattleStatus } from '~/store/data'

describe('components/SlotDisplay/getCalculatedBattleStatus()', () => {
  test('returns correct cardDiff status when only card BaseStatus is given', () => {
    const weapon = weapons.blade
    const originalBaseStatus: BaseStatus = {
      tech: null,
      genius: null,
      beauty: null,
      theme: null,
      truth: null,
    }
    const cardBaseStatus: BaseStatus = { genius: 35, theme: 112 }
    const cardBattleStatus: BattleStatus = { atk: 74, def: 35, avd: 0 }

    expect(
      getCalculatedBattleStatus(weapon, originalBaseStatus, cardBaseStatus)
    ).toEqual({
      originalBattleStatus: null,
      finalBattleStatus: null,
      cardDiffBattleStatus: cardBattleStatus,
    })
  })

  test('returns correct FullBattleStatus when BaseStatus is given', () => {
    const weapon = weapons.blade
    const originalBaseStatus: BaseStatus = {
      tech: 168,
      genius: 170,
      beauty: 164,
      theme: 169,
      truth: 170,
    }
    const cardBaseStatus: BaseStatus = { genius: 50, theme: 160 }
    const originalBattleStatus: BattleStatus = { atk: 502, def: 505, avd: 39 }
    const finalBattleStatus: BattleStatus = { atk: 607, def: 555, avd: 39 }

    expect(
      getCalculatedBattleStatus(weapon, originalBaseStatus, cardBaseStatus)
    ).toEqual({
      originalBattleStatus,
      finalBattleStatus,
      cardDiffBattleStatus: {
        atk: finalBattleStatus.atk - originalBattleStatus.atk,
        def: finalBattleStatus.def - originalBattleStatus.def,
        avd: finalBattleStatus.avd - originalBattleStatus.avd,
      },
    })
  })
})
