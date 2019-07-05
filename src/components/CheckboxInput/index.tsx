import * as R from 'ramda'
import * as React from 'react'

export interface Option {
  readonly value: string | number
  readonly label: string
}

export interface Props {
  readonly className?: string
  readonly options: ReadonlyArray<Option>
  readonly checked: ReadonlyArray<string | number>
  readonly onChange: (checked: ReadonlyArray<string | number>) => void
}

const CheckboxInput: React.FC<Props> = ({
  className,
  options,
  checked,
  onChange,
}: Props) => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.checked)
  //   return e.target.checked ? [...checked, ]
  //   onChange(checked)
  // }

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
