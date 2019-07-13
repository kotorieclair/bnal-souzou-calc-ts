import * as R from 'ramda'
import * as React from 'react'
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
      <label key={value}>
        <input
          type="checkbox"
          value={value}
          checked={checked.includes(value)}
          onChange={handleChange}
        />
        {label}
      </label>
    )
  })

  return <div className={className}>{buildedOptions}</div>
}

export default CheckboxInput
