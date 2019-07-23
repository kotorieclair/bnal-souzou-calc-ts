import * as R from 'ramda'
import * as React from 'react'
import styled from 'styled-components'
import CheckboxInput, {
  Props as CheckboxInputProps,
} from '~/components/CheckboxInput'
import {
  CARD_RARE_LABELS,
  LEVEL_PREFIX,
  SKILL_OPTION_NULL_VALUE,
} from '~/components/constants'
import SearchList, { Props as SearchListProps } from '~/components/SearchList'
import TextInput from '~/components/TextInput'
import {
  calculateAtk,
  calculateAvd,
  calculateDef,
  getCardLvOfCard,
  sendEventAnalytics,
} from '~/components/utils'
import {
  CardId,
  CardLv,
  CardRare,
  SkillType,
  StateContext as DataStateContext,
} from '~/store/data'
import {
  actions as slotActions,
  DispatchContext as SlotDispatchContext,
  SlotId,
  StateContext as SlotStateContext,
} from '~/store/slots'

export interface Props {
  readonly className?: string
  readonly isOpen: boolean
  readonly slotId: SlotId
}

export const SearchCardName = styled.div``

export const SearchCardStatus = styled.div``

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

  const suggestedCards: SearchListProps['list'] = React.useMemo(() => {
    return Object.values(cards)
      .filter(card => {
        const skill = card.skill ? card.skill.type : SKILL_OPTION_NULL_VALUE
        return (
          (R.isEmpty(rareChecked) || rareChecked.includes(card.rare)) &&
          (R.isEmpty(skillChecked) || skillChecked.includes(skill)) &&
          (!nameInputted || card.name.includes(nameInputted))
          // TODO: nameにかんしてはカタカナ<->ひらがなの相互とか、compositionかdebounce仕込みたい
        )
      })
      .map(card => ({
        value: card.id,
        name: card.name,
      }))
  }, [rareChecked.length, skillChecked.length, nameInputted])

  const cardListBuilder: SearchListProps['listBuilder'] = item => {
    const cardId = item.value as CardId
    const weaponId = state.ring
      ? rings[state.ring].weapon
      : state.bungo
      ? bungos[state.bungo].weapon
      : null
    return (
      <>
        <SearchCardName>{cards[cardId].name}</SearchCardName>
        <SearchCardStatus>
          <ul>
            {Object.keys(cards[cardId].status).map(lv => {
              const status = cards[cardId].status[parseInt(lv, 10) as CardLv]
              return (
                <li key={lv}>
                  <div>
                    {LEVEL_PREFIX}
                    {lv}
                  </div>
                  {weaponId ? (
                    <div>
                      {calculateAtk(weapons[weaponId], status)}/
                      {calculateDef(weapons[weaponId], status)}/
                      {calculateAvd(weapons[weaponId], status)}
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </SearchCardStatus>
      </>
    )
  }

  return (
    <div className={className}>
      card search /{state.ring}/{state.bungo}
      <div>
        check: rare
        <CheckboxInput
          options={rareOptions}
          checked={rareChecked}
          onChange={handleRareChange}
        />
      </div>
      <div>
        check: skill
        <CheckboxInput
          options={skillOptions}
          checked={skillChecked}
          onChange={handleSkillChange}
        />
      </div>
      <div>
        input: name
        <TextInput value={nameInputted} onInput={handleNameChange} />
      </div>
      <SearchList
        list={suggestedCards}
        onSelect={handleCardSelect}
        listBuilder={cardListBuilder}
      />
    </div>
  )
}

export default CardSearch
