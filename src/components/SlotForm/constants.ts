import {
  WEAPON_TYPE_BLADE,
  WEAPON_TYPE_BOW,
  WEAPON_TYPE_GUN,
  WEAPON_TYPE_WHIP,
} from '~/store/data'

export const WEAPON_OPTION_BLADE = WEAPON_TYPE_BLADE
export const WEAPON_OPTION_BOW = WEAPON_TYPE_BOW
export const WEAPON_OPTION_GUN = WEAPON_TYPE_GUN
export const WEAPON_OPTION_WHIP = WEAPON_TYPE_WHIP
export const WEAPON_OPTION_SPECIAL = 'special'

export const bungoWeaponLabels: ReadonlyArray<{
  readonly id: string
  readonly label: string
}> = [
  { id: WEAPON_OPTION_BLADE, label: '刃' },
  { id: WEAPON_OPTION_BOW, label: '弓' },
  { id: WEAPON_OPTION_GUN, label: '銃' },
  { id: WEAPON_OPTION_WHIP, label: '鞭' },
  { id: WEAPON_OPTION_SPECIAL, label: 'コラボキャラ' },
]

export const cardRareLabels: ReadonlyArray<{
  readonly id: number
  readonly label: string
}> = [{ id: 1, label: '★' }, { id: 2, label: '★★' }, { id: 3, label: '★★★' }]

export const INACCURATE_SIGN = ' ※'
