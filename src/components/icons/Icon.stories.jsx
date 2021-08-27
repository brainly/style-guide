import * as React from 'react';
import Icon, {TYPE, ICON_TAG_TYPE, ICON_COLOR, SIZE} from './Icon';

export default {
  title: 'Components/Icon',
  parameters: {
    component: Icon,
  },
  argTypes: {
    type: {control: {type: 'select', options: TYPE}},
    tagType: {control: {type: 'select', options: ICON_TAG_TYPE}},
    size: {control: {type: 'select', options: SIZE}},
    color: {control: {type: 'select', options: ICON_COLOR}},
    className: {control: {type: 'text'}},
  },
};

export const Default = args => {
  return <Icon {...args} />;
};

Default.args = {
  type: TYPE.ACADEMIC_CAP,
  color: ICON_COLOR.ADAPTIVE,
};
