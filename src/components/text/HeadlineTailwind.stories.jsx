import * as React from 'react';
import HeadlineTailwind from './HeadlineTailwind';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/HeadlineTailwind',
  component: HeadlineTailwind,
  argTypes: {
    children: 'string',
  },
  args: {
    children: 'some text',
  },
};

export const Default = args => <HeadlineTailwind {...args} />;

export const Nested = args => <HeadlineTailwind {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR['text-red-60'],
  children: (
    <>
      Outer headline{' '}
      <HeadlineTailwind inherited type="span">
        nested Headline with inherited styles
      </HeadlineTailwind>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
