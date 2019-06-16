import * as R from 'ramda'
import {
  BaseStatus,
  BattleStatus,
  Card,
  CardId,
  Weapon,
  WEAPON_TYPE_ALCHEMY,
  WEAPON_TYPE_BOW,
  WeaponId,
} from '~/store/data'
import { FullBattleStatus } from './types'

export const isAllPropsFilled = (obj: object) => {
  return Object.values(obj).every(o => o !== null)
}

export const numToStars = (n: number): string => '★'.repeat(n)

export const addSign = (n: number): string => (n >= 0 ? `+${n}` : `${n}`)

export const getAdjustedCardStatus = (
  status: Card['status'],
  lv: CardId
): BaseStatus => {
  const adj = lv === 3 ? 2 : lv === 2 ? 1.4 : 1
  return R.mapObjIndexed((s: number) => s * adj, status[1])
}

export const combineBaseStatus = (
  baseStatus: BaseStatus,
  cardStatus: BaseStatus
): BaseStatus => {
  return R.mapObjIndexed((s: number, key: keyof BaseStatus) => {
    // TODO: マイナスしょり
    return s + (cardStatus[key] || 0)
  }, baseStatus)
}

const altCalcGroup: ReadonlyArray<WeaponId> = [
  WEAPON_TYPE_BOW,
  WEAPON_TYPE_ALCHEMY,
]

export const calculateAtk = (
  weapon: Weapon,
  { tech = 0, genius = 0, beauty = 0, theme = 0, truth = 0 }: BaseStatus
): BattleStatus['atk'] => {
  const base = altCalcGroup.includes(weapon.id)
    ? tech + genius / 2 + beauty / 2 + theme / 2 + truth / 2
    : tech + genius / 2 + beauty + theme / 2

  return Math.round(base / weapon.adjustment.atk)
}

export const calculateDef = (
  weapon: Weapon,
  { tech = 0, genius = 0, beauty = 0, theme = 0, truth = 0 }: BaseStatus
): BattleStatus['def'] => {
  const base = altCalcGroup.includes(weapon.id)
    ? tech + genius + truth
    : tech + genius + beauty / 2 + truth / 2

  return Math.round(base / weapon.adjustment.def)
}

export const calculateAvd = (
  weapon: Weapon,
  { tech = 0, genius = 0, beauty = 0, theme = 0, truth = 0 }: BaseStatus
): BattleStatus['avd'] => {
  const base = altCalcGroup.includes(weapon.id) ? tech + truth : tech + beauty

  return Math.round(base / weapon.adjustment.avd)
}

export const getCalculatedBattleStatus = (
  weapon: Weapon,
  baseStatus: BaseStatus,
  cardStatus: BaseStatus
): FullBattleStatus => {
  const originalBattleStatus =
    weapon && isAllPropsFilled(baseStatus)
      ? {
          atk: calculateAtk(weapon, baseStatus),
          def: calculateDef(weapon, baseStatus),
          avd: calculateAvd(weapon, baseStatus),
        }
      : null

  const combinedBaseStatus =
    cardStatus && isAllPropsFilled(baseStatus)
      ? combineBaseStatus(baseStatus, cardStatus)
      : null

  const finalBattleStatus =
    weapon && combinedBaseStatus
      ? {
          atk: calculateAtk(weapon, combinedBaseStatus),
          def: calculateDef(weapon, combinedBaseStatus),
          avd: calculateAvd(weapon, combinedBaseStatus),
        }
      : null

  const cardDiffBattleStatus =
    originalBattleStatus && finalBattleStatus
      ? {
          atk: finalBattleStatus.atk - originalBattleStatus.atk,
          def: finalBattleStatus.def - originalBattleStatus.def,
          avd: finalBattleStatus.avd - originalBattleStatus.avd,
        }
      : weapon && cardStatus
      ? {
          atk: calculateAtk(weapon, cardStatus),
          def: calculateDef(weapon, cardStatus),
          avd: calculateAvd(weapon, cardStatus),
        }
      : null

  return {
    originalBattleStatus,
    finalBattleStatus,
    cardDiffBattleStatus,
  }
}
