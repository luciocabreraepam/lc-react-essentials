import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalCard = styled.div`
  position: relative;
  min-width: 33vw;
  z-index: 10;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const InnerContent = styled.div`
  margin: 12px 24px 0px;
`;

export const BodyWrapper = styled.div`
  border-bottom: 2px solid #6c6309;
  border-top: 2px solid #6c6309;
  padding: 12px 18px;
`;

export const FooterWrapper = styled.div`
  padding: 10px 16px 12px;
  text-align: center;
`;

export const Title = styled.div`
  padding: 0px 18px;
  h1 {
    color: ${({ titleFontColor }) => titleFontColor};
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.6;
`;
