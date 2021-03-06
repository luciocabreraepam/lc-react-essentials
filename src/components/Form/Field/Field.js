import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Label from '../Label/Label';
import { FieldStyled, ErrorMessage, IsRequired } from './styles';

const getNodeByType = props => {
  switch (props.type) {
    case 'textarea':
      return <TextArea {...props} />;
    case 'input':
    case 'email':
    default:
      return <Input {...props} />;
  }
};

const Field = props => {
  return (
    <FieldStyled fieldBorderColor={props.fieldBorderColor}>
      <Label labelFontColor={props.labelFontColor} for={props.accessor}>
        {props.label}
        {props.required && (
          <IsRequired isRequiredFontColor={props.isRequiredFontColor}>
            *
          </IsRequired>
        )}
      </Label>
      <ErrorMessage errorFontColor={props.errorFontColor}>
        {props.errorMessage}
      </ErrorMessage>
      {getNodeByType(props)}
    </FieldStyled>
  );
};

Field.propTypes = {
  /** Field's accessor.*/
  accessor: PropTypes.string.isRequired,
  /** Field's label itself */
  label: PropTypes.string,
  /** Field's  type.
   * Specifies the type of input element to be displayed
   */
  type: PropTypes.oneOf(['input', 'email', 'number', 'textarea']),
  /** Field's  is required.
   * Specifies whether the field is mandatory or not
   * , will display a star if so
   */
  required: PropTypes.bool.isRequired,
  /** Specifies whether the field is in error state */
  hasErrors: PropTypes.bool,
  /** Specifies the error message to be displayed */
  errorMessage: PropTypes.string,
  /** Field's error font color.
   * It is the CSS color property
   * that sets the color of the error message text.
   */
  errorFontColor: PropTypes.string,
  /** Field's is required font color.
   * It is the CSS color property
   * that sets the color of the is required star displayedd when the field is required.
   */
  isRequiredFontColor: PropTypes.string,
  /** Field's border color.
   * It is the color set in the CSS border-bottom property
   */
  fieldBorderColor: PropTypes.string,
  /** Field's label font color.
   * It is the color set in the CSS color property
   * of the label itself
   */
  labelFontColor: PropTypes.string
};

Field.defaultProps = {
  required: true,
  errorFontColor: 'red',
  isRequiredFontColor: 'orange',
  fieldBorderColor: '#6c6309',
  labelFontColor: 'darkgoldenrod'
};

export default Field;
