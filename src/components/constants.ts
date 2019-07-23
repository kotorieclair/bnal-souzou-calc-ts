import {
  BASE_STATUS_BEAUTY,
  BASE_STATUS_GENIUS,
  BASE_STATUS_TECH,
  BASE_STATUS_THEME,
  BASE_STATUS_TRUTH,
  BaseStatus,
  BATTLE_STATUS_ATK,
  BATTLE_STATUS_AVD,
  BATTLE_STATUS_DEF,
  BattleStatus,
  WEAPON_TYPE_ALCHEMY,
  WEAPON_TYPE_BLADE,
  WEAPON_TYPE_BOW,
  WEAPON_TYPE_GUN,
  WEAPON_TYPE_WHIP,
  WeaponId,
} from '~/store/data'

// スロット数
export const SLOT_LENGTH = 4

// 装像レベルのプレフィックス
export const LEVEL_PREFIX = 'Lv.'

// 不正確なデータを示すサイン
export const INACCURATE_SIGN = '※'

// スキル絞り込みで「なし」
export const SKILL_OPTION_NULL_VALUE = 'none'

// 計算式の異なる武器種
export const ALT_CALC_GROUP: ReadonlyArray<WeaponId> = [
  WEAPON_TYPE_BOW,
  WEAPON_TYPE_ALCHEMY,
]

// 基礎ステータスのラベル
export const BASE_STATUS_LABELS: ReadonlyArray<{
  readonly id: keyof BaseStatus
  readonly label: string
}> = [
  { id: BASE_STATUS_TECH, label: '技術' },
  { id: BASE_STATUS_GENIUS, label: '天才' },
  { id: BASE_STATUS_BEAUTY, label: '美' },
  { id: BASE_STATUS_THEME, label: '主題' },
  { id: BASE_STATUS_TRUTH, label: '真実' },
]

// 戦闘ステータスのラベル
export const BATTLE_STATUS_LABELS: ReadonlyArray<{
  readonly id: keyof BattleStatus
  readonly label: string
}> = [
  { id: BATTLE_STATUS_ATK, label: '攻撃' },
  { id: BATTLE_STATUS_DEF, label: '防御' },
  { id: BATTLE_STATUS_AVD, label: '回避' },
]

// 文豪選択の武器見出し
export const WEAPON_OPTION_BLADE = WEAPON_TYPE_BLADE
export const WEAPON_OPTION_BOW = WEAPON_TYPE_BOW
export const WEAPON_OPTION_GUN = WEAPON_TYPE_GUN
export const WEAPON_OPTION_WHIP = WEAPON_TYPE_WHIP
export const WEAPON_OPTION_SPECIAL = 'special'

// 文豪選択のラベル
export const BUNGO_WEAPON_LABELS: ReadonlyArray<{
  readonly id: string
  readonly label: string
}> = [
  { id: WEAPON_OPTION_BLADE, label: '刃' },
  { id: WEAPON_OPTION_BOW, label: '弓' },
  { id: WEAPON_OPTION_GUN, label: '銃' },
  { id: WEAPON_OPTION_WHIP, label: '鞭' },
  { id: WEAPON_OPTION_SPECIAL, label: 'コラボキャラ' },
]

// レア度絞り込みラベル
export const CARD_RARE_LABELS: ReadonlyArray<{
  readonly id: number
  readonly label: string
}> = [{ id: 1, label: '★' }, { id: 2, label: '★★' }, { id: 3, label: '★★★' }]
