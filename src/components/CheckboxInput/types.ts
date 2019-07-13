export interface Option {
  readonly value: string | number
  readonly label: string
}

export interface Props {
  readonly className?: string
  readonly options: ReadonlyArray<Option>
  readonly checked: ReadonlyArray<Option['value']>
  readonly onChange: (checked: ReadonlyArray<Option['value']>) => void
}
