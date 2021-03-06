import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Core/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    backgroundColorOnHover: { control: 'color' },
    fontColorOnHover: { control: 'color' }
  }
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
};
