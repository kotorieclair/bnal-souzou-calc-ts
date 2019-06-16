import styled from 'styled-components'
import { colors, font, getFontSize, media } from '~/styles'

export const SlotDisplayContainer = styled.div``

const InaccurateSign = styled.span`
  font-size: 0.8em;
`

export const Info = styled.div`
  color: ${colors.mainLight};
  padding: 5px;
  margin-bottom: 7px;
  text-align: center;

  @media ${media.pc} {
    align-items: flex-end;
    display: flex;
  }
`

export const BungoInfo = styled.div`
  font-size: calc(${getFontSize({ add: 2 })});
  flex: 0 1 40%;
  min-height: 1em;
`

export const WeaponName = styled.span``

export const BungoName = styled.span``

export const RingStatusInaccurate = styled(InaccurateSign)`
  margin-right: 0.5em;
`

export const CardInfo = styled.div`
  font-size: ${getFontSize({ add: 2 })};
  flex: 0 1 60%;
  min-height: 1em;

  @media ${media.sp} {
    margin-top: 7px;
  }
`

export const CardInfoRare = styled.span`
  margin-right: 0.5em;
`

export const CardInfoName = styled.span``

export const CardInfoLv = styled.span`
  margin-left: 1em;
`

export const CardStatusInaccurate = styled(InaccurateSign)`
  margin-left: 0.5em;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid ${colors.mainDark};
    height: 1em;
    text-align: center;
  }

  th {
    background-color: #fff;
    padding: 5px;
  }

  td {
    background-color: ${colors.mainLight};
    font-size: ${getFontSize({ add: 2 })};
    padding: 7px 5px;
  }
`

interface StatusTextStyleProps {
  readonly color: 'red' | 'blue'
}

export const StatusText = styled.span<StatusTextStyleProps>`
  color: ${props => colors[props.color]};
`

export const StatusDiffText = styled.span`
  font-size: 0.8em;
  padding-left: 0.5em;
`

export const BaseTable = styled(Table)`
  th,
  td {
    width: 20%;
  }
`

export const BattleTable = styled(Table)`
  th,
  td {
    border-top: 0;
    width: 33%;
  }
`

export const SkillTable = styled(Table)`
  margin-top: 10px;

  th {
    width: 40%;
  }

  td {
    font-size: ${font.baseFontSize};
    width: 60%;
  }
`
