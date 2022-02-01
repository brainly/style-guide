import * as React from 'react';
import Headline from './Headline';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/Headline',
  component: Headline,
  argTypes: {
    children: 'string',
  },
  args: {
    children: 'some text',
  },
};

export const Default = args => <Headline {...args} />;

export const Nested = args => <Headline {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR['text-red-60'],
  children: (
    <>
      Outer headline{' '}
      <Headline inherited type="span">
        nested Headline with inherited styles
      </Headline>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
