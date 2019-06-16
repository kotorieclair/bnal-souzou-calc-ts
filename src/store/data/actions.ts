import { LOAD_DONE } from './actionTypes'

export type ActionCreator = typeof loadDone
export type Action = ReturnType<ActionCreator>

export const loadDone = () => ({
  type: LOAD_DONE,
})
