import * as React from 'react';
import MobileIcon, {TYPE, ICON_COLOR} from './MobileIcon';

export default {
  title: 'Components/MobileIcon',
  parameters: {
    component: MobileIcon,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ICON_COLOR,
      },
    },
  },
};

export const Default = args => {
  return <MobileIcon {...args} />;
};

Default.args = {
  type: TYPE.ANSWER_BUBBLE,
  color: ICON_COLOR.ADAPTIVE,
};
