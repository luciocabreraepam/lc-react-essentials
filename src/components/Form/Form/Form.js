import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from '../Field';
import { Button } from '../../Button';
import { FormStyled, ButtonsWrapper } from './styles';
import {
  validateFields,
  getErrorField,
  getInitialData
} from '../../../util/form';

const Form = props => {
  const [data, setData] = useState(getInitialData(props.fields));
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setData(getInitialData(props.fields));
  }, [props.fields]);

  const onChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const errorsFields = validateFields(props.fields, data);
    if (errorsFields.length === 0) props.onAccept(data);
    setErrors(errorsFields);
  };

  const fields = props.fields.map(field => {
    const errorField = getErrorField(field, errors);
    return (
      <Field
        key={`field-${field.accessor}`}
        value={data[field.accessor]}
        onChange={onChange}
        inputFontColor={props.inputFontColor}
        backgroundColor={props.backgroundColor}
        border={props.border}
        errorFontColor={props.errorFontColor}
        isRequiredFontColor={props.isRequiredFontColor}
        fieldBorderColor={props.fieldBorderColor}
        labelFontColor={props.labelFontColor}
        {...field}
        {...errorField}
      />
    );
  });

  return (
    <FormStyled
      noValidate
      backdropFilter={props.backdropFilter}
      fontColor={props.fontColor}
    >
      {props.title && <h1>{props.title}</h1>}
      {props.subtitle && <h4>{props.subtitle}</h4>}
      {fields}
      <ButtonsWrapper>
        <Button
          label='Submit'
          backgroundColor={props.buttonBackgroundColor}
          fontColor={props.buttonFontColor}
          onClick={event => onSubmit(event)}
        />
      </ButtonsWrapper>
    </FormStyled>
  );
};

Form.propTypes = {
  /** Array of fields to be displayed on the Form */
  fields: PropTypes.arrayOf(Field).isRequired,
  /** Form's title */
  title: PropTypes.string,
  /** Form's subtitle */
  subtitle: PropTypes.string,
  /** It is the method to be executed when submiting the form if there is not errors*/
  onAccept: PropTypes.func,
  /** Form's Title and subtitle's font color.
   * It is the CSS color property
   * that sets the color of the text for the Inputs within the form.
   */
  fontColor: PropTypes.string,
  /** Form's Input's background color.
   * It is the CSS background property
   * that sets the background color for the Inputs within the form.
   */
  backgroundColor: PropTypes.string,
  /** Form's Input's border.
   * It is the CSS border property
   * that sets the border for the Inputs within the form.
   */
  border: PropTypes.string,
  /** Form's Field's error font color.
   * It is the CSS color property
   * that sets the color of the error message text.
   */
  errorFontColor: PropTypes.string,
  /** Form's Field's is required font color.
   * It is the CSS color property
   * that sets the color of the is required star displayedd when the field is required.
   */
  isRequiredFontColor: PropTypes.string,
  /** Form's Field's border color.
   * It is the color set in the CSS border-bottom property for the Fields within the form
   */
  fieldBorderColor: PropTypes.string,
  /** Form's Field's label font color.
   * It is the color set in the CSS color property
   * of the labels withing the form
   */
  labelFontColor: PropTypes.string,
  /** Form's Input's font color.
   * It is the color set in the CSS color property
   * that sets the background color for the Inputs within the form.
   */
  inputFontColor: PropTypes.string,
  /** Form's backdrop Filter.
   * It is the CSS backdrop-filter property
   * to be applied to the form element
   */
  backdropFilter: PropTypes.string
};

Form.defaultProps = {
  backdropFilter:
    'blur(10px) saturate(0.5) contrast(7) brightness(1.5) opacity(1)'
};

export default Form;
