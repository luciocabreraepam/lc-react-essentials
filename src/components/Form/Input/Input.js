import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './styles';

const Input = React.forwardRef((props, ref) => (
  <InputStyled
    ref={ref}
    id={props.accessor}
    name={props.accessor}
    placeholder={`Please enter ${props.label}`}
    value={props.value || ''}
    backgroundColor={props.backgroundColor}
    border={props.border}
    inputFontColor={props.inputFontColor}
    onChange={event => props.onChange(event)}
    type={props.type}
  />
));

Input.propTypes = {
  /** Input's accessor.*/
  accessor: PropTypes.string,
  /** Field's label which will be used as
   * Input's placeholder. */
  label: PropTypes.string,
  /** Input's value. */
  value: PropTypes.string,
  /** Input's type.
   * Specifies the type of input element
   */
  type: PropTypes.oneOf(['input', 'text', 'email', 'number']),
  /** Input's font color.
   * It is the CSS color property
   * that sets the color of the text.
   */
  inputFontColor: PropTypes.string,
  /** Input's background color.
   * It is the CSS background property
   */
  backgroundColor: PropTypes.string,
  /** Input's border.
   * It is the CSS border property
   */
  border: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  inputFontColor: 'black',
  backgroundColor: 'transparent',
  border: 'none'
};

export default Input;
