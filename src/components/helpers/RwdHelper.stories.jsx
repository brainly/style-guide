import * as React from 'react';
import RwdHelper, {TYPE} from './RwdHelper';

export default {
  title: 'Components/RwdHelper',
  parameters: {
    component: RwdHelper,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = args => {
  return <RwdHelper {...args} />;
};

Default.args = {
  hide: TYPE.MEDIUM_DOWN,
  children: 'This text will show up only for certain screen sizes',
};
