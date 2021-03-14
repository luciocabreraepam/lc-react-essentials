import React from 'react';
import { Input } from '../components/Form/Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    inputFontColor: { control: 'color' }
  }
};

const Template = args =>
  React.createElement(() => {
    const [state, setState] = React.useState();
    return (
      <Input value={state} onChange={e => setState(e.target.value)} {...args} />
    );
  });

export const Default = Template.bind({});
Default.args = {
  accessor: 'name',
  type: 'input',
  label: 'Please enter the name',
  border: '1px solid blue'
};
