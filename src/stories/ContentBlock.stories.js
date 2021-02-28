import React from 'react';
import { Button } from '../components/Button';
import { ContentBlock } from '../components/ContentHolder/ContentBlock';
import colors from '../styles/colors';

export default {
  title: 'Components/Core/ContentHolder/ContentBlock',
  component: ContentBlock
};

const Template = args => <ContentBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: `Yo soy Brajeam George`,
  subtitle: `And I'm a Photographer`,
  fontColor: colors.gray.medium
};

export const withChildren = Template.bind({});
withChildren.args = {
  title: `Yo soy Brajeam George`,
  subtitle: `And I'm a Photographer`,
  fontColor: colors.gray.medium,
  children: (
    <>
      <Button label='Hire me' />
      <Button label='Galery' />
    </>
  )
};
