import * as R from 'ramda'
import * as React from 'react'
import { Checkbox, CheckboxContainer, CheckboxLabel } from './styles'
import { Props } from './types'

export * from './types'

const CheckboxInput: React.FC<Props> = ({
  className,
  options,
  checked,
  onChange,
}: Props) => {
  const buildedOptions = options.map(({ value, label }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const values = e.target.checked
        ? [...checked, value]
        : R.without([value], checked)
      onChange(values)
    }

    return (
      <CheckboxLabel key={value}>
        <Checkbox
          type="checkbox"
          value={value}
          checked={checked.includes(value)}
          onChange={handleChange}
        />
        {label}
      </CheckboxLabel>
    )
  })

  return (
    <CheckboxContainer className={className}>
      {buildedOptions}
    </CheckboxContainer>
  )
}

export default CheckboxInput
