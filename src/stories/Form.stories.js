import React from 'react';
import { Form } from '../components/Form/Form';

export default {
  title: 'Components/Form/Form',
  component: Form,
  argTypes: {
    buttonFontColor: { control: 'color' },
    buttonBackgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    errorFontColor: { control: 'color' },
    isRequiredFontColor: { control: 'color' },
    fieldBorderColor: { control: 'color' },
    labelFontColor: { control: 'color' },
    inputFontColor: { control: 'color' }
  }
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonBackgroundColor: 'darkgoldenrod',
  buttonFontColor: 'white',
  title: 'This is a title',
  subtitle: 'This is a subtitle',
  fields: [
    {
      type: 'input',
      required: true,
      accessor: 'input',
      label: 'Normal input with rules (max and min)',
      rules: [
        {
          type: 'minLength',
          value: 2
        },
        {
          type: 'maxLength',
          value: 50
        }
      ]
    },
    {
      type: 'number',
      required: true,
      accessor: 'number',
      label: 'Number'
    },
    { type: 'email', required: true, accessor: 'email', label: 'Email' },
    {
      type: 'textarea',
      required: true,
      accessor: 'textarea',
      label: 'Textarea'
    }
  ],
  onAccept: data => alert(JSON.stringify(data))
};
