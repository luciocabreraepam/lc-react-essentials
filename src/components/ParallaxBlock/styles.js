import styled from 'styled-components';

export const ParallaxBlockBody = styled.div`
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  opacity: ${props => props.opacityBlock};
  min-height: ${props => props.heightBlock};
  background-image: ${props => props.bgImgBlock};
  background-repeat: ${props => props.bgRepeatBlock};
  display: grid;
  place-items: center;
  padding: 2vw;
`;
