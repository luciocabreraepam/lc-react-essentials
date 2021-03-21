import styled from 'styled-components';

export const HeaderImpactStyled = styled.h1`
  letter-spacing: 0.5px;
  font-weight: bold;
  mix-blend-mode: ${({ blendMode }) =>
    blendMode}; /* This makes the cutout text possible */
  text-align: center; /* Center text */
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 2vw;

  :hover {
    ${({ scaleOnHover }) =>
      scaleOnHover &&
      `
      transform: scale(1.2);
      transition: all 0.4s ease-in-out;
    `}
    ${({ applyGlassOnHover }) =>
      applyGlassOnHover &&
      `
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(1px) saturate(50%) contrast(75%) brightness(45%);
      -webkit-backdrop-filter: blur(1px) saturate(50%) contrast(75%) brightness(45%);

    `}
    ${({ roundOnHover }) =>
      roundOnHover &&
      `
      border-radius: 18px;
    `}
  }

  
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 1199px) {
    font-size:  ${({ size }) => (size === 'md' ? 7 : size === 'sm' ? 6 : 9)}vw;
    margin-right: 8vw;
    margin-left: 8vw;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: ${({ size }) => (size === 'md' ? 5 : size === 'sm' ? 4 : 7)}vw;
    margin-right: 14vw;
    margin-left: 14vw;
  }
`;
