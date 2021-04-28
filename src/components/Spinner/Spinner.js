import { Portal } from 'lc-react-essentials';
import React from 'react';
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
