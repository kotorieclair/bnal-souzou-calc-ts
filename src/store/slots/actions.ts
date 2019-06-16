import { BaseStatus, BungoId, CardId, CardLv, RingId } from '~/store/data'
import {
  SET_BEAUTY,
  SET_BUNGO,
  SET_CARD_ID,
  SET_CARD_LV,
  SET_GENIUS,
  SET_RING,
  SET_TECH,
  SET_THEME,
  SET_TRUTH,
} from './actionTypes'
import { SlotId } from './types'

export type ActionCreator =
  | typeof setBungo
  | typeof setRing
  | typeof setCardId
  | typeof setCardLv
  | typeof setTech
  | typeof setGenius
  | typeof setBeauty
  | typeof setTheme
  | typeof setTruth

export type Action = ReturnType<ActionCreator>

export const setBungo = (slotId: SlotId, bungoId: BungoId) => ({
  type: SET_BUNGO,
  payload: { slotId, bungoId },
})

export const setRing = (slotId: SlotId, ringId: RingId) => ({
  type: SET_RING,
  payload: { slotId, ringId },
})

export const setCardId = (slotId: SlotId, cardId: CardId) => ({
  type: SET_CARD_ID,
  payload: { slotId, cardId },
})

export const setCardLv = (slotId: SlotId, cardLv: CardLv) => ({
  type: SET_CARD_LV,
  payload: { slotId, cardLv },
})

export const setTech = (slotId: SlotId, tech: BaseStatus['tech']) => ({
  type: SET_TECH,
  payload: { slotId, tech },
})

export const setGenius = (slotId: SlotId, genius: BaseStatus['genius']) => ({
  type: SET_GENIUS,
  payload: { slotId, genius },
})

export const setBeauty = (slotId: SlotId, beauty: BaseStatus['beauty']) => ({
  type: SET_BEAUTY,
  payload: { slotId, beauty },
})

export const setTheme = (slotId: SlotId, theme: BaseStatus['theme']) => ({
  type: SET_THEME,
  payload: { slotId, theme },
})

export const setTruth = (slotId: SlotId, truth: BaseStatus['truth']) => ({
  type: SET_TRUTH,
  payload: { slotId, truth },
})
