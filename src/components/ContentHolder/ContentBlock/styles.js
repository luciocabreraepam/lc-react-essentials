import styled from 'styled-components';

export const ContentBlockStyled = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  color: ${({ fontColor }) => fontColor};

  p {
    font-size: 25px;
  }
`;
