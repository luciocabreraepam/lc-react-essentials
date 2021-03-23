import React from 'react';
import PropTypes from 'prop-types';
import { DescriptionBlockStyled } from './styles';

const DescriptionBlock = props => (
  <DescriptionBlockStyled>
    {props.title && <h3>{props.title}</h3>}
    <hr />
    {props.description}
  </DescriptionBlockStyled>
);

DescriptionBlock.propTypes = {
  /** Description block title */
  title: PropTypes.string,
  /** Description block text */
  description: PropTypes.any
};

export default DescriptionBlock;
