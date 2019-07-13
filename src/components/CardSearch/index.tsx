import * as R from 'ramda'
import * as React from 'react'
import CheckboxInput, {
  Props as CheckboxInputProps,
} from '~/components/CheckboxInput'
import SearchList, { Props as SearchListProps } from '~/components/SearchList'
import { cardRareLabels } from '~/components/SlotForm/constants'
import TextInput from '~/components/TextInput'
import * as utils from '~/components/utils'
import {
  CardId,
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
import { SKILL_NULL_VALUE } from './constants'

export interface Props {
  readonly className?: string
  readonly isOpen: boolean
  readonly slotId: SlotId
}

const CardSearch: React.FC<Props> = ({ className, isOpen, slotId }: Props) => {
  const { cards, skills } = React.useContext(DataStateContext)
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
    console.log(selected)
    dispatch(slotActions.setCardId(slotId, selected))
    // TODO: set cardlv
    utils.sendGAnalytics('cardId', 'search', `装像/${slotId}`)
  }

  const rareOptions: CheckboxInputProps['options'] = React.useMemo(() => {
    return cardRareLabels.map(({ id, label }) => ({ value: id, label }))
  }, [cardRareLabels.length])

  const skillOptions: CheckboxInputProps['options'] = React.useMemo(() => {
    return [
      { value: 'none', label: 'なし' },
      ...Object.values(skills).map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    ]
  }, [Object.keys(skills).length])

  const suggestedCards: SearchListProps['list'] = React.useMemo(() => {
    return Object.values(cards)
      .filter(card => {
        const skill = card.skill ? card.skill.type : SKILL_NULL_VALUE
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

  return (
    <div className={className}>
      card search
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
      <SearchList list={suggestedCards} onSelect={handleCardSelect} />
    </div>
  )
}

export default CardSearch
