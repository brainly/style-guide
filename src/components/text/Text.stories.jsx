import * as React from 'react';
import Text, {TEXT_COLOR} from './Text';

export default {
  title: 'Components/Text',
  component: Text,
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
  color: TEXT_COLOR['text-red-60'],
  children: (
    <>
      Outer Text{' '}
      <Text inherited type="span">
        nested Text with inherited styles
      </Text>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
