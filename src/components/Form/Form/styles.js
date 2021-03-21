import styled from 'styled-components';

export const FormStyled = styled.form`
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  -webkit-backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  border-radius: 18px;
  padding: 4vh 6vw;
  min-width: 80%;
  color: ${({ fontColor }) => fontColor};
`;

export const ButtonsWrapper = styled.div`
  padding-top: 4vh;
  text-align: center;
`;
