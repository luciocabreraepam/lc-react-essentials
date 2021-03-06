import styled from 'styled-components';

export const TextAreaStyled = styled.input`
  height: 24px;
  background: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  color: ${({ fontColor }) => fontColor};
  width: 100%;
`;
