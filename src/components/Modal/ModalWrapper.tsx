import React from 'react';
import Modal from './Modal';
import { DesktopModalContainer } from './ModalPopup.styles';
import Form from '../Form/Form';

interface ModalWrapperProps {
  isModalVisible: boolean;
  onBackClick: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = (onBackClick, isModalVisible) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackClick={onBackClick}>
      <DesktopModalContainer>
        <Form />
      </DesktopModalContainer>
    </Modal>
  );
};

export default ModalWrapper;
