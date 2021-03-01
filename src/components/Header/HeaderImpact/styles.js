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
  margin-right: 8vw;
  margin-left: 8vw;

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

    `}
    ${({ roundOnHover }) =>
      roundOnHover &&
      `
      border-radius: 18px;
    `}
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 8vw;
  }

  @media only screen and (min-width: 601px) {
    font-size: 6vw;
  }
`;
