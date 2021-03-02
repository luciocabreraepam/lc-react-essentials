import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavBarStyled, MenuButtonStyled } from './styles';
import hamburger from '../../assets/svg/hamburger.svg';
import colors from '../../styles/colors';
import useScrollPosition from '../../hooks/useScrollPosition';

const Link = ({ to, children }) => {
  return <a href={to}>{children}</a>;
};

const NavItems = ({ routes }) =>
  routes.map((route, i) => (
    <Link key={`nav-item-${i}`} to={route.path} exact={route.exact}>
      <>
        <img src={route.icon} alt={route.tex} />
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
      highlightOnScroll={highlightOnScroll}
      showMenuButton={showMenuButton}
    >
      <NavItems routes={props.routes} />
      <MenuButtonStyled
        id='hamburger-button'
        src={hamburger}
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
  backgroundColor: PropTypes.string
};

NavBar.defaultProps = {
  fontColor: colors.gray.light
};

export default NavBar;
