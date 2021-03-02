import React from 'react';
import { Parallax } from '../components/Parallax';
import { NavBar } from '../components/NavBar';
import { DescriptionBlock } from '../components/ContentHolder/DescriptionBlock';
import { HeaderImpact } from '../components/Header/HeaderImpact';
import { ContentBlock } from '../components/ContentHolder/ContentBlock';
import { Button } from '../components/Button';
import image_3 from './assets/image_3.jpg';
import image_2 from './assets/image_2.jpg';
import image_1 from './assets/image_1.jpg';
import infoImage from './assets/info.svg';
import colors from '../styles/colors';

const routes = [
  { text: 'Home', path: '#home', exact: true, icon: infoImage },
  { text: 'About', path: '#about', exact: true, icon: infoImage },
  { text: 'Contact', path: '#contact', exact: true, icon: infoImage }
];

const parallaxBlocks = [
  {
    idBlock: 'home',
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
    idBlock: 'about',
    opacityBlock: 0.8,
    heightBlock: `80vh`,
    bgImgBlock: `url(${image_2})`,
    children: <HeaderImpact title='ABOUT' />,
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
    idBlock: 'contact',
    opacityBlock: 0.8,
    heightBlock: `80vh`,
    bgImgBlock: `url(${image_1})`,
    children: <HeaderImpact title='CONTACT US' />,
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

const Template = args =>
  args.routes ? (
    <>
      <NavBar routes={args.routes} />
      <Parallax parallaxBlocks={args.parallaxBlocks} />
    </>
  ) : (
    <Parallax {...args} />
  );

export const Basic = Template.bind({});
Basic.args = {
  parallaxBlocks: parallaxBlocks
};

export const WithNavBar = Template.bind({});
WithNavBar.args = {
  parallaxBlocks: parallaxBlocks,
  routes: routes
};
