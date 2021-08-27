import * as React from 'react';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
  parameters: {
    component: Layout,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    footer: {
      control: {
        disable: true,
      },
    },
    header: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return <Layout {...args} />;
};

Default.args = {
  children: <div>Content</div>,
  footer: <div>Footer</div>,
  header: <div>Header</div>,
};
