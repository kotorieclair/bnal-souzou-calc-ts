import * as React from 'react'
import { SearchListContainer, SearchListItem } from './styles'
import { Props } from './types'

export * from './types'

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
