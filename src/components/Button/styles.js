import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: ${props => props.fontColor};
  background-color: ${props => props.backgroundColor};
  text-align: center;
  cursor: pointer;
  margin: 5px;
  border-radius: 18px;

  :hover {
    background-color: darkgoldenrod;
    color: white;
    transform: scale(1.2);
    transition-timing-function: linear;
  }
`;
