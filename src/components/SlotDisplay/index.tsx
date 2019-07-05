import * as React from 'react'
import {
  BaseStatus,
  Bungo,
  Card,
  CardLv,
  Ring,
  StateContext as DataStateContext,
  Weapon,
} from '~/store/data'
import { StateContext as SlotStateContext } from '~/store/slots'
import {
  baseStatusLabels,
  battleStatusLabels,
  INACCURATE_SIGN,
} from './constants'
import {
  BaseTable,
  BattleTable,
  BungoInfo,
  BungoName,
  CardInfo,
  CardInfoLv,
  CardInfoName,
  CardInfoRare,
  CardStatusInaccurate,
  Info,
  RingStatusInaccurate,
  SkillTable,
  SlotDisplayContainer,
  StatusDiffText,
  StatusText,
  WeaponName,
} from './styles'
import { Props } from './types'
import {
  addSign,
  getAdjustedCardStatus,
  getCalculatedBattleStatus,
  numToStars,
} from './utils'

export * from './types'

const SlotDisplay: React.FC<Props> = ({ className, slotId }: Props) => {
  const { bungos, cards, weapons, rings, skills } = React.useContext(
    DataStateContext
  )
  const { [slotId]: state } = React.useContext(SlotStateContext)

  const currentBungo: Bungo | null = state.bungo ? bungos[state.bungo] : null
  const currentRing: Ring | null = state.ring ? rings[state.ring] : null
  const currentWeapon: Weapon | null = currentRing
    ? weapons[currentRing.weapon]
    : currentBungo
    ? weapons[currentBungo.weapon]
    : null
  const currentCard: Card | null = state.cardId ? cards[state.cardId] : null
  const currentCardLv: CardLv | null = state.cardLv
  const currentCardStatus: BaseStatus | null =
    currentCard && currentCardLv
      ? currentCard.status[currentCardLv] ||
        getAdjustedCardStatus(currentCard.status, currentCardLv)
      : null
  const currentCardSkill: {
    readonly name: string
    readonly suffix: string
    readonly amount: number
  } | null =
    currentCard && currentCardLv && currentCard.skill
      ? {
          name: skills[currentCard.skill.type].name,
          suffix: skills[currentCard.skill.type].suffix,
          amount: currentCard.skill.amount[currentCardLv],
        }
      : null

  const {
    originalBattleStatus,
    finalBattleStatus,
    cardDiffBattleStatus,
  } = getCalculatedBattleStatus(currentWeapon, state.status, currentCardStatus)

  return (
    <SlotDisplayContainer className={className}>
      <Info>
        <BungoInfo>
          {currentWeapon ? (
            <WeaponName>【{currentWeapon.name}】</WeaponName>
          ) : (
            ''
          )}
          {currentRing && !currentRing.isAccurate ? (
            <RingStatusInaccurate>{INACCURATE_SIGN}</RingStatusInaccurate>
          ) : null}
          {currentBungo ? <BungoName>{currentBungo.name}</BungoName> : ''}
        </BungoInfo>
        <CardInfo>
          {currentCard ? (
            <>
              <CardInfoRare>{numToStars(currentCard.rare)}</CardInfoRare>
              <CardInfoName>{currentCard.name}</CardInfoName>
            </>
          ) : (
            ''
          )}
          {currentCardLv ? <CardInfoLv>Lv.{currentCardLv}</CardInfoLv> : ''}
          {currentCard &&
          currentCardLv &&
          !currentCard.status[currentCardLv] ? (
            <CardStatusInaccurate>{INACCURATE_SIGN}</CardStatusInaccurate>
          ) : (
            ''
          )}
        </CardInfo>
      </Info>
      <BaseTable>
        <tbody>
          <tr>
            {baseStatusLabels.map(status => (
              <th key={status.id}>{status.label}</th>
            ))}
          </tr>
          <tr>
            {baseStatusLabels.map(status => (
              <td key={status.id}>
                {currentCardStatus && currentCardStatus[status.id] ? (
                  <StatusText
                    color={currentCardStatus[status.id] < 0 ? 'red' : 'blue'}
                  >
                    {addSign(currentCardStatus[status.id])}
                  </StatusText>
                ) : (
                  ''
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </BaseTable>
      <BattleTable>
        <tbody>
          <tr>
            {battleStatusLabels.map(status => (
              <th key={status.id}>{status.label}</th>
            ))}
          </tr>
          <tr>
            {battleStatusLabels.map(status => (
              <td key={status.id}>
                {cardDiffBattleStatus ? (
                  <StatusText
                    color={cardDiffBattleStatus[status.id] < 0 ? 'red' : 'blue'}
                  >
                    {addSign(cardDiffBattleStatus[status.id])}
                  </StatusText>
                ) : (
                  ''
                )}
                {originalBattleStatus && finalBattleStatus ? (
                  <StatusDiffText>
                    {originalBattleStatus[status.id] ===
                    finalBattleStatus[status.id]
                      ? `(${finalBattleStatus[status.id]})`
                      : `(${originalBattleStatus[status.id]}→${
                          finalBattleStatus[status.id]
                        })`}
                  </StatusDiffText>
                ) : null}
              </td>
            ))}
          </tr>
        </tbody>
      </BattleTable>
      <SkillTable>
        <tbody>
          <tr>
            <th>追加効果</th>
            <td>
              {currentCardSkill
                ? `${currentCardSkill.name} ${addSign(
                    currentCardSkill.amount
                  )}${currentCardSkill.suffix}`
                : null}
            </td>
          </tr>
        </tbody>
      </SkillTable>
    </SlotDisplayContainer>
  )
}

export default SlotDisplay
