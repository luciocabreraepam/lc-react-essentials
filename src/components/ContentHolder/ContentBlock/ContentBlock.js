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
        fontColor={props.fontColor}
      />
    )}
    {props.subtitle && <p>{props.subtitle}</p>}
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
  children: PropTypes.node
};

ContentBlock.defaultProps = {
  fontColor: colors.light
};

export default ContentBlock;
