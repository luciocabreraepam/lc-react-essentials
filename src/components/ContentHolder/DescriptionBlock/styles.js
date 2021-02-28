import styled from 'styled-components';
import { breakPoints } from '../../../stories/utils/breakPoints';

export const DescriptionBlockStyled = styled.div`
  color: ${props => props.fontColor};
  background-color: ${props => props.backgroundColor};
  text-align: center;
  z-index: 1;

  ${breakPoints('padding', [{ 800: '32px 26px' }, { 600: '24px 18px' }])};

  ${breakPoints('padding', [{ 801: '48px 42px' }], 'min-width')};

  h3 {
    text-align: center;
    margin-top: 0px;
  }
  hr {
    margin-bottom: 24px;
    border: 1px solid;
    width: 25%;
  }
`;
