import * as R from 'ramda'
import * as React from 'react'
import CheckboxInput, {
  Props as CheckboxInputProps,
} from '~/components/CheckboxInput'
import { cardRareLabels } from '~/components/SlotForm/constants'
import TextInput from '~/components/TextInput'
import { StateContext as DataStateContext } from '~/store/data'
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
  const [rareChecked, setRareChecked] = React.useState<ReadonlyArray<number>>(
    []
  )
  const [skillChecked, setSkillChecked] = React.useState<
    ReadonlyArray<number | string>
  >([])
  const [nameInputted, setNameInputted] = React.useState('')

  const handleRareChange = (checked: ReadonlyArray<number>) => {
    setRareChecked(checked)
  }

  const handleSkillChange = (checked: ReadonlyArray<number | string>) => {
    setSkillChecked(checked)
  }

  const handleNameChange = (inputted: string) => {
    setNameInputted(inputted)
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

  const suggestedCards = Object.values(cards).filter(card => {
    const skill = card.skill ? card.skill.type : SKILL_NULL_VALUE
    return (
      (R.isEmpty(rareChecked) || rareChecked.includes(card.rare)) &&
      (R.isEmpty(skillChecked) || skillChecked.includes(skill)) &&
      (!nameInputted || card.name.includes(nameInputted))
      // nameにかんしてはカタカナ<->ひらがなの相互とか、compositionかdebounce仕込みたい
    )
  })

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
      <ul>
        {suggestedCards.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardSearch
