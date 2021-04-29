import React from 'react';
import { Portal } from '../Portal';
import { Loader, ModalWrapper, Background } from './styles';

const Spinner = () => (
  <Portal>
    <ModalWrapper>
      <Loader />
      <Background />
    </ModalWrapper>
  </Portal>
);

export default Spinner;
