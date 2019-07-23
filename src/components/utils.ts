import * as R from 'ramda'
import { ALT_CALC_GROUP } from '~/components/constants'
import {
  BaseStatus,
  BattleStatus,
  Card,
  CardId,
  CardLv,
  Weapon,
} from '~/store/data'

// 表示用ステータスの型定義
export interface FullBattleStatus {
  readonly originalBattleStatus: BattleStatus | null
  readonly finalBattleStatus: BattleStatus | null
  readonly cardDiffBattleStatus: BattleStatus | null
}

// アナリティクス送信
export const sendEventAnalytics = (
  action: string,
  category: string,
  label: string
) => {
  if (process.env.NODE_ENV === 'production') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}

// 全てのpropertyがnullじゃないかどうか
export const isAllPropsFilled = (obj: object) => {
  return Object.values(obj).every(o => o !== null)
}

// 数字→星
export const numToStars = (n: number): string => '★'.repeat(n)

// +か-の記号をつける
export const addSign = (n: number): string => (n >= 0 ? `+${n}` : `${n}`)

// 攻撃算出
export const calculateAtk = (
  weapon: Weapon,
  { tech = 0, genius = 0, beauty = 0, theme = 0, truth = 0 }: BaseStatus
): BattleStatus['atk'] => {
  const base = ALT_CALC_GROUP.includes(weapon.id)
    ? tech + genius / 2 + beauty / 2 + theme / 2 + truth / 2
    : tech + genius / 2 + beauty + theme / 2

  return Math.round(base / weapon.adjustment.atk)
}

// 防御算出
export const calculateDef = (
  weapon: Weapon,
  { tech = 0, genius = 0, beauty = 0, theme = 0, truth = 0 }: BaseStatus
): BattleStatus['def'] => {
  const base = ALT_CALC_GROUP.includes(weapon.id)
    ? tech + genius + truth
    : tech + genius + beauty / 2 + truth / 2

  return Math.round(base / weapon.adjustment.def)
}

// 回避算出
export const calculateAvd = (
  weapon: Weapon,
  { tech = 0, genius = 0, beauty = 0, theme = 0, truth = 0 }: BaseStatus
): BattleStatus['avd'] => {
  const base = ALT_CALC_GROUP.includes(weapon.id) ? tech + truth : tech + beauty

  return Math.round(base / weapon.adjustment.avd)
}

// 装像に選択中の装像レベルがない場合はレベルリストの一番上を返す
export const getCardLvOfCard = (cardLv: CardLv, card: Card): CardLv => {
  return cardLv === null || !card.status[cardLv]
    ? (parseInt(Object.keys(card.status)[0], 10) as CardLv)
    : cardLv
}

// 不明な装像ステータスを予測
export const getAdjustedCardStatus = (
  status: Card['status'],
  lv: CardId
): BaseStatus => {
  const adj = lv === 3 ? 2 : lv === 2 ? 1.4 : 1
  return R.mapObjIndexed((s: number) => Math.ceil(s * adj), status[1])
}

// 装像ステータス+文豪ステータス
export const combineBaseStatus = (
  baseStatus: BaseStatus,
  cardStatus: BaseStatus
): BaseStatus => {
  return R.mapObjIndexed((s: number, key: keyof BaseStatus) => {
    const status = s + (cardStatus[key] || 0)
    return status <= 0 ? 1 : status
  }, baseStatus)
}

// 表示用ステータス計算
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
