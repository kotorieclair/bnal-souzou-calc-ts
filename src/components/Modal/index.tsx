import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles'
import { Props } from './types'

export * from './types'

export const Modal: React.FC<Props> = ({ className, children }) => {
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalOverlay />
      <ModalBody className={className}>
        <ModalClose>close</ModalClose>
        <ModalContent>{children}</ModalContent>
      </ModalBody>
    </ModalContainer>,
    document.getElementById('modal')
  )
}

export default Modal
