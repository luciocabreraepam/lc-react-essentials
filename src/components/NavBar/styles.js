import styled from 'styled-components';

export const MenuButtonStyled = styled.div`
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
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  backdrop-filter: brightness(0.4);
  -webkit-backdrop-filter: brightness(0.4);
  overflow: hidden;

  img,
  svg {
    height: 21px;
    width: 21px;
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
      background-color: ${({ backgroundColorOnHover }) =>
        backgroundColorOnHover};
      color: ${({ fontColorOnHover }) => fontColorOnHover};
      svg {
        fill: ${({ fontColorOnHover }) => fontColorOnHover};
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: flex !important;
    flex-wrap: wrap;
    flex-direction: column;
    a {
      position: relative;
      float: none !important;
      text-align: left !important;
      height: 3vh !important;
      :not(:first-child) {
        display: ${({ showMenuButton }) =>
          showMenuButton ? `flex` : `none`} !important;
      }
    }
    ${MenuButtonStyled} {
      display: flex !important;
    }
  }

  ${({
    highlightOnScroll,
    highlightOnScrollFontColor,
    highlightOnScrollBackColor
  }) =>
    !highlightOnScroll &&
    `
    color: ${highlightOnScrollFontColor};
    background-color: ${highlightOnScrollBackColor};
    svg {
      fill: ${highlightOnScrollFontColor};
    }
    a {
      height: 3vh !important;
    }
    animation: animatetop 0.4s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    height:inherit !important;
  `}
`;
