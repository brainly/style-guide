import * as React from 'react';
import Headline from './Headline';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/Headline',
  parameters: {
    component: Headline,
  },
};

export const Default = args => <Headline {...args} />;

Default.args = {
  children: 'Some text',
};

Default.argTypes = {
  children: 'string',
};

export const Nested = args => <Headline {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR.PEACH_DARK,
  children: (
    <>
      This is outer Headline{' '}
      <Headline inherited type="span">
        [this is nested Headline with inherited styles]
      </Headline>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
