import { BaseStatus, BattleStatus } from '~/store/data'

export interface TestBungo {
  readonly id: number
  readonly name: string
  readonly status: {
    readonly base: BaseStatus
    readonly battle: BattleStatus
  }
}
export interface TestBungos {
  readonly [id: number]: TestBungo
}

const testData: TestBungos = {
  1: {
    id: 1,
    name: '芥川龍之介',
    status: {
      base: { tech: 170, genius: 170, beauty: 162, theme: 170, truth: 170 },
      battle: { atk: 502, def: 506, avd: 39 },
    },
  },
  2: {
    id: 2,
    name: '太宰治',
    status: {
      base: { tech: 168, genius: 170, beauty: 164, theme: 169, truth: 170 },
      battle: { atk: 502, def: 505, avd: 39 },
    },
  },
  3: {
    id: 3,
    name: '萩原朔太郎',
    status: {
      base: { tech: 169, genius: 170, beauty: 169, theme: 170, truth: 163 },
      battle: { atk: 635, def: 421, avd: 241 },
    },
  },
  4: {
    id: 4,
    name: '中原中也',
    status: {
      base: { tech: 168, genius: 170, beauty: 167, theme: 170, truth: 162 },
      battle: { atk: 631, def: 419, avd: 239 },
    },
  },
  5: {
    id: 5,
    name: '泉鏡花',
    status: {
      base: { tech: 168, genius: 168, beauty: 169, theme: 164, truth: 162 },
      battle: { atk: 503, def: 502, avd: 40 },
    },
  },
  6: {
    id: 6,
    name: '夏目漱石',
    status: {
      base: { tech: 166, genius: 166, beauty: 163, theme: 167, truth: 165 },
      battle: { atk: 496, def: 496, avd: 39 },
    },
  },
  7: {
    id: 7,
    name: '宮沢賢治',
    status: {
      base: { tech: 168, genius: 170, beauty: 165, theme: 169, truth: 161 },
      battle: { atk: 628, def: 418, avd: 238 },
    },
  },
  8: {
    id: 8,
    name: '谷崎潤一郎',
    status: {
      base: { tech: 170, genius: 168, beauty: 170, theme: 163, truth: 165 },
      battle: { atk: 506, def: 506, avd: 40 },
    },
  },
  9: {
    id: 9,
    name: '永井荷風',
    status: {
      base: { tech: 166, genius: 165, beauty: 168, theme: 162, truth: 166 },
      battle: { atk: 452, def: 356, avd: 334 },
    },
  },
  10: {
    id: 10,
    name: '島崎藤村',
    status: {
      base: { tech: 167, genius: 167, beauty: 160, theme: 163, truth: 169 },
      battle: { atk: 451, def: 359, avd: 336 },
    },
  },
  11: {
    id: 11,
    name: '田山花袋',
    status: {
      base: { tech: 166, genius: 165, beauty: 160, theme: 162, truth: 170 },
      battle: { atk: 450, def: 358, avd: 336 },
    },
  },
  12: {
    id: 12,
    name: '志賀直哉',
    status: {
      base: { tech: 169, genius: 169, beauty: 162, theme: 163, truth: 167 },
      battle: { atk: 497, def: 503, avd: 39 },
    },
  },
  13: {
    id: 13,
    name: '森鴎外',
    status: {
      base: { tech: 167, genius: 165, beauty: 164, theme: 164, truth: 162 },
      battle: { atk: 496, def: 495, avd: 39 },
    },
  },
  14: {
    id: 14,
    name: '川端康成',
    status: {
      base: { tech: 169, genius: 167, beauty: 170, theme: 163, truth: 164 },
      battle: { atk: 504, def: 503, avd: 40 },
    },
  },
  15: {
    id: 15,
    name: '北原白秋',
    status: {
      base: { tech: 169, genius: 168, beauty: 167, theme: 160, truth: 160 },
      battle: { atk: 625, def: 417, avd: 240 },
    },
  },
  16: {
    id: 16,
    name: '室生犀星',
    status: {
      base: { tech: 167, genius: 164, beauty: 166, theme: 166, truth: 165 },
      battle: { atk: 623, def: 414, avd: 238 },
    },
  },
  17: {
    id: 17,
    name: '梶井基次郎',
    status: {
      base: { tech: 168, genius: 168, beauty: 162, theme: 165, truth: 168 },
      battle: { atk: 497, def: 501, avd: 39 },
    },
  },
  19: {
    id: 19,
    name: '武者小路実篤',
    status: {
      base: { tech: 165, genius: 164, beauty: 162, theme: 166, truth: 166 },
      battle: { atk: 492, def: 493, avd: 38 },
    },
  },
  20: {
    id: 20,
    name: '尾崎紅葉',
    status: {
      base: { tech: 166, genius: 165, beauty: 163, theme: 160, truth: 160 },
      battle: { atk: 378, def: 448, avd: 41 },
    },
  },
  21: {
    id: 21,
    name: '坂口安吾',
    status: {
      base: { tech: 165, genius: 169, beauty: 165, theme: 168, truth: 166 },
      battle: { atk: 499, def: 500, avd: 39 },
    },
  },
  22: {
    id: 22,
    name: '江戸川乱歩',
    status: {
      base: { tech: 169, genius: 167, beauty: 165, theme: 160, truth: 160 },
      battle: { atk: 383, def: 453, avd: 42 },
    },
  },
  23: {
    id: 23,
    name: '坪内逍遥',
    status: {
      base: { tech: 160, genius: 160, beauty: 160, theme: 163, truth: 160 },
      battle: { atk: 482, def: 480, avd: 38 },
    },
  },
  24: {
    id: 24,
    name: '二葉亭四迷',
    status: {
      base: { tech: 168, genius: 162, beauty: 165, theme: 160, truth: 162 },
      battle: { atk: 494, def: 494, avd: 39 },
    },
  },
  25: {
    id: 25,
    name: '有島武郎',
    status: {
      base: { tech: 161, genius: 161, beauty: 162, theme: 160, truth: 166 },
      battle: { atk: 484, def: 486, avd: 38 },
    },
  },
  26: {
    id: 26,
    name: '佐藤春夫',
    status: {
      base: { tech: 168, genius: 168, beauty: 168, theme: 162, truth: 166 },
      battle: { atk: 501, def: 503, avd: 40 },
    },
  },
  27: {
    id: 27,
    name: '小林多喜二',
    status: {
      base: { tech: 163, genius: 162, beauty: 160, theme: 170, truth: 169 },
      battle: { atk: 489, def: 490, avd: 38 },
    },
  },
  28: {
    id: 28,
    name: '井伏鱒二',
    status: {
      base: { tech: 168, genius: 167, beauty: 163, theme: 168, truth: 166 },
      battle: { atk: 499, def: 500, avd: 39 },
    },
  },
  29: {
    id: 29,
    name: '横光利一',
    status: {
      base: { tech: 169, genius: 167, beauty: 164, theme: 168, truth: 166 },
      battle: { atk: 501, def: 501, avd: 39 },
    },
  },
  30: {
    id: 30,
    name: '織田作之助',
    status: {
      base: { tech: 164, genius: 166, beauty: 166, theme: 164, truth: 168 },
      battle: { atk: 495, def: 497, avd: 39 },
    },
  },
  31: {
    id: 31,
    name: '堀辰雄',
    status: {
      base: { tech: 166, genius: 167, beauty: 168, theme: 164, truth: 163 },
      battle: { atk: 500, def: 499, avd: 39 },
    },
  },
  32: {
    id: 32,
    name: '中島敦',
    status: {
      base: { tech: 168, genius: 166, beauty: 164, theme: 169, truth: 167 },
      battle: { atk: 500, def: 500, avd: 39 },
    },
  },
  33: {
    id: 33,
    name: '小泉八雲',
    status: {
      base: { tech: 162, genius: 164, beauty: 160, theme: 160, truth: 160 },
      battle: { atk: 372, def: 442, avd: 40 },
    },
  },
  34: {
    id: 34,
    name: '正岡子規',
    status: {
      base: { tech: 168, genius: 162, beauty: 170, theme: 162, truth: 166 },
      battle: { atk: 625, def: 415, avd: 241 },
    },
  },
  35: {
    id: 35,
    name: '若山牧水',
    status: {
      base: { tech: 166, genius: 162, beauty: 165, theme: 167, truth: 163 },
      battle: { atk: 619, def: 410, avd: 236 },
    },
  },
  36: {
    id: 36,
    name: '高村光太郎',
    status: {
      base: { tech: 167, genius: 168, beauty: 163, theme: 162, truth: 164 },
      battle: { atk: 619, def: 415, avd: 236 },
    },
  },
  37: {
    id: 37,
    name: '石川啄木',
    status: {
      base: { tech: 163, genius: 167, beauty: 166, theme: 169, truth: 160 },
      battle: { atk: 621, def: 411, avd: 235 },
    },
  },
  38: {
    id: 38,
    name: '国木田独歩',
    status: {
      base: { tech: 161, genius: 168, beauty: 162, theme: 161, truth: 168 },
      battle: { atk: 446, def: 355, avd: 329 },
    },
  },
  39: {
    id: 39,
    name: '幸田露伴',
    status: {
      base: { tech: 163, genius: 163, beauty: 164, theme: 168, truth: 160 },
      battle: { atk: 379, def: 444, avd: 41 },
    },
  },
  41: {
    id: 41,
    name: '吉川英治',
    status: {
      base: { tech: 166, genius: 164, beauty: 163, theme: 160, truth: 160 },
      battle: { atk: 378, def: 447, avd: 41 },
    },
  },
  42: {
    id: 42,
    name: '山本有三',
    status: {
      base: { tech: 42, genius: 42, beauty: 42, theme: 50, truth: 42 },
      battle: { atk: 130, def: 126, avd: 10 },
    },
  },
  43: {
    id: 43,
    name: '久米正雄',
    status: {
      base: { tech: 162, genius: 167, beauty: 162, theme: 167, truth: 160 },
      battle: { atk: 491, def: 490, avd: 38 },
    },
  },
  44: {
    id: 44,
    name: '徳永直',
    status: {
      base: { tech: 165, genius: 162, beauty: 163, theme: 169, truth: 165 },
      battle: { atk: 494, def: 491, avd: 39 },
    },
  },
  45: {
    id: 45,
    name: '中野重治',
    status: {
      base: { tech: 169, genius: 162, beauty: 168, theme: 165, truth: 162 },
      battle: { atk: 501, def: 496, avd: 40 },
    },
  },
  46: {
    id: 46,
    name: '岩野泡鳴',
    status: {
      base: { tech: 41, genius: 43, beauty: 40, theme: 42, truth: 50 },
      battle: { atk: 117, def: 96, avd: 91 },
    },
  },
  47: {
    id: 47,
    name: '正宗白鳥',
    status: {
      base: { tech: 165, genius: 161, beauty: 160, theme: 160, truth: 170 },
      battle: { atk: 446, def: 354, avd: 335 },
    },
  },
  48: {
    id: 48,
    name: '徳冨蘆花',
    status: {
      base: { tech: 43, genius: 43, beauty: 42, theme: 41, truth: 40 },
      battle: { atk: 98, def: 115, avd: 11 },
    },
  },
  49: {
    id: 49,
    name: '直木三十五',
    status: {
      base: { tech: 43, genius: 46, beauty: 40, theme: 40, truth: 40 },
      battle: { atk: 97, def: 117, avd: 10 },
    },
  },
  50: {
    id: 50,
    name: '夢野久作',
    status: {
      // base: { tech: 165, genius: 163, beauty: 162, theme: 160, truth: 160 },
      base: { tech: 45, genius: 43, beauty: 42, theme: 40, truth: 40 },
      battle: { atk: 99, def: 117, avd: 11 },
    },
  },
  51: {
    id: 51,
    name: '中里介山',
    status: {
      base: { tech: 40, genius: 44, beauty: 40, theme: 46, truth: 40 },
      battle: { atk: 96, def: 113, avd: 10 },
    },
  },
  52: {
    id: 52,
    name: '菊池寛',
    status: {
      base: { tech: 162, genius: 164, beauty: 165, theme: 160, truth: 160 },
      battle: { atk: 376, def: 444, avd: 41 },
    },
  },
  53: {
    id: 53,
    name: '伊藤左千夫',
    status: {
      base: { tech: 46, genius: 40, beauty: 40, theme: 45, truth: 46 },
      battle: { atk: 161, def: 108, avd: 61 },
    },
  },
  54: {
    id: 54,
    name: '三木露風',
    status: {
      base: { tech: 42, genius: 45, beauty: 48, theme: 44, truth: 40 },
      battle: { atk: 168, def: 109, avd: 64 },
    },
  },
  55: {
    id: 55,
    name: '三好達治',
    status: {
      base: { tech: 164, genius: 161, beauty: 166, theme: 165, truth: 165 },
      battle: { atk: 616, def: 409, avd: 236 },
    },
  },
  56: {
    id: 56,
    name: '新美南吉',
    status: {
      base: { tech: 167, genius: 163, beauty: 168, theme: 162, truth: 163 },
      battle: { atk: 622, def: 413, avd: 239 },
    },
  },
  57: {
    id: 57,
    name: '小川未明',
    status: {
      base: { tech: 45, genius: 45, beauty: 44, theme: 48, truth: 41 },
      battle: { atk: 169, def: 110, avd: 64 },
    },
  },
  58: {
    id: 58,
    name: '吉井勇',
    status: {
      base: { tech: 46, genius: 43, beauty: 47, theme: 40, truth: 40 },
      battle: { atk: 168, def: 110, avd: 66 },
    },
  },
  66: {
    id: 66,
    name: '草野心平',
    status: {
      base: { tech: 45, genius: 50, beauty: 45, theme: 50, truth: 40 },
      battle: { atk: 175, def: 115, avd: 64 },
    },
  },
  74: {
    id: 74,
    name: '高浜虚子',
    status: {
      base: { tech: 40, genius: 40, beauty: 50, theme: 42, truth: 42 },
      battle: { atk: 164, def: 105, avd: 64 },
    },
  },
  75: {
    id: 75,
    name: '河東碧梧桐',
    status: {
      base: { tech: 45, genius: 45, beauty: 44, theme: 40, truth: 40 },
      battle: { atk: 164, def: 110, avd: 64 },
    },
  },
  78: {
    id: 78,
    name: '徳田秋声',
    status: {
      base: { tech: 168, genius: 160, beauty: 160, theme: 160, truth: 168 },
      battle: { atk: 447, def: 354, avd: 336 },
    },
  },
  89: {
    id: 89,
    name: 'コナン・ドイル',
    status: {
      base: { tech: 50, genius: 46, beauty: 48, theme: 45, truth: 42 },
      battle: { atk: 110, def: 128, avd: 12 },
    },
  },
  90: {
    id: 90,
    name: 'ルイス・キャロル',
    status: {
      base: { tech: 47, genius: 50, beauty: 49, theme: 42, truth: 40 },
      battle: { atk: 178, def: 118, avd: 69 },
    },
  },
  1000: {
    id: 1000,
    name: 'エド',
    status: {
      base: { tech: 86, genius: 82, beauty: 81, theme: 93, truth: 85 },
      battle: { atk: 233, def: 181, avd: 171 },
    },
  },
  1001: {
    id: 1001,
    name: 'アル',
    status: {
      base: { tech: 87, genius: 87, beauty: 83, theme: 100, truth: 80 },
      battle: { atk: 264, def: 256, avd: 20 },
    },
  },
}

export default testData
