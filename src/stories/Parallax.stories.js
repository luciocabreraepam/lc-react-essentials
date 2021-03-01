import React from 'react';
import { Parallax } from '../components/Parallax';
import { DescriptionBlock } from '../components/ContentHolder/DescriptionBlock';
import { HeaderImpact } from '../components/Header/HeaderImpact';
import { ContentBlock } from '../components/ContentHolder/ContentBlock';
import { Button } from '../components/Button';
import image_3 from './assets/image_3.jpg';
import image_2 from './assets/image_2.jpg';
import colors from '../styles/colors';

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
        scaleHeaderOnHover
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
    opacityBlock: 0.8,
    heightBlock: `50vh`,
    bgImgBlock: `url(${image_2})`,
    children: <HeaderImpact title='BRAJEAM  GEORGE' />,
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
  title: 'Components/Core/Parallax',
  component: Parallax
};

const Template = args => <Parallax {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  parallaxBlocks
};
