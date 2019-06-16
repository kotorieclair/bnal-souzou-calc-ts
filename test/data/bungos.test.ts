import {
  calculateAtk,
  calculateAvd,
  calculateDef,
} from '~/components/SlotDisplay/utils'
import { bungos, weapons } from '~/data'
import bungoTestData from './bungoTestData'

describe('data/bungos', () => {
  const weaponTestList = Object.values(bungos).map(b => {
    return [b.id, b.name, b.weapon, bungoTestData[b.id].status]
  })

  test.each(weaponTestList)(
    '#%i: %s has correct weapon type',
    (id, name, weaponId, status) => {
      const weapon = weapons[weaponId]
      const result = {
        atk: calculateAtk(weapon, status.base),
        def: calculateDef(weapon, status.base),
        avd: calculateAvd(weapon, status.base),
      }
      expect(result).toEqual(status.battle)
    }
  )
})
