import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaStyled } from './styles';

const TextArea = props => (
  <TextAreaStyled
    id={props.accessor}
    name={props.accessor}
    placeholder={`Please enter ${props.label}`}
    value={props.value}
    backgroundColor={props.backgroundColor}
    border={props.border}
    inputFontColor={props.inputFontColor}
    onChange={event => props.onChange(event)}
  />
);

TextArea.propTypes = {
  /** TextArea's accessor.*/
  accessor: PropTypes.string.isRequired,
  /** Field's label which will be used as
   * TextArea's placeholder. */
  label: PropTypes.string,
  /** TextArea's value. */
  value: PropTypes.string,
  /** TextArea's font color.
   * It is the CSS color property
   * that sets the color of the text.
   */
  inputFontColor: PropTypes.string,
  /** TextArea's background color.
   * It is the CSS background property
   */
  backgroundColor: PropTypes.string,
  /** TextArea's border.
   * It is the CSS border property
   */
  border: PropTypes.string
};

TextArea.defaultProps = {
  inputFontColor: 'black',
  backgroundColor: 'transparent',
  border: 'none'
};

export default TextArea;
