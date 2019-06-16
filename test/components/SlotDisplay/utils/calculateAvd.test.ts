import { calculateAvd } from '~/components/SlotDisplay/utils'
import { Weapons } from '~/store/data'

const testWeapons: Weapons = {
  blade: {
    id: 'blade',
    name: '刃',
    adjustment: {
      atk: 1,
      def: 1,
      avd: 1,
    },
  },
  bow: {
    id: 'bow',
    name: '弓',
    adjustment: {
      atk: 2,
      def: 2,
      avd: 2,
    },
  },
}

const testStatus = {
  tech: 10,
  genius: 20,
  beauty: 30,
  theme: 40,
  truth: 50,
}

describe('components/SlotDisplay/utils/calculateAvd()', () => {
  test('returns correct akt value for weapon other than bow', () => {
    const result =
      (testStatus.tech + testStatus.beauty) / testWeapons.blade.adjustment.avd
    expect(calculateAvd(testWeapons.blade, testStatus)).toBe(result)
  })
  test('returns correct akt value for bow', () => {
    const result =
      (testStatus.tech + testStatus.truth) / testWeapons.bow.adjustment.avd
    expect(calculateAvd(testWeapons.bow, testStatus)).toBe(result)
  })
})
