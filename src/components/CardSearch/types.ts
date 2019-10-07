import { SlotId } from '~/store/slots'

export interface Props {
  readonly className?: string
  readonly isOpen: boolean
  readonly slotId: SlotId
}
