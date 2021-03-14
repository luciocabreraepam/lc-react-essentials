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

const Template = args =>
  React.createElement(() => {
    const [state, setState] = React.useState();
    return (
      <Field value={state} onChange={e => setState(e.target.value)} {...args} />
    );
  });

export const Default = Template.bind({});
Default.args = {
  label: 'First Name',
  accessor: 'firstName',
  required: true
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'First Name',
  accessor: 'firstName',
  required: true,
  hasErrors: true,
  errorMessage: 'This an error message'
};
