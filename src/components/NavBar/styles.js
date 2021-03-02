import styled from 'styled-components';

export const MenuButtonStyled = styled.img`
  position: absolute;
  right: 18px;
  top: 0;
  display: none;
  padding: 6px 16px;
  cursor: pointer;
`;

export const NavBarStyled = styled.div`
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  backdrop-filter: brightness(0.4);
  overflow: hidden;

  img {
    height: 21px;
    padding-right: 8px;
  }

  a {
    float: left;
    display: flex;
    padding: 6px 16px;
    text-align: center;
    border: none;
    white-space: normal;
    outline: 0;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    place-items: center;
    background-color: inherit;
    :hover {
      color: black;
      background-color: #ddd;
    }
  }

  @media screen and (max-width: 600px) {
    a {
      position: relative;
      float: none !important;
      text-align: left !important;
      :not(:first-child) {
        display: ${({ showMenuButton }) =>
          showMenuButton ? `flex` : `none`} !important;
      }
    }
    ${MenuButtonStyled} {
      display: flex !important;
    }
  }

  ${({ highlightOnScroll }) =>
    !highlightOnScroll &&
    `
    color: #000 !important;
    background-color: #fff !important;
    animation: animatetop 0.4s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  `}
`;
