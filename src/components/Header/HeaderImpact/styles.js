import styled from 'styled-components';

export const HeaderImpactStyled = styled.h1`
  //font-size: 8vw; /* Responsive font size */
  letter-spacing: 0.5px;
  font-weight: bold;
  mix-blend-mode: ${props =>
    props.blendMode}; /* This makes the cutout text possible */
  text-align: center; /* Center text */
  color: ${props => props.fontColor};
  background-color: ${props => props.backgroundColor};
  padding: 2vw;
  margin: 0px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 8vw;
  }

  @media only screen and (min-width: 601px) {
    font-size: 6vw;
  }

  @media only screen (min-width: 769px) {
    font-size: 5vw;
  }
`;
