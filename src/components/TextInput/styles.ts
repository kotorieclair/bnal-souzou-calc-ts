import styled from 'styled-components'
import { colors, media } from '~/styles'

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid ${colors.grayLight};
  box-sizing: border-box;
  padding: 2px;
  vertical-align: bottom;

  @media ${media.sp} {
    border-radius: 0;
    height: 2em;
  }
`
