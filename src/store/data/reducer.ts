import * as R from 'ramda'
import { bungos, cards, rings, weapons } from '~/data'
import { Action } from './actions'
import { LOAD_DONE } from './actionTypes'
import { Bungos, Cards, Rings, Weapons } from './types'

export interface State {
  readonly initialized: boolean
  readonly bungos: Bungos
  readonly weapons: Weapons
  readonly cards: Cards
  readonly rings: Rings
}

export const initialState: State = {
  initialized: false,
  bungos,
  weapons,
  cards,
  rings,
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case LOAD_DONE: {
      return R.assoc('initialized', true, state)
    }
  }
}
