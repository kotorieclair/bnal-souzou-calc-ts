import {
  calculateAtk,
  calculateAvd,
  calculateDef,
} from '~/components/SlotDisplay/utils'
import { rings, weapons } from '~/data'
import ringTestData from './ringTestData'

describe('data/rings', () => {
  const filteredRings = Object.values(rings).filter(r => r.isAccurate)
  const ringTestList = filteredRings.map(r => {
    return [r.id, r.name, r.weapon, ringTestData[r.id].status]
  })

  test.each(ringTestList)(
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
