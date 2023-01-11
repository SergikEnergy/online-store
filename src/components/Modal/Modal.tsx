import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
  onBackClick: () => void;
  children?: React.ReactNode;
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal: React.FC<ModalProps> = ({ onBackClick, children }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onBackClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Overlay>,
    document.querySelector('#popup-root') as HTMLDivElement
  );
};

export default Modal;
