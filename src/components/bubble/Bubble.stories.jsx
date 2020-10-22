import React from 'react';
import Bubble, {DIRECTION, ALIGNMENT, BUBBLE_COLOR} from './Bubble';

export default {
  title: 'Layout/Bubble',
  parameters: {
    component: Bubble,
  },
};

export const Default = args => {
  const {children} = args;

  return (
    <Bubble {...args}>
      {children || (
        <span>
          Hi there!!
          <br />
          Just wondering if you have any problems with your school work.
        </span>
      )}
    </Bubble>
  );
};

Default.args = {
  direction: DIRECTION.TOP,
  alignment: ALIGNMENT.CENTER,
};

Default.argTypes = {
  direction: {control: {type: 'select', options: DIRECTION}},
  color: {control: {type: 'select', options: BUBBLE_COLOR}},
  alignment: {control: {type: 'select', options: ALIGNMENT}},
  full: {control: 'boolean'},
  noShadow: {control: 'boolean'},
};
