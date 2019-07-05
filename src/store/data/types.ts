import { string } from 'prop-types'
import {
  BASE_STATUS_BEAUTY,
  BASE_STATUS_GENIUS,
  BASE_STATUS_TECH,
  BASE_STATUS_THEME,
  BASE_STATUS_TRUTH,
  BATTLE_STATUS_ATK,
  BATTLE_STATUS_AVD,
  BATTLE_STATUS_DEF,
  WEAPON_TYPE_ALCHEMY,
  WEAPON_TYPE_BLADE,
  WEAPON_TYPE_BOW,
  WEAPON_TYPE_BOW_ALT,
  WEAPON_TYPE_FIGHT,
  WEAPON_TYPE_GUN,
  WEAPON_TYPE_WHIP,
} from './constants'

export type WeaponId =
  | typeof WEAPON_TYPE_BLADE
  | typeof WEAPON_TYPE_BOW
  | typeof WEAPON_TYPE_BOW_ALT
  | typeof WEAPON_TYPE_GUN
  | typeof WEAPON_TYPE_WHIP
  | typeof WEAPON_TYPE_ALCHEMY
  | typeof WEAPON_TYPE_FIGHT

export interface Weapon {
  readonly id: WeaponId
  readonly name: string
  readonly adjustment: {
    readonly atk: number
    readonly def: number
    readonly avd: number
  }
}

export interface Weapons {
  readonly [id: string]: Weapon
}

export type RingId = number

export interface Ring {
  readonly id: RingId
  readonly name: string
  readonly weapon: WeaponId
  readonly isAccurate: boolean
}

export interface Rings {
  readonly [id: number]: Ring
}

export type BungoId = number

export interface Bungo {
  readonly id: BungoId
  readonly name: string
  readonly weapon: WeaponId
  readonly rings: ReadonlyArray<RingId> | null
}

export interface Bungos {
  readonly [id: number]: Bungo
}

export type CardId = number

export type CardLv = 1 | 2 | 3

export interface Card {
  readonly id: CardId
  readonly name: string
  readonly rare: 1 | 2 | 3
  readonly status: { [lv in CardLv]?: BaseStatus | null }
  // readonly skill: { [lv in CardLv]?: Skill } | null
  // readonly skill: {
  //   readonly type: SkillType
  //   readonly suffix?: string
  //   readonly amount: { [lv in CardLv]?: number }
  // } | null
  readonly skill: {
    readonly type: SkillType
    readonly amount: { [lv in CardLv]?: number }
  } | null
}

export interface Cards {
  readonly [id: number]: Card
}

export type SkillType = number

export interface Skill {
  readonly id: SkillType
  readonly name: string
  readonly suffix: string
}

export interface Skills {
  readonly [type: number]: Skill
}

export interface BaseStatus {
  readonly [BASE_STATUS_TECH]?: number | null
  readonly [BASE_STATUS_GENIUS]?: number | null
  readonly [BASE_STATUS_BEAUTY]?: number | null
  readonly [BASE_STATUS_THEME]?: number | null
  readonly [BASE_STATUS_TRUTH]?: number | null
}

export interface BattleStatus {
  readonly [BATTLE_STATUS_ATK]: number
  readonly [BATTLE_STATUS_DEF]: number
  readonly [BATTLE_STATUS_AVD]: number
}
