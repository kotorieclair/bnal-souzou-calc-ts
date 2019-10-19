import styled from 'styled-components'
import Modal from '~/components/Modal'
import { colors, media } from '~/styles'

export const StyledModal = styled(Modal)`
  padding: 10px;
  width: 90vw;
  height: 90vh;
`

export const CardSearchContainer = styled.div``

export const RareSearch = styled.div``

export const SkillSearch = styled.div``

export const CardNameSearch = styled.div``

export const SearchList = styled.ul`
  background-color: ${colors.mainDark};
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 10px;
  width: 100%;
`

export const SearchListItem = styled.li`
  background-color: ${colors.mainLight};
  display: grid;
  grid-template-columns: 30% 70%;
  margin-bottom: 6px;
`

export const SearchListCardName = styled.div`
  align-self: center;
  padding: 8px;
`

export const SearchListCardStatus = styled.ul`
  border-left: 1px solid ${colors.mainDark};
  list-style-type: none;
  margin: 0;
  width: 100%;
`

export const SearchListCardStatusItem = styled.li`
  border-top: 1px solid ${colors.mainDark};
  display: grid;
  grid-template-columns: 20% 35% 45%;

  &:first-child {
    border: none;
  }
`

export const CardStatusLevel = styled.div`
  padding: 8px;
`

export const CardStatusSkill = styled.div`
  background-color: #fff;
  border-left: 1px dashed ${colors.mainDark};
  padding: 8px;
`

export const CardStatusEstimate = styled.div`
  background-color: #fff;
  border-left: 1px dashed ${colors.mainDark};
  padding: 8px;
`
