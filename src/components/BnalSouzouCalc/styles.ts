import styled from 'styled-components'
import BngoSlot from '~/components/BngoSlot'
import { colors, media, withAlpha } from '~/styles'

export const BnalSouzouCalcContainer = styled.div`
  color: black;
`

export const TabContainer = styled.div`
  @media ${media.pc} {
    display: none;
  }
`

interface TabItemStyleProps {
  readonly spVisible?: boolean
}
export const TabItem = styled.div<TabItemStyleProps>`
  @media ${media.sp} {
    background-color: ${props =>
      props.spVisible ? colors.mainDark : withAlpha(colors.mainDark, 0.4)};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: inline-block;
    margin-right: 1px;
    padding: ${props => (props.spVisible ? '3px 3px 4px' : '3px 3px 1px')};
    vertical-align: bottom;
  }
`

interface BngoSlotStyleProps {
  readonly spVisible?: boolean
}
export const StyledBngoSlot = styled(BngoSlot)<BngoSlotStyleProps>`
  @media ${media.pc} {
    margin-bottom: 20px;
  }

  @media ${media.sp} {
    display: ${props => (props.spVisible ? 'block' : 'none')};
  }
`
