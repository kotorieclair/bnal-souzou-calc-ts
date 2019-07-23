import { calculateDef } from '~/components/utils'
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

describe('components/utils/calculateDef()', () => {
  test('returns correct akt value for weapon other than bow', () => {
    const result =
      (testStatus.tech +
        testStatus.genius +
        testStatus.beauty / 2 +
        testStatus.truth / 2) /
      testWeapons.blade.adjustment.def
    expect(calculateDef(testWeapons.blade, testStatus)).toBe(result)
  })
  test('returns correct akt value for bow', () => {
    const result =
      (testStatus.tech + testStatus.genius + testStatus.truth) /
      testWeapons.bow.adjustment.def
    expect(calculateDef(testWeapons.bow, testStatus)).toBe(result)
  })
})
