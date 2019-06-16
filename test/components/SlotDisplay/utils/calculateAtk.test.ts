import { calculateAtk } from '~/components/SlotDisplay/utils'
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

describe('components/SlotDisplay/utils/calculateAtk()', () => {
  test('returns correct akt value for weapon other than bow', () => {
    const result =
      (testStatus.tech +
        testStatus.genius / 2 +
        testStatus.beauty +
        testStatus.theme / 2) /
      testWeapons.blade.adjustment.atk
    expect(calculateAtk(testWeapons.blade, testStatus)).toBe(result)
  })
  test('returns correct akt value for bow', () => {
    const result =
      (testStatus.tech +
        testStatus.genius / 2 +
        testStatus.beauty / 2 +
        testStatus.theme / 2 +
        testStatus.truth / 2) /
      testWeapons.bow.adjustment.atk
    expect(calculateAtk(testWeapons.bow, testStatus)).toBe(result)
  })
})
