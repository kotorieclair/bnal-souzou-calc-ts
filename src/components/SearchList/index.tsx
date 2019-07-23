import * as React from 'react'
import styled from 'styled-components'

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

export const SearchListContainer = styled.ul``

export const SearchListItem = styled.li``

const SearchList: React.FC<Props> = ({
  className,
  list = [],
  onSelect,
  listBuilder,
}: Props) => {
  const buildedList = React.useMemo(() => {
    return list.map(item => {
      const handleClick = () => {
        onSelect(item.value)
      }
      return (
        <SearchListItem key={item.value} onClick={handleClick}>
          {listBuilder(item)}
        </SearchListItem>
      )
    })
  }, [list, listBuilder])

  return (
    <SearchListContainer className={className}>
      {list.length ? buildedList : null}
    </SearchListContainer>
  )
}

export default SearchList
