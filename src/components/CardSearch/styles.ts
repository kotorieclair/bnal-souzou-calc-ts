import styled from 'styled-components'

export const CardSearchContainer = styled.div``

export const RareSearch = styled.div``

export const SkillSearch = styled.div``

export const CardNameSearch = styled.div``

export const SearchList = styled.ul`
  list-style-type: none;
  margin: 0;
  width: 100%;
`

export const SearchListItem = styled.li`
  border: 1px solid #000;
  display: grid;
  grid-template-columns: 30% 70%;
`

export const SearchListCardName = styled.div`
  align-self: center;
`

export const SearchListCardStatus = styled.ul`
  border-left: 1px solid #000;
  list-style-type: none;
  margin: 0;
  width: 100%;
`

export const SearchListCardStatusItem = styled.li`
  border-top: 1px solid #000;
  display: grid;
  grid-template-columns: 20% 40% 40%;

  &:first-child {
    border: none;
  }
`

export const CardStatusLevel = styled.div``

export const CardStatusSkill = styled.div`
  border-left: 1px solid #000;
`

export const CardStatusEstimate = styled.div`
  border-left: 1px solid #000;
`
