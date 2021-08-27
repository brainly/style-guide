import * as React from 'react';
import SeparatorHorizontal from './SeparatorHorizontal';

export default {
  title: 'Components/separators/SeparatorHorizontal',
  parameters: {
    component: SeparatorHorizontal,
  },
};

export const Default = args => {
  return (
    <div>
      above
      <SeparatorHorizontal {...args} />
      below
    </div>
  );
};
