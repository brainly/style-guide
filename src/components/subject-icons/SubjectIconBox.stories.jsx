import * as React from 'react';
import SubjectIconBox, {TYPE, SIZE} from './SubjectIconBox';

export default {
  title: 'Components/SubjectIconBox',
  parameters: {
    component: SubjectIconBox,
  },
  argTypes: {
    type: {
      control: {type: 'select', options: TYPE},
    },
    size: {
      control: {type: 'select', options: SIZE},
    },
  },
};

export const Default = args => {
  return <SubjectIconBox {...args} />;
};

Default.args = {
  type: TYPE.ACCOUNTANCY,
};
