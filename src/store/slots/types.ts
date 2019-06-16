import { BaseStatus, BungoId, CardId, CardLv, RingId } from '~/store/data/types'

export type SlotId = number

export interface Slot {
  readonly bungo: BungoId | null
  readonly ring: RingId | null
  readonly cardId: CardId | null
  readonly cardLv: CardLv | null
  readonly status: BaseStatus
}
