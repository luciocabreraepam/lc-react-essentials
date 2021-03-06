import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  cursor: pointer;
  margin: 5px;
  border-radius: 18px;

  :hover {
    background-color: ${({ backgroundColorOnHover }) => backgroundColorOnHover};
    color: ${({ fontColorOnHover }) => fontColorOnHover};
    transform: scale(1.2);
    transition-timing-function: linear;
  }
`;
