import React from 'react';
import styled from 'styled-components';

import image_2 from './assets/image_2.jpg';
import { HeaderImpact } from '../components/Header/HeaderImpact';
import colors from '../styles/colors';

const HeaderWrapper = styled.div`
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  min-height: 100vh;
  background-image: ${`linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),
  url(${image_2})`};
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
`;

export default {
  title: 'Components/Core/Header/HeaderImpact',
  component: HeaderImpact,
  argTypes: {
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
};

const Template = args => (
  <HeaderWrapper>
    <HeaderImpact {...args} />
  </HeaderWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'BRAJEAM  GEORGE'
};

export const NormalBlend = Template.bind({});
NormalBlend.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.gray.light,
  backgroundColor: colors.light
};

export const ScreenBlendLight = Template.bind({});
ScreenBlendLight.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.gray.light,
  backgroundColor: colors.light,
  blendMode: 'screen'
};

export const ScreenBlendLightWithEffects = Template.bind({});
ScreenBlendLightWithEffects.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.gray.light,
  backgroundColor: colors.light,
  scaleOnHover:true,
  applyGlassOnHover:true,
  roundOnHover:true
};

export const ScreenBlendLightScaleOnHover = Template.bind({});
ScreenBlendLightScaleOnHover.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.gray.light,
  backgroundColor: colors.light,
  scaleOnHover:true
};

export const ScreenBlendLightApplyGlassOnHover = Template.bind({});
ScreenBlendLightApplyGlassOnHover.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.gray.light,
  backgroundColor: colors.light,
  applyGlassOnHover:true
};

export const ScreenBlendDark = Template.bind({});
ScreenBlendDark.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.light,
  backgroundColor: colors.gray.dark,
  blendMode: 'screen'
};

export const UnsettedFontColor = Template.bind({});
UnsettedFontColor.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: 'unset',
  backgroundColor: colors.light,
  blendMode: 'screen'
};
export const UnsettedBackgroundColor = Template.bind({});
UnsettedBackgroundColor.args = {
  title: 'BRAJEAM  GEORGE',
  fontColor: colors.light,
  backgroundColor: 'unset',
  blendMode: 'screen'
};
