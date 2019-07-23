import { calculateAtk, calculateAvd, calculateDef } from '~/components/utils'
import { weapons } from '~/data'

const data = {
  // 太宰
  blade: {
    base: { tech: 168, genius: 170, beauty: 164, theme: 169, truth: 170 },
    battle: { atk: 502, def: 505, avd: 39 },
  },
  // 島崎
  bow: {
    base: { tech: 175, genius: 175, beauty: 168, theme: 171, truth: 177 },
    battle: { atk: 473, def: 376, avd: 352 },
  },
  // 荷風
  bow_alt: {
    base: { tech: 174, genius: 173, beauty: 176, theme: 170, truth: 174 },
    battle: { atk: 474, def: 373, avd: 350 },
  },
  // 朔太郎
  gun: {
    base: { tech: 169, genius: 170, beauty: 169, theme: 170, truth: 163 },
    battle: { atk: 635, def: 421, avd: 241 },
  },
  // 乱歩
  whip: {
    base: { tech: 185, genius: 183, beauty: 181, theme: 176, truth: 176 },
    battle: { atk: 420, def: 497, avd: 46 },
  },
  // エド、自然弓と同じ
  alchemy: {
    base: { tech: 175, genius: 175, beauty: 168, theme: 171, truth: 177 },
    battle: { atk: 473, def: 376, avd: 352 },
  },
  // アル、刃と同じ
  fight: {
    base: { tech: 168, genius: 170, beauty: 164, theme: 169, truth: 170 },
    battle: { atk: 502, def: 505, avd: 39 },
  },
}

describe('data/weapons', () => {
  test('has correct BattleStatus calculation values for blade', () => {
    expect({
      atk: calculateAtk(weapons.blade, data.blade.base),
      def: calculateDef(weapons.blade, data.blade.base),
      avd: calculateAvd(weapons.blade, data.blade.base),
    }).toEqual(data.blade.battle)
  })
  test('has correct BattleStatus calculation values for bow', () => {
    expect({
      atk: calculateAtk(weapons.bow, data.bow.base),
      def: calculateDef(weapons.bow, data.bow.base),
      avd: calculateAvd(weapons.bow, data.bow.base),
    }).toEqual(data.bow.battle)
  })
  test('has correct BattleStatus calculation values for bow_alt', () => {
    expect({
      atk: calculateAtk(weapons.bow_alt, data.bow_alt.base),
      def: calculateDef(weapons.bow_alt, data.bow_alt.base),
      avd: calculateAvd(weapons.bow_alt, data.bow_alt.base),
    }).toEqual(data.bow_alt.battle)
  })
  test('has correct BattleStatus calculation values for gun', () => {
    expect({
      atk: calculateAtk(weapons.gun, data.gun.base),
      def: calculateDef(weapons.gun, data.gun.base),
      avd: calculateAvd(weapons.gun, data.gun.base),
    }).toEqual(data.gun.battle)
  })
  test('has correct BattleStatus calculation values for whip', () => {
    expect({
      atk: calculateAtk(weapons.whip, data.whip.base),
      def: calculateDef(weapons.whip, data.whip.base),
      avd: calculateAvd(weapons.whip, data.whip.base),
    }).toEqual(data.whip.battle)
  })
  test('has correct BattleStatus calculation values for alchemy', () => {
    expect({
      atk: calculateAtk(weapons.alchemy, data.alchemy.base),
      def: calculateDef(weapons.alchemy, data.alchemy.base),
      avd: calculateAvd(weapons.alchemy, data.alchemy.base),
    }).toEqual(data.alchemy.battle)
  })
  test('has correct BattleStatus calculation values for fight', () => {
    expect({
      atk: calculateAtk(weapons.fight, data.fight.base),
      def: calculateDef(weapons.fight, data.fight.base),
      avd: calculateAvd(weapons.fight, data.fight.base),
    }).toEqual(data.fight.battle)
  })
})
