import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavBarStyled, MenuButtonStyled } from './styles';
import colors from '../../styles/colors';
import useScrollPosition from '../../hooks/useScrollPosition';

const Link = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

const NavItems = ({ routes }) =>
  routes.map((route, i) => (
    <Link key={`nav-item-${i}`} to={route.path} exact={route.exact}>
      <>
        {route.icon && <img src={route.icon} alt={route.tex} />}
        {route.text}
      </>
    </Link>
  ));

const NavBar = props => {
  const [showMenuButton, setShowMenuButton] = useState();
  const [highlightOnScroll, setHighlightOnScroll] = useState(true);

  useScrollPosition(({ currPos }) => {
    const isShow = currPos.y > -100;
    if (isShow !== highlightOnScroll) {
      setHighlightOnScroll(isShow);
    }
  });
  return (
    <NavBarStyled
      fontColor={props.fontColor}
      backgroundColor={props.backgroundColor}
      fontColorOnHover={props.fontColorOnHover}
      backgroundColorOnHover={props.backgroundColorOnHover}
      highlightOnScroll={highlightOnScroll}
      showMenuButton={showMenuButton}
    >
      <NavItems routes={props.routes} />
      <MenuButtonStyled
        id='hamburger-button'
        src={props.hamburgerButton}
        alt=''
        onClick={() => setShowMenuButton(!showMenuButton)}
      />
    </NavBarStyled>
  );
};

NavBar.propTypes = {
  /** Set of Routes to be displayed in the NavBar */
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      /** Route path */
      path: PropTypes.string.isRequired,
      /** Text to display for the route */
      text: PropTypes.string.isRequired,
      /** Match the route exact: true [default] OR false */
      exact: PropTypes.bool
    })
  ).isRequired,
  /** NavBar's font color.
   * It is the CSS color property
   * that sets the color of the text of the NavBar.
   */
  fontColor: PropTypes.string,
  /** NavBar's  Background color.
   * It is the CSS background-color property
   * that sets the background color of the NavBar.
   */
  backgroundColor: PropTypes.string,
  /** NavBar's  Hamburger Button.
   * It is the image to be shown as a hamburger button in the NavBar.
   */
  hamburgerButton: PropTypes.any.isRequired,
  /** NavBar's font color when hovering..
   * It is the CSS color property
   * that sets the color of the text of the NavBar when hovering.
   */
  fontColorOnHover: PropTypes.string,
  /** NavBar's  Background color when hovering.
   * It is the CSS background-color property
   * that sets the background color of the NavBar when hovering..
   */
  backgroundColorOnHover: PropTypes.string
};

NavBar.defaultProps = {
  fontColor: colors.gray.light,
  backgroundColorOnHover: colors.gray.light,
  fontColorOnHover: colors.gray.dark
};

export default NavBar;
