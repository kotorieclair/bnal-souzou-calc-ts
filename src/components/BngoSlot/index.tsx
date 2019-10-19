import * as React from 'react'
import SlotDisplay from '~/components/SlotDisplay'
import SlotForm from '~/components/SlotForm'
import {
  BngoSlotContainer,
  BngoSlotLeft,
  BngoSlotRight,
  StyledSlotNumBadge,
} from './styles'
import { Props } from './types'

export * from './types'

const BngoSlot: React.FC<Props> = ({ className, slotId }: Props) => {
  return (
    <>
      <BngoSlotContainer className={className}>
        <BngoSlotLeft>
          <StyledSlotNumBadge slotId={slotId} />
          <SlotForm slotId={slotId} />
        </BngoSlotLeft>
        <BngoSlotRight>
          <SlotDisplay slotId={slotId} />
        </BngoSlotRight>
      </BngoSlotContainer>
    </>
  )
}

export default BngoSlot
