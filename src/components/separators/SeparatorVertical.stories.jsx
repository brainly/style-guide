import * as React from 'react';
import SeparatorVertical from './SeparatorVertical';

export default {
  title: 'Components/separators/SeparatorVertical',
  parameters: {
    component: SeparatorVertical,
  },
};

export const Default = args => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      left
      <SeparatorVertical {...args} />
      right
    </div>
  );
};
