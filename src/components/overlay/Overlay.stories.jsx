import * as React from 'react';
import Overlay, {COLOR} from './Overlay';

export default {
  title: 'Components/Overlay',
  parameters: {
    component: Overlay,
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export const Default = args => {
  return (
    <div>
      Mollit commodo eu sit aute cillum do nostrud elit ex excepteur. Eu minim
      dolore quis laborum labore. Eu eiusmod aute tempor dolor incididunt.
      <Overlay
        style={{
          position: 'absolute',
        }}
        {...args}
      />
    </div>
  );
};

Default.args = {};
