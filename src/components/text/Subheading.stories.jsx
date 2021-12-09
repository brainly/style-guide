import * as React from 'react';
import Subheading from './Subheading';
import {SUBHEADING_COLOR} from './subheadingConsts';

export default {
  title: 'Components/Subheading',
  parameters: {
    component: Subheading,
  },
};

export const Default = args => <Subheading {...args} />;

Default.args = {
  children: 'Some text',
};

Default.argTypes = {
  children: 'string',
};

export const Nested = args => <Subheading {...args} />;

Nested.args = {
  type: 'h2',
  color: SUBHEADING_COLOR.PEACH_DARK,
  children: (
    <>
      Outer subheading{' '}
      <Subheading inherited type="span">
        nested subheading with inherited styles
      </Subheading>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
