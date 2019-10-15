import * as R from 'ramda'
import * as React from 'react'
import CheckboxInput, {
  Props as CheckboxInputProps,
} from '~/components/CheckboxInput'
import {
  CARD_RARE_LABELS,
  LEVEL_PREFIX,
  SKILL_OPTION_NULL_VALUE,
} from '~/components/constants'
import TextInput from '~/components/TextInput'
import {
  calculateAtk,
  calculateAvd,
  calculateDef,
  getCardLvOfCard,
  sendEventAnalytics,
} from '~/components/utils'
import {
  Card,
  CardId,
  CardLv,
  CardRare,
  SkillType,
  StateContext as DataStateContext,
} from '~/store/data'
import {
  actions as slotActions,
  DispatchContext as SlotDispatchContext,
  StateContext as SlotStateContext,
} from '~/store/slots'
import {
  CardNameSearch,
  CardSearchContainer,
  CardStatusEstimate,
  CardStatusLevel,
  CardStatusSkill,
  RareSearch,
  SearchList,
  SearchListCardName,
  SearchListCardStatus,
  SearchListCardStatusItem,
  SearchListItem,
  SkillSearch,
} from './styles'
import { Props } from './types'
import { addSign } from '~/components/utils'

export * from './types'

const CardSearch: React.FC<Props> = ({ className, isOpen, slotId }: Props) => {
  const { cards, skills, bungos, rings, weapons } = React.useContext(
    DataStateContext
  )
  const { [slotId]: state } = React.useContext(SlotStateContext)
  const dispatch = React.useContext(SlotDispatchContext)
  const [rareChecked, setRareChecked] = React.useState<ReadonlyArray<CardRare>>(
    []
  )
  const [skillChecked, setSkillChecked] = React.useState<
    ReadonlyArray<SkillType | string>
  >([])
  const [nameInputted, setNameInputted] = React.useState('')

  const handleRareChange = (checked: ReadonlyArray<CardRare>) => {
    setRareChecked(checked)
  }

  const handleSkillChange = (checked: ReadonlyArray<SkillType | string>) => {
    setSkillChecked(checked)
  }

  const handleNameChange = (inputted: string) => {
    setNameInputted(inputted)
  }

  const handleCardSelect = (selected: CardId) => {
    dispatch(slotActions.setCardId(slotId, selected))
    const lv = getCardLvOfCard(state.cardLv, cards[selected])
    if (lv !== selected) {
      dispatch(slotActions.setCardLv(slotId, lv))
    }
    sendEventAnalytics('cardId', 'search', `装像/${slotId}`)
  }

  const rareOptions: CheckboxInputProps['options'] = React.useMemo(() => {
    return CARD_RARE_LABELS.map(({ id, label }) => ({ value: id, label }))
  }, [CARD_RARE_LABELS.length])

  const skillOptions: CheckboxInputProps['options'] = React.useMemo(() => {
    return [
      { value: SKILL_OPTION_NULL_VALUE, label: 'なし' },
      ...Object.values(skills).map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    ]
  }, [Object.keys(skills).length])

  const suggestedCards: ReadonlyArray<Card> = React.useMemo(() => {
    return Object.values(cards).filter(card => {
      const skill = card.skill ? card.skill.type : SKILL_OPTION_NULL_VALUE
      return (
        (R.isEmpty(rareChecked) || rareChecked.includes(card.rare)) &&
        (R.isEmpty(skillChecked) || skillChecked.includes(skill)) &&
        (!nameInputted || card.name.includes(nameInputted))
        // TODO: nameにかんしてはカタカナ<->ひらがなの相互とか、compositionかdebounce仕込みたい
      )
    })
  }, [rareChecked.length, skillChecked.length, nameInputted])

  const buildedCardList = React.useMemo(() => {
    return suggestedCards.map(card => {
      const weaponId = state.ring
        ? rings[state.ring].weapon
        : state.bungo
        ? bungos[state.bungo].weapon
        : null

      const skill = card.skill ? skills[card.skill.type] : null

      const handleClick = () => {
        handleCardSelect(card.id)
      }

      return (
        <SearchListItem key={card.id} onClick={handleClick}>
          <SearchListCardName>{card.name}</SearchListCardName>
          <SearchListCardStatus>
            {Object.keys(card.status).map(lv => {
              const status = card.status[parseInt(lv, 10) as CardLv]
              return (
                <SearchListCardStatusItem key={lv}>
                  <CardStatusLevel>
                    {LEVEL_PREFIX}
                    {lv}
                  </CardStatusLevel>
                  <CardStatusSkill>
                    追加効果：
                    {skill
                      ? `${skill.name} ${addSign(
                          card.skill.amount[parseInt(lv, 10) as CardLv]
                        )}${skill.suffix}`
                      : 'なし'}
                  </CardStatusSkill>
                  {weaponId ? (
                    <CardStatusEstimate>
                      攻撃：{addSign(calculateAtk(weapons[weaponId], status))} /
                      防御：{addSign(calculateDef(weapons[weaponId], status))} /
                      回避：{addSign(calculateAvd(weapons[weaponId], status))}
                    </CardStatusEstimate>
                  ) : null}
                </SearchListCardStatusItem>
              )
            })}
          </SearchListCardStatus>
        </SearchListItem>
      )
    })
  }, [suggestedCards, handleCardSelect])

  return (
    <CardSearchContainer className={className}>
      card search /{state.ring}/{state.bungo}
      <RareSearch>
        <CheckboxInput
          options={rareOptions}
          checked={rareChecked}
          onChange={handleRareChange}
        />
      </RareSearch>
      <SkillSearch>
        <CheckboxInput
          options={skillOptions}
          checked={skillChecked}
          onChange={handleSkillChange}
        />
      </SkillSearch>
      <CardNameSearch>
        <TextInput value={nameInputted} onInput={handleNameChange} />
      </CardNameSearch>
      <SearchList>{buildedCardList}</SearchList>
    </CardSearchContainer>
  )
}

export default CardSearch
