import * as React from 'react';
import SubjectIcon, {TYPE, ICON_COLOR} from './SubjectIcon';

export default {
  title: 'Components/SubjectIcon',
  parameters: {
    component: SubjectIcon,
  },
  argTypes: {
    monoColor: {
      control: {
        type: 'select',
        options: ICON_COLOR,
      },
    },
  },
};

export const Default = args => {
  return <SubjectIcon {...args} />;
};

Default.args = {
  type: TYPE.ACCOUNTANCY,
};
