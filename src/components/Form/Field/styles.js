import styled from 'styled-components';

export const FieldStyled = styled.div`
  width: 100%;
  display: grid;
  margin-top: 12px;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${({ fieldBorderColor }) => fieldBorderColor};
`;
export const ErrorMessage = styled.span`
  color: ${({ errorFontColor }) => errorFontColor};
`;
export const IsRequired = styled.span`
  color: ${({ isRequiredFontColor }) => isRequiredFontColor};
`;
