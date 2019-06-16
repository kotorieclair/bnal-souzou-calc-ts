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
} from '~/store/data'

export const baseStatusLabels: ReadonlyArray<{
  readonly id: keyof BaseStatus
  readonly label: string
}> = [
  { id: BASE_STATUS_TECH, label: '技術' },
  { id: BASE_STATUS_GENIUS, label: '天才' },
  { id: BASE_STATUS_BEAUTY, label: '美' },
  { id: BASE_STATUS_THEME, label: '主題' },
  { id: BASE_STATUS_TRUTH, label: '真実' },
]

export const battleStatusLabels: ReadonlyArray<{
  readonly id: keyof BattleStatus
  readonly label: string
}> = [
  { id: BATTLE_STATUS_ATK, label: '攻撃' },
  { id: BATTLE_STATUS_DEF, label: '防御' },
  { id: BATTLE_STATUS_AVD, label: '回避' },
]

export const INACCURATE_SIGN = '※'
