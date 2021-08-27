import * as React from 'react';
import Search, {SIZE, COLOR} from './Search';

export default {
  title: 'Components/Search',
  parameters: {
    component: Search,
  },
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: COLOR}},
    placeholder: {control: {type: 'text'}},
  },
};

export const Default = args => {
  return <Search {...args} />;
};

Default.args = {
  placeholder: 'Find all the answers...',
};
