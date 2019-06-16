import styled from 'styled-components'
import { colors, media } from '~/styles'

export const Select = styled.select`
  background-color: #fff;
  border: 1px solid ${colors.grayLight};
  box-sizing: border-box;
  vertical-align: bottom;

  @media ${media.sp} {
    height: 2em;
  }
`
