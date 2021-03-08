import React from 'react';
import { Field } from '../components/Form/Field';

export default {
  title: 'Components/Form/Field',
  component: Field,
  argTypes: {
    errorFontColor: { control: 'color' },
    isRequiredFontColor: { control: 'color' },
    fieldBorderColor: { control: 'color' },
    labelFontColor: { control: 'color' },
    inputFontColor: { control: 'color' }
  }
};

const Template = args => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'First Name',
  accessor:'firstName',
  value: 'Lucio',
  required:true,
  onChange: () => alert(`field's onChange fired`)
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'First Name',
  accessor:'firstName',
  value: 'Lucio',
  required:true,
  hasErrors:true,
  errorMessage:'This an error message',
  onChange: () => alert(`field's onChange fired`)
};
