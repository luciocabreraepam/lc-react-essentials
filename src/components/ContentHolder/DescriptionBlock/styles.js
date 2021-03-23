import styled from 'styled-components';
import { breakPoints } from '../../../stories/utils/breakPoints';

export const DescriptionBlockStyled = styled.div`
  color: ${({  theme }) => theme.descriptionBlock.text };
  background-color: ${({ theme }) => theme.descriptionBlock.background };
  text-align: center;
  z-index: 1;

  ${breakPoints('padding', [{ 800: '32px 26px' }, { 600: '24px 18px' }])};

  ${breakPoints('padding', [{ 801: '48px 42px' }], 'min-width')};

  h3 {
    text-align: center;
    margin-top: 0px;
    color: ${({  theme }) => theme.headerBlock.text };
    background-color: ${({  theme }) => theme.headerBlock.background };
  }
  hr {
    margin-bottom: 24px;
    border: 1px solid;
    width: 25%;
    color: ${({  theme }) => theme.dividerBlock.text };
    background-color: ${({  theme }) => theme.dividerBlock.background };
  }
`;
