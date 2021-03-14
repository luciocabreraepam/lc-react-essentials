import React from 'react';
import PropTypes from 'prop-types';
import { HeaderImpactStyled } from './styles';
import colors from '../../../styles/colors';

const HeaderImpact = props => (
  <HeaderImpactStyled
    fontColor={props.fontColor}
    backgroundColor={props.backgroundColor}
    blendMode={props.blendMode}
    scaleOnHover={props.scaleOnHover}
    applyGlassOnHover={props.applyGlassOnHover}
    roundOnHover={props.roundOnHover}
    size={props.size}
    className={props.customClass}
  >
    {props.title}
    {props.subtitle && <p>{props.subtitle}</p>}
  </HeaderImpactStyled>
);

HeaderImpact.propTypes = {
  /** Header's title */
  title: PropTypes.string.isRequired,
  /** Header's subtitle */
  subtitle: PropTypes.string,
  /** Header's font color.
   * It is the CSS color property
   * that sets the color of the text of the Header.
   */
  fontColor: PropTypes.string,
  /** Header's  Background color.
   * It is the CSS background-color property
   * that sets the background color of the Header.
   */
  backgroundColor: PropTypes.string,
  /** Header's  blend mode.
   * It is the CSS mix-blend-mode  property
   * that sets how the Header content blends with its direct parent background.
   */
  blendMode: PropTypes.oneOf([
    'normal',
    'screen',
    'multiply',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ]),
  /** Header's scale on hover.
   * Indicates wheter to scale or not the header on hover.
   * It uses the CSS transform and transition properties
   */
  scaleOnHover: PropTypes.bool,
  /** Header's apply glass effect on hover.
   * Indicates wheter to apply or not a glass effect to the header on hover.
   * It uses the CSS background-color and backdrop-filter properties.
   */
  applyGlassOnHover: PropTypes.bool,
  /** Header's round borders on hover.
   * Indicates wheter to round or not the header on hover.
   * It uses the CSS border-radiusproperty that sets
   * the radius of the header's corners when hovering over it .
   */
  roundOnHover: PropTypes.bool,
  /** Header's size.
   * It uses the CSS font-size
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Header's custom CSS class name.
   * It can be used to implement custom css rules on the Header
   */
  customClass: PropTypes.string
};

HeaderImpact.defaultProps = {
  fontColor: colors.light,
  backgroundColor: colors.gray.dark,
  blendMode: 'normal',
  scaleOnHover: false,
  applyGlassOnHover: false,
  roundOnHover: false,
  size: 'md'
};
export default HeaderImpact;
