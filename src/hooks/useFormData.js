import { useState } from 'react';
import { validateFields } from '../util/form';

const useFormData = (initialData, fields) => {
  const [state, setState] = useState({
    initialData,
    data: initialData,
    fields: fields,
    hasErrors: false,
    errors: []
  });

  const setField = event =>
    setState({
      ...state,
      data: {
        ...state.data,
        [event.target.name]: event.target.value
      }
    });

  const setForm = d =>
    setState({
      ...state,
      hasErrors: false,
      errors: [],
      data: d
    });

  const resetForm = () =>
    setState({
      ...state,
      hasErrors: false,
      errors: [],
      data: state.initialData
    });

  const verifyForm = () => {
    const errorsFields = validateFields(state.fields, state.data);
    if (errorsFields.length > 0) {
      setState({
        ...state,
        hasErrors: true,
        errors: errorsFields
      });
    }
    return errorsFields;
  };

  return {
    data: state.data,
    initialData: state.initialData,
    errors: state.errors,
    fields: state.fields,
    hasErrors: state.hasErrors,
    setForm,
    resetForm,
    setField,
    verifyForm
  };
};

export default useFormData;
