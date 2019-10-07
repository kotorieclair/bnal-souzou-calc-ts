export interface ListItem {
  readonly value: number | string
  readonly name: string
}

export interface Props {
  readonly className?: string
  readonly list: ReadonlyArray<ListItem>
  readonly onSelect: (selected: ListItem['value']) => void
  readonly listBuilder: (item: ListItem) => {}
}
