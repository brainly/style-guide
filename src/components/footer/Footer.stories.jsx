import * as React from 'react';
import Footer from './Footer';
import FooterLine from './FooterLine';

export default {
  title: 'Components/Footer',
  parameters: {
    component: Footer,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: [
      <FooterLine key="1">line</FooterLine>,
      <FooterLine key="2">line</FooterLine>,
      <FooterLine key="3">line</FooterLine>,
    ],
  },
};

export const Default = args => <Footer {...args} />;
