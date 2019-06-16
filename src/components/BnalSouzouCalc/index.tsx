import * as R from 'ramda'
import * as React from 'react'
import SlotNumBadge from '../SlotNumBadge'
import { SLOT_LENGTH } from './constants'
import {
  BnalSouzouCalcContainer,
  StyledBngoSlot,
  TabContainer,
  TabItem,
} from './styles'
import { Props } from './types'

const BnalSouzouCalc: React.FC<Props> = ({ className }: Props) => {
  const [spCurrent, setSpCurrent] = React.useState(1)

  const slotLength = R.times(R.add(1), SLOT_LENGTH)

  return (
    <BnalSouzouCalcContainer className={className}>
      <TabContainer>
        {slotLength.map(n => {
          const handleSpSlotChange = () => {
            setSpCurrent(n)
          }
          return (
            <TabItem
              key={n}
              spVisible={spCurrent === n}
              onClick={handleSpSlotChange}
            >
              <SlotNumBadge slotId={n} />
            </TabItem>
          )
        })}
      </TabContainer>
      {slotLength.map(n => (
        <StyledBngoSlot key={n} slotId={n} spVisible={spCurrent === n} />
      ))}
    </BnalSouzouCalcContainer>
  )
}

export default BnalSouzouCalc
