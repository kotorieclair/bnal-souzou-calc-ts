export interface Props {
  readonly className?: string
  readonly value: number
  readonly onInput: (value: number) => void
  readonly onChange?: (e: React.ChangeEvent, value: number) => void
  readonly min?: number
  readonly max?: number
}
