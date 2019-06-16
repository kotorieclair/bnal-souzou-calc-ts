import styled from 'styled-components'
import SlotNumBadge from '~/components/SlotNumBadge'
import { colors, media } from '~/styles'

export const BngoSlotContainer = styled.div`
  background-color: ${colors.mainDark};
  border: 1px solid ${colors.mainDark};
  padding: 10px;

  @media ${media.pc} {
    display: flex;
  }

  @media ${media.sp} {
    position: relative;
  }
`

export const BngoSlotLeft = styled.div`
  @media ${media.pc} {
    flex: 0 1 33%;
    margin-right: 10px;
  }
`

export const BngoSlotRight = styled.div`
  @media ${media.pc} {
    flex: 0 1 67%;
  }
`

export const StyledSlotNumBadge = styled(SlotNumBadge)`
  @media ${media.pc} {
    margin-bottom: 15px;
  }

  @media ${media.sp} {
    display: none;
  }
`
