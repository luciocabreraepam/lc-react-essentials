import styled from 'styled-components';

export const ContentBlockStyled = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  color: ${props => props.fontColor};

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 25px;
  }
`;
