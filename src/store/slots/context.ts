import * as React from 'react'
import { State } from './reducer'

export const StateContext = React.createContext<State>(null)
export const DispatchContext = React.createContext<React.Dispatch<any>>(null)
