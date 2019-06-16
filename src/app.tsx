import * as React from 'react'
import * as ReactDOM from 'react-dom'
import BnalSouzouCalc from '~/components/BnalSouzouCalc'
import '~/img/cover.png'
import {
  initialState as data,
  StateContext as DataStateContext,
} from '~/store/data'
import {
  DispatchContext as SlotDispatchContext,
  initialState,
  reducer,
  StateContext as SlotStateContext,
} from '~/store/slots'
import '~/styles/global.css'

const Root: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <DataStateContext.Provider value={data}>
      <SlotStateContext.Provider value={state}>
        <SlotDispatchContext.Provider value={dispatch}>
          <BnalSouzouCalc />
        </SlotDispatchContext.Provider>
      </SlotStateContext.Provider>
    </DataStateContext.Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'))
