import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'lc-react-essentials';
import {
  ModalWrapper,
  ModalCard,
  Background,
  InnerContent,
  Title,
  BodyWrapper,
  FooterWrapper
} from './sytles';

const Modal = ({ children, onClick, open, title, titleFontColor, footer }) => (
  <Portal>
    {open && (
      <ModalWrapper>
        <ModalCard>
          <InnerContent>
            <Title titleFontColor={titleFontColor}>
              <h1>{title}</h1>
            </Title>
            <BodyWrapper>{children}</BodyWrapper>
            <FooterWrapper>{footer}</FooterWrapper>
          </InnerContent>
        </ModalCard>
        <Background onClick={onClick} />
      </ModalWrapper>
    )}
  </Portal>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Modal;
