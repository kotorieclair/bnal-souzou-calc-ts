import * as React from 'react'
import { SlotNumBadgeContainer } from './styles'
import { Props } from './types'

export * from './types'

const SlotNumBadge: React.FC<Props> = ({ className, slotId }: Props) => (
  <SlotNumBadgeContainer className={className}>{slotId}</SlotNumBadgeContainer>
)

export default SlotNumBadge
