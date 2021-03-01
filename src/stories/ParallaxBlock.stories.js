import React from 'react';
import { ParallaxBlock } from '../components/ParallaxBlock';
import { DescriptionBlock } from '../components/ContentHolder/DescriptionBlock';
import { ContentBlock } from '../components/ContentHolder/ContentBlock';
import image_3 from './assets/image_3.jpg';
import colors from '../styles/colors';
import { Button } from '../components/Button';

const parallaxBlocks = [
  {
    bgImgBlock: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${image_3})`,
    children: (
      <ContentBlock
        title='Yo soy Brajeam George'
        subtitle={`And I'm a Photographer`}
      >
        <>
          <Button label='Hire me' />
          <Button label='Galery' />
        </>
      </ContentBlock>
    ),
    footer: (
      <DescriptionBlock
        title='LA FOTOGRAFÍA COMO EXPRESIÓN ARTÍSTICA'
        description='La fotografía se convierte en algo personal, se transforma en un arte
                      que se muestra con descaro ante los ojos de la gente. Fotografiar es
                      una exhibición pública del interior de uno mismo, una pérdida de
                      intimidad voluntaria, los deseos, gustos, fantasías, ideas…'
        fontColor={colors.gray.light}
        backgroundColor={colors.light}
      />
    )
  },
  {
    showAnimation: true,
    bgImgBlock: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${image_3})`,
    children: (
      <ContentBlock
        title='Yo soy Brajeam George'
        subtitle={`And I'm a Photographer`}
      >
        <>
          <Button label='Hire me' />
          <Button label='Galery' />
        </>
      </ContentBlock>
    ),
    footer: (
      <DescriptionBlock
        title='LA FOTOGRAFÍA COMO EXPRESIÓN ARTÍSTICA'
        description='La fotografía se convierte en algo personal, se transforma en un arte
                      que se muestra con descaro ante los ojos de la gente. Fotografiar es
                      una exhibición pública del interior de uno mismo, una pérdida de
                      intimidad voluntaria, los deseos, gustos, fantasías, ideas…'
        fontColor={colors.gray.light}
        backgroundColor={colors.light}
      />
    )
  }
];

export default {
  title: 'Components/Core/ParallaxBlock',
  component: ParallaxBlock
};

const Template = args => <ParallaxBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...parallaxBlocks[0]
};

export const Animated = Template.bind({});
Animated.args = {
  ...parallaxBlocks[1]
};
