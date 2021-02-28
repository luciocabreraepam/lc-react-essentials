import React from 'react';
import colors from '../styles/colors';
import { DescriptionBlock } from '../components/ContentHolder/DescriptionBlock';

export default {
  title: 'Components/Core/ContentHolder/DescriptionBlock',
  component: DescriptionBlock
};

const Template = args => <DescriptionBlock {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: `LA FOTOGRAFÍA COMO EXPRESIÓN ARTÍSTICA`,
  description: `La fotografía se convierte en algo personal, se transforma en un arte
                que se muestra con descaro ante los ojos de la gente. Fotografiar es
                una exhibición pública del interior de uno mismo, una pérdida de
                intimidad voluntaria, los deseos, gustos, fantasías, ideas…`,
  fontColor: colors.gray.light,
  backgroundColor: colors.light
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  description: `La fotografía se convierte en algo personal, se transforma en un arte
              que se muestra con descaro ante los ojos de la gente. Fotografiar es
              una exhibición pública del interior de uno mismo, una pérdida de
              intimidad voluntaria, los deseos, gustos, fantasías, ideas…`,
  fontColor: colors.gray.light,
  backgroundColor: colors.light
};
