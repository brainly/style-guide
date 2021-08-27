import * as React from 'react';
import {ICON_COLOR} from '../icons/Icon';
import MathSymbol, {MATH_SYMBOL_TYPE} from './MathSymbol';

export default {
  title: 'Components/MathSymbol',
  parameters: {
    component: MathSymbol,
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    color: {
      control: {type: 'select', options: ICON_COLOR},
    },
  },
};

export const Default = args => {
  return <MathSymbol {...args} />;
};

Default.args = {
  type: MATH_SYMBOL_TYPE.ALPHA,
};
