import * as ringIds from '~/data/rings'
import { BaseStatus, BattleStatus } from '~/store/data'

export interface TestRing {
  readonly id: number
  readonly status: {
    readonly base: BaseStatus
    readonly battle: BattleStatus
  }
}
export interface TestRings {
  readonly [id: number]: TestRing
}

const testData: TestRings = {
  [ringIds.TOKUDA_S_BLADE_1]: {
    id: ringIds.TOKUDA_S_BLADE_1,
    status: {
      base: { tech: 116, genius: 124, beauty: 124, theme: 124, truth: 116 },
      battle: { atk: 364, def: 360, avd: 28 },
    },
  },
  // [ringIds.AKUTAGAWA_R_GUN_1]: {
  //   id: ringIds.AKUTAGAWA_R_GUN_1,
  // },
  // [ringIds.DAZAI_O_BOW_1]: {
  //   id: ringIds.DAZAI_O_BOW_1,
  // },
  [ringIds.HAGIWARA_S_WHIP_1]: {
    id: ringIds.HAGIWARA_S_WHIP_1,
    status: {
      base: { tech: 172, genius: 181, beauty: 137, theme: 163, truth: 132 },
      battle: { atk: 370, def: 443, avd: 39 },
    },
  },
  // [ringIds.IZUMI_K_WHIP_1]: {
  //   id: ringIds.IZUMI_K_WHIP_1,
  // },
  [ringIds.NATSUME_S_BOW_1]: {
    id: ringIds.NATSUME_S_BOW_1,
    status: {
      base: { tech: 64, genius: 64, beauty: 61, theme: 77, truth: 75 },
      battle: { atk: 184, def: 145, avd: 139 },
    },
  },
  [ringIds.SATOU_H_GUN_1]: {
    id: ringIds.SATOU_H_GUN_1,
    status: {
      base: { tech: 116, genius: 116, beauty: 132, theme: 126, truth: 114 },
      battle: { atk: 461, def: 296, avd: 177 },
    },
  },
  [ringIds.ODA_S_WHIP_1]: {
    id: ringIds.ODA_S_WHIP_1,
    status: {
      base: { tech: 128, genius: 130, beauty: 130, theme: 152, truth: 132 },
      battle: { atk: 307, def: 354, avd: 32 },
    },
  },
  [ringIds.HORI_T_BOW_1]: {
    id: ringIds.HORI_T_BOW_1,
    status: {
      base: { tech: 82, genius: 83, beauty: 66, theme: 74, truth: 73 },
      battle: { atk: 209, def: 170, avd: 155 },
    },
    // status: {
    //   base: { tech: 85, genius: 85, beauty: 86, theme: 107, truth: 105 },
    //   battle: { atk: 251, def: 196, avd: 190 },
    // },
  },
  // [ringIds.NAKANO_S_GUN_1]: {
  //   id: ringIds.NAKANO_S_GUN_1,
  // },
  // [ringIds.KUNIKIDA_D_GUN_1]: {
  //   id: ringIds.KUNIKIDA_D_GUN_1,
  // },
  // [ringIds.ARISHIMA_T_GUN_1]: {
  //   id: ringIds.ARISHIMA_T_GUN_1,
  // },
  [ringIds.KOUDA_R_BLADE_1]: {
    id: ringIds.KOUDA_R_BLADE_1,
    status: {
      base: { tech: 61, genius: 61, beauty: 80, theme: 78, truth: 70 },
      battle: { atk: 211, def: 197, avd: 17 },
    },
  },
  // [ringIds.NAKAHARA_C_BLADE_1]: {
  //   id: ringIds.NAKAHARA_C_BLADE_1,
  // },
  // [ringIds.KOIZUMI_Y_BOW_1]: {
  //   id: ringIds.KOIZUMI_Y_BOW_1,
  // },
  [ringIds.NIIMI_N_BOW_1]: {
    id: ringIds.NIIMI_N_BOW_1,
    status: {
      base: { tech: 53, genius: 43, beauty: 48, theme: 42, truth: 43 },
      battle: { atk: 128, def: 99, avd: 96 },
    },
  },
  // [ringIds.KITAHARA_H_BOW_1]: {
  //   id: ringIds.KITAHARA_H_BOW_1,
  // },
  // [ringIds.MIYAZAWA_K_BOW_1]: {
  //   id: ringIds.MIYAZAWA_K_BOW_1,
  // },
  // [ringIds.YUMENO_K_BLADE_1]: {
  //   id: ringIds.YUMENO_K_BLADE_1,
  // },
  // [ringIds.KIKUCHI_K_GUN_1]: {
  //   id: ringIds.KIKUCHI_K_GUN_1,
  // },
  // [ringIds.MORI_O_GUN_1]: {
  //   id: ringIds.MORI_O_GUN_1,
  // },
  // [ringIds.NAOKI_S_BLADE_1]: {
  //   id: ringIds.NAOKI_S_BLADE_1,
  // },
  // [ringIds.MASAOKA_S_BLADE_1]: {
  //   id: ringIds.MASAOKA_S_BLADE_1,
  // },
  [ringIds.ISHIKAWA_T_BLADE_1]: {
    id: ringIds.ISHIKAWA_T_BLADE_1,
    status: {
      base: { tech: 127, genius: 131, beauty: 130, theme: 157, truth: 124 },
      battle: { atk: 401, def: 385, avd: 30 },
    },
  },
  // [ringIds.OZAKI_K_BLADE_1]: {
  //   id: ringIds.OZAKI_K_BLADE_1,
  // },
  // [ringIds.EDOGAWA_R_BLADE_1]: {
  //   id: ringIds.EDOGAWA_R_BLADE_1,
  // },
}

export default testData
