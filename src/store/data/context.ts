import * as React from 'react'
import data from '~/data'

export const StateContext = React.createContext<typeof data>(null)
