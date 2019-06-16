import * as React from 'react'
import { Input } from './styles'
import { Props } from './types'

export * from './types'

const NumberInput: React.FC<Props> = ({
  className,
  value,
  onInput,
  onChange,
  min = 0,
  max,
}: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (val === '') {
      onInput(null)
    } else {
      const parsedVal = parseInt(val, 10)
      if (
        !isNaN(parsedVal) &&
        (max ? parsedVal <= max : true) &&
        parsedVal >= min
      ) {
        onInput(parsedVal)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    onChange && !isNaN(parseInt(val, 10)) && onChange(e, parseInt(val, 10))
  }

  return (
    <Input
      type="number"
      className={className}
      value={value || value === 0 ? value : ''}
      min={min}
      max={max}
      onInput={handleInput}
      onChange={handleChange}
    />
  )
}

export default NumberInput
