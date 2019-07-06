export interface Props {
  readonly className?: string
  readonly value: number | null
  readonly onInput: (value: number) => void
  readonly onChange?: (e: React.ChangeEvent, value: number) => void
  readonly min?: number
  readonly max?: number
}
