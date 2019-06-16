export interface BaseOption {
  readonly label: string
  readonly value: number | string
  readonly disabled?: boolean
}

export interface ParentOption {
  readonly label: string
  readonly optgroup: ReadonlyArray<BaseOption>
}

export type Option = BaseOption | ParentOption

export interface Props {
  readonly className?: string
  readonly title: string
  readonly options: ReadonlyArray<Option>
  readonly selected: number | string | null
  readonly onChange: (id: number | string | null) => void
}
