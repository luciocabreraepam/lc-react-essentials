import styled from 'styled-components';

export const FormStyled = styled.form`
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  border-radius: 18px;
  padding: 4vh 6vw;
  min-width: 80%;
`;

export const ButtonsWrapper = styled.div`
  padding-top: 4vh;
  text-align: center;
`;
