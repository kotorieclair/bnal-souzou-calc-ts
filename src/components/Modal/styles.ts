import styled from 'styled-components'
import { withAlpha } from '~/styles'

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

export const ModalBody = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  position: relative;
  width: 100%;
`

export const ModalOverlay = styled.div`
  background-color: ${withAlpha('#000', 0.2)};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

export const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const ModalContent = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
`
