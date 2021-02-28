import React from 'react';
import PropTypes from 'prop-types';
import { HeaderImpactStyled } from './styles';
import colors from '../../../styles/colors';

const HeaderImpact = props => (
  <HeaderImpactStyled
    fontColor={props.fontColor}
    backgroundColor={props.backgroundColor}
    blendMode={props.blendMode}
  >
    {props.title}
  </HeaderImpactStyled>
);

HeaderImpact.propTypes = {
  /** Header's title */
  title: PropTypes.string.isRequired,
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
  ])
};

HeaderImpact.defaultProps = {
  fontColor: colors.light,
  backgroundColor: colors.gray.dark,
  blendMode: 'normal'
};
export default HeaderImpact;
