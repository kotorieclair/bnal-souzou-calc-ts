import * as React from 'react'
import { Select } from './styles'
import { BaseOption, ParentOption, Props } from './types'

export * from './types'

const SelectInput: React.FC<Props> = ({
  className,
  title,
  options,
  selected,
  onChange,
}: Props) => {
  const buildOption = ({ label, value, disabled }: BaseOption) => (
    <option key={value} value={value} disabled={disabled}>
      {label}
    </option>
  )
  const buildedOptions = options.map(option => {
    if ((option as ParentOption).optgroup) {
      return (
        <optgroup key={option.label} label={option.label}>
          {(option as ParentOption).optgroup.map(opt => buildOption(opt))}
        </optgroup>
      )
    } else {
      return buildOption(option as BaseOption)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    value === ''
      ? onChange(null)
      : isNaN(parseInt(value, 10))
      ? onChange(value)
      : onChange(parseInt(value, 10))
  }

  return (
    <Select
      className={className}
      value={selected || selected === 0 ? selected : ''}
      onChange={handleChange}
    >
      <option value="" disabled={true}>
        {title}
      </option>
      {buildedOptions}
    </Select>
  )
}

export default SelectInput
