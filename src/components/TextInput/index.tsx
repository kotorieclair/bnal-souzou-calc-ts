import * as React from 'react'
import { Input } from './styles'
import { Props } from './types'

export * from './types'

const TextInput: React.FC<Props> = ({
  className,
  value,
  onInput,
  onChange,
}: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (val === '') {
      onInput(null)
    }
    onInput(val)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e, e.target.value)
  }
  return (
    <Input
      type="text"
      className={className}
      value={value}
      onInput={handleInput}
      onChange={handleChange}
    />
  )
}

export default TextInput
