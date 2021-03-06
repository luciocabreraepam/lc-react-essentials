import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styles';
import colors from '../../styles/colors';

const Button = props => (
  <ButtonStyled
    fontColor={props.fontColor}
    backgroundColor={props.backgroundColor}
    fontColorOnHover={props.fontColorOnHover}
    backgroundColorOnHover={props.backgroundColorOnHover}
    {...props}
  >
    {props.label}
  </ButtonStyled>
);

Button.propTypes = {
  /** Button's font color.
   * It is the CSS color property
   * that sets the color of the text of the Button.
   */
  fontColor: PropTypes.string,
  /** Button's  Background color.
   * It is the CSS background-color property
   * that sets the background color of the Button.
   */
  backgroundColor: PropTypes.string,
  /** Button's font color when hovering..
   * It is the CSS color property
   * that sets the color of the text of the Button when hovering.
   */
  fontColorOnHover: PropTypes.string,
  /** Button's  Background color when hovering.
   * It is the CSS background-color property
   * that sets the background color of the Button when hovering..
   */
  backgroundColorOnHover: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  fontColor: colors.gray.dark,
  backgroundColor: colors.light,
  backgroundColorOnHover: colors.highlighted.gold,
  fontColorOnHover: colors.light
};

export default Button;
