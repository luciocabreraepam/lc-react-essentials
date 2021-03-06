import React from 'react';
import { Label } from '../components/Form/Label';

export default {
  title: 'Components/Form/Label',
  component: Label,
  argTypes: {
    labelFontColor: { control: 'color' }
  }
};

const Template = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a label',
  labelFontColor: 'darkgoldenrod'
};
