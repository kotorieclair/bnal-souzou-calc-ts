export interface Props {
  readonly className?: string
  readonly value: string | null
  readonly onInput: (value: string) => void
  readonly onChange?: (e: React.ChangeEvent, value: string) => void
}
