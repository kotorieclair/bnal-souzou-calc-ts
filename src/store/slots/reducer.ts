import * as R from 'ramda'
import { Action } from './actions'
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
import { Slot } from './types'

export interface State {
  readonly [slotId: number]: Slot | null
}

export const initialSlot: Slot = {
  bungo: null,
  ring: null,
  cardId: null,
  cardLv: null,
  status: {
    tech: null,
    beauty: null,
    genius: null,
    theme: null,
    truth: null,
  },
}

export const initialState: State = {
  1: initialSlot,
  2: initialSlot,
  3: initialSlot,
  4: initialSlot,
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_BUNGO: {
      const { slotId, bungoId } = action.payload
      return R.assocPath([slotId, 'bungo'], bungoId, state)
    }
    case SET_RING: {
      const { slotId, ringId } = action.payload
      return R.assocPath([slotId, 'ring'], ringId, state)
    }
    case SET_CARD_ID: {
      const { slotId, cardId } = action.payload
      return R.assocPath([slotId, 'cardId'], cardId, state)
    }
    case SET_CARD_LV: {
      const { slotId, cardLv } = action.payload
      return R.assocPath([slotId, 'cardLv'], cardLv, state)
    }
    case SET_TECH: {
      const { slotId, tech } = action.payload
      return R.assocPath([slotId, 'status', 'tech'], tech, state)
    }
    case SET_GENIUS: {
      const { slotId, genius } = action.payload
      return R.assocPath([slotId, 'status', 'genius'], genius, state)
    }
    case SET_BEAUTY: {
      const { slotId, beauty } = action.payload
      return R.assocPath([slotId, 'status', 'beauty'], beauty, state)
    }
    case SET_THEME: {
      const { slotId, theme } = action.payload
      return R.assocPath([slotId, 'status', 'theme'], theme, state)
    }
    case SET_TRUTH: {
      const { slotId, truth } = action.payload
      return R.assocPath([slotId, 'status', 'truth'], truth, state)
    }
    default: {
      return state
    }
  }
}
