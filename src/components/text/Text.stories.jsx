import * as React from 'react';
import Text from './Text';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/Text',
  parameters: {
    component: Text,
  },
};

export const Default = args => <Text {...args} />;

Default.args = {
  children: 'Some text',
};

Default.argTypes = {
  children: 'string',
};

export const Nested = args => <Text {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR.PEACH_DARK,
  children: (
    <>
      This is outer Text{' '}
      <Text inherited type="span">
        [this is nested Text with inherited styles]
      </Text>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
