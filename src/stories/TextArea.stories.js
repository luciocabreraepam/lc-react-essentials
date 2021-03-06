import React from 'react';
import { TextArea } from '../components/Form/TextArea';

export default {
  title: 'Components/Form/TextArea',
  component: TextArea,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' }
  }
};

const Template = args => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  accessor: 'message',
  label: 'Please enter the message',
  border: '1px solid black'
};
