import React from 'react';
import PropTypes from 'prop-types';
import { DescriptionBlockStyled } from './styles';
import colors from '../../../styles/colors';

const DescriptionBlock = props => (
  <DescriptionBlockStyled
    fontColor={props.fontColor}
    backgroundColor={props.backgroundColor}
  >
    {props.title && <h3>{props.title}</h3>}
    <hr />
    {props.description}
  </DescriptionBlockStyled>
);

DescriptionBlock.propTypes = {
  /** Description block title */
  title: PropTypes.string,
  /** Description block text */
  description: PropTypes.any,
  /** Description block font color.
   * It is the CSS color property
   * that sets the color of the text of the Description Block.
   */
  fontColor: PropTypes.string,
  /** Description block Background color.
   * It is the CSS background-color property
   * that sets the background color of the Description Block.
   */
  backgroundColor: PropTypes.string
};

DescriptionBlock.defaultProps = {
  fontColor: colors.gray.medium,
  backgroundColor: colors.light
};

export default DescriptionBlock;
