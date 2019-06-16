import { BattleStatus } from '~/store/data'
import { SlotId } from '~/store/slots'

export interface Props {
  readonly className?: string
  readonly slotId: SlotId
}

export interface FullBattleStatus {
  readonly originalBattleStatus: BattleStatus | null
  readonly finalBattleStatus: BattleStatus | null
  readonly cardDiffBattleStatus: BattleStatus | null
}
