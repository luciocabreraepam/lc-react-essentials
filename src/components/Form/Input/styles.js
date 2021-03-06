import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 24px;
  background: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  color: ${({ fontColor }) => fontColor};
  width: 100%;
`;
