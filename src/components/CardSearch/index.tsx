import * as React from 'react'
import CheckboxInput, {
  Props as CheckboxInputProps,
} from '~/components/CheckboxInput'
import { cardRareLabels } from '~/components/SlotForm/constants'

export interface Props {
  readonly className?: string
  readonly isOpen: boolean
}

const CardSearch: React.FC<Props> = ({ className, isOpen }: Props) => {
  const [rareChecked, setRareChecked] = React.useState<ReadonlyArray<number>>(
    []
  )
  const [skillChecked, setSkillChecked] = React.useState([])
  const [nameInputted, setNameInputted] = React.useState('')

  const handleRareChange = (checked: ReadonlyArray<number>) => {
    setRareChecked(checked)
  }

  const rareOptions: CheckboxInputProps['options'] = React.useMemo(() => {
    return cardRareLabels.map(({ id, label }) => ({ value: id, label }))
  }, [cardRareLabels.length])

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
      <div>check: skill</div>
      <div>input: name</div>
    </div>
  )
}

export default CardSearch
