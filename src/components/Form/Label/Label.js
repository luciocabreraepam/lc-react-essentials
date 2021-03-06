import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled } from './styles';

const Label = props => <LabelStyled {...props}>{props.children}</LabelStyled>;

Label.propTypes = {
  /** Children for label */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  /** Label's font color.
   * It is the color set in the CSS color property
   * of the label itself
   */
  labelFontColor: PropTypes.string
};

export default Label;
