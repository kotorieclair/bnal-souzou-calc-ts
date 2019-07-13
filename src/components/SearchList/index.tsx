import * as React from 'react'
import styled from 'styled-components'

export interface List {
  readonly value: number | string
  readonly name: string
}

export interface Props {
  readonly className?: string
  readonly list: ReadonlyArray<List>
  readonly onSelect: (selected: List['value']) => void
}

export const SearchListContainer = styled.ul``

const SearchList: React.FC<Props> = ({
  className,
  list = [],
  onSelect,
}: Props) => {
  const buildedList = React.useMemo(() => {
    return list.map(item => {
      const handleClick = () => {
        onSelect(item.value)
      }
      return (
        <li key={item.value} onClick={handleClick}>
          {item.name}
        </li>
      )
    })
  }, list)

  return (
    <SearchListContainer className={className}>
      {buildedList}
    </SearchListContainer>
  )
}

export default SearchList
