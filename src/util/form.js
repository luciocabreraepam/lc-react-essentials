export const isEmpty = value => {
  if (typeof value === 'number') return false;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object')
    return value == null || Object.keys(value).length === 0;
  if (typeof value === 'boolean') return false;
  return !value;
};

export const validateFields = (fields, data) => {
  const formErrors = [];
  fields.forEach(field => {
    const required =
      typeof field.required === 'function'
        ? field.required(data)
        : field.required;

    if (required && isEmpty(data[field.accessor])) {
      formErrors.push({
        accessor: field.accessor,
        hasErrors: true,
        errorMessage: `The ${field.label} is mandartory`,
        value: data[field.accessor]
      });
    } else {
      const fieldTypeErrors = validateFieldTypes(field, data);
      formErrors.push(...fieldTypeErrors);
      const fieldRuleErrors = validateFieldRules(field, data);
      formErrors.push(...fieldRuleErrors);
    }
  });

  return formErrors;
};

export const executeDataTransformations = (fields, data) => {
  const transformedData = { ...data };
  fields.forEach(field => {
    if (field.transformations && field.transformations.length > 0) {
      field.transformations.forEach(transformation => {
        if (transformation.type === 'toLowerCase')
          transformedData[field.accessor] = transformedData[
            field.accessor
          ].toLowerCase();
      });
    }
  });

  return transformedData;
};

export const validateFieldTypes = (field, data) => {
  const typeErrors = [];
  const fieldValue = data[field.accessor];
  if (field.type === 'email')
    if (!isEmail(fieldValue)) {
      typeErrors.push({
        accessor: field.accessor,
        hasErrors: true,
        errorMessage: `The email entered is not a valid one`,
        value: fieldValue
      });
    }
  return typeErrors;
};

export const validateFieldRules = (field, data) => {
  const fieldRuleErrors = [];
  const fieldValue = data[field.accessor];
  let errorMessage = '';
  let hasErrors = false;
  if (field.rules && field.rules.length > 0) {
    field.rules.forEach(rule => {
      errorMessage = '';
      hasErrors = false;
      if (rule.type === 'minLength')
        if (fieldValue.length < rule.value) {
          hasErrors = true;
          errorMessage =
            rule.message ||
            `The ${field.label}'s length must be greater than ${rule.value} characters`;
        }
      if (rule.type === 'maxLength')
        if (fieldValue.length > rule.value) {
          hasErrors = true;
          errorMessage =
            rule.message ||
            `The ${field.label}'s length must be lower than ${rule.value} characters`;
        }
      if (rule.type === 'regex')
        if (rule.value && fieldValue.match(rule.value) === null) {
          hasErrors = true;
          errorMessage =
            rule.message ||
            `The specified ${field.label} is wrong, it should comply with the following regex expression ${rule.value}`;
        }

      if (hasErrors)
        fieldRuleErrors.push({
          accessor: field.accessor,
          hasErrors: hasErrors,
          errorMessage: errorMessage,
          value: fieldValue
        });
    });
  }
  return fieldRuleErrors;
};

export const getErrorField = (field, errors) => {
  const defaultError = { hasErrors: false, errorMessage: '' };
  if (errors.length === 0) return defaultError;
  return (
    errors
      .filter(error => error.accessor === field.accessor)
      .map(errorFiltered => {
        return {
          hasErrors: errorFiltered.hasErrors,
          errorMessage: errorFiltered.errorMessage
        };
      })[0] || defaultError
  );
};

export const isEmail = val => {
  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regEmail.test(val);
};

export const getInitialData = (fields, initialData) => {
  const newData = {};
  fields.forEach(field => {
    newData[field.accessor] = initialData
      ? initialData[field.accessor]
      : field.value || '';
  });
  return newData;
};
