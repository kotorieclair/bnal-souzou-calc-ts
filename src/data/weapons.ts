import { Weapons } from '~/store/data'

const ADJUSTMENT_BLADE = { atk: 1, def: 1, avd: 8.5 }
const ADJUSTMENT_BOW = { atk: 1.1, def: 1.4, avd: 1 }
const ADJUSTMENT_GUN = { atk: 0.8, def: 1.2, avd: 1.4 }
const ADJUSTMENT_WHIP = { atk: 1.3, def: 1.1, avd: 8 }

const weapons: Weapons = {
  blade: {
    id: 'blade',
    name: '刃',
    adjustment: ADJUSTMENT_BLADE,
  },
  // 自然主義弓
  bow: {
    id: 'bow',
    name: '弓',
    adjustment: ADJUSTMENT_BOW,
  },
  // 自然主義以外の弓
  bow_alt: {
    id: 'bow_alt',
    name: '弓',
    adjustment: ADJUSTMENT_BOW,
  },
  gun: {
    id: 'gun',
    name: '銃',
    adjustment: ADJUSTMENT_GUN,
  },
  whip: {
    id: 'whip',
    name: '鞭',
    adjustment: ADJUSTMENT_WHIP,
  },
  // 自然主義弓と同じ
  alchemy: {
    id: 'alchemy',
    name: '錬',
    adjustment: ADJUSTMENT_BOW,
  },
  // 刃と同じ
  fight: {
    id: 'fight',
    name: '闘',
    adjustment: ADJUSTMENT_BLADE,
  },
}

export default weapons
