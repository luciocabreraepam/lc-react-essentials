import React from 'react';
import PropTypes from 'prop-types';
import { ContentBlockStyled } from './styles';
import { HeaderImpact } from '../../Header/HeaderImpact';
import colors from '../../../styles/colors';

const ContentBlock = props => (
  <ContentBlockStyled fontColor={props.fontColor}>
    {props.title && (
      <HeaderImpact
        backgroundColor='unset'
        title={props.title}
        subtitle={props.subtitle}
        fontColor={props.fontColor}
        scaleOnHover={props.scaleHeaderOnHover}
        applyGlassOnHover={props.applyGlassHeaderOnHover}
        roundOnHover={props.roundHeaderOnHover}
        size={props.titleSize}
      />
    )}
    {props.children}
  </ContentBlockStyled>
);

ContentBlock.propTypes = {
  /** Content block's title */
  title: PropTypes.string,
  /** Content block's subtitle */
  subtitle: PropTypes.string,
  /** Content block's font color.
   * It is the CSS color property
   * that sets the color of the text of the Description Block.
   */
  fontColor: PropTypes.string,
  /** Content block's children.
   * It is anything that can be rendered as children in React
   * and is shown inside the Content Block.
   */
  children: PropTypes.node,
  /** Content block's header's scale on hover.
   * Indicates wheter to scale or not the header on hover.
   * It uses the CSS transform and transition properties
   */
  scaleHeaderOnHover: PropTypes.bool,
  /** Content block's header's apply glass effect on hover.
   * Indicates wheter to apply or not a glass effect to the header on hover.
   * It uses the CSS background-color and backdrop-filter properties.
   */
  applyGlassHeaderOnHover: PropTypes.bool,
  /** Content block's header's round borders on hover.
   * Indicates wheter to round or not the header on hover.
   * It uses the CSS border-radiusproperty that sets
   * the radius of the header's corners when hovering over it .
   */
  roundHeaderOnHover: PropTypes.bool,
  /** Content block's header's size.
   * It uses the CSS font-size
   */
  titleSize: PropTypes.oneOf(['sm', 'md', 'lg'])
};

ContentBlock.defaultProps = {
  fontColor: colors.light,
  scaleHeaderOnHover: false,
  applyGlassHeaderOnHover: false,
  roundHeaderOnHover: false,
  titleSize: 'lg'
};

export default ContentBlock;
