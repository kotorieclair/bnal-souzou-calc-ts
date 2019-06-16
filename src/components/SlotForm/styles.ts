import styled from 'styled-components'
import NumberInput from '~/components/NumberInput'
import SelectInput from '~/components/SelectInput'
import { getFontSize, media, withAlpha } from '~/styles'

export const SlotFormContainer = styled.div``

export const SlotFormNumberInput = styled(NumberInput)`
  font-size: ${getFontSize({ add: -1 })};
`

export const SlotFormSelectInput = styled(SelectInput)`
  font-size: ${getFontSize({ add: -1 })};
  margin-right: 3px;
`

export const BungoInput = styled.div`
  margin-bottom: 5px;
`

export const CardInput = styled.div`
  margin-bottom: 10px;
`

export const StatusInputLabel = styled.p`
  color: #fff;
  font-size: ${getFontSize({ add: -1 })};
  margin-bottom: 2px;
`

export const StatusInput = styled.div`
  display: flex;

  @media ${media.sp} {
    margin-bottom: 10px;
  }
`

export const StatusInputItem = styled.label`
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }

  @media ${media.pc} {
    flex: 0 1 3.5em;
  }

  @media ${media.sp} {
    flex: 0 1 20%;
  }

  ${SlotFormNumberInput} {
    min-width: 0;
    width: 100%;
  }
`

export const StatusInputName = styled.span`
  background-color: ${withAlpha('#fff', 0.5)};
  display: block;
  font-size: ${getFontSize({ add: -1 })};
  padding: 3px 0;
  text-align: center;
`
