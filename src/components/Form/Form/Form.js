import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Field } from '../Field';
import { FormStyled, ButtonsWrapper } from './styles';
import { getErrorField, getInitialData } from '../../../util/form';
import useFormData from '../../../hooks/useFormData';

const Form = props => {
  const initialData = getInitialData(props.fields, props.data);
  const {
    data,
    resetForm,
    setForm,
    errors,
    setField,
    verifyForm
  } = useFormData(initialData, props.fields);

  useEffect(() => {
    setForm(initialData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

  const onSubmit = event => {
    event.preventDefault();
    const errorsFields = verifyForm();
    if (errorsFields.length === 0) {
      if (typeof props.onAccept === 'function') props.onAccept(data);
      resetForm();
    }
  };

  const fields = props.fields?.map(field => {
    const errorField = getErrorField(field, errors);
    return (
      <Field
        key={`field-${field.accessor}`}
        value={data[field.accessor] || ''}
        onChange={setField}
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
          type='submit'
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
  /** The Data to be displayed on the Form */
  data: PropTypes.object,
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
