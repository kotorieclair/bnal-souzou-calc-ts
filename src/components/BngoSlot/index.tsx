import * as React from 'react'
import CardSearch from '~/components/CardSearch'
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
      <CardSearch isOpen={true} slotId={slotId} />
    </>
  )
}

export default BngoSlot
