import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavBarStyled, MenuButtonStyled } from './styles';
import useScrollPosition from '../../hooks/useScrollPosition';

const Link = ({ to, children }) => <a href={to}>{children}</a>;

const NavItems = ({ routes }) =>
  routes.map((route, i) => (
    <Link key={`nav-item-${i}`} to={route.path} exact={route.exact}>
      <>
        {route.icon &&
          (typeof route.icon === 'string' ? (
            <img src={route.icon} alt={route.text} />
          ) : (
            <route.icon />
          ))}
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
      highlightOnScroll={highlightOnScroll}
      showMenuButton={showMenuButton}
      className={props.customClass}
    >
      <NavItems  routes={props.routes}/>
      <MenuButtonStyled
        id='hamburger-button'
        onClick={() => setShowMenuButton(!showMenuButton)}
      >
        {typeof props.hamburgerButton === 'string' ? (
          <img src={props.hamburgerButton} alt={''} />
        ) : (
          <props.hamburgerButton />
        )}
      </MenuButtonStyled>
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
      exact: PropTypes.bool,
      /** The icon to be shown next to the text */
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element
      ])
    })
  ).isRequired,

  /** NavBar's  Hamburger Button.
   * It is the image to be shown as a hamburger button in the NavBar.
   */
  hamburgerButton: PropTypes.any.isRequired,
};

export default NavBar;
