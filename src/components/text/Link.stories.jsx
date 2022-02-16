import * as React from 'react';
import Link from './Link';
import Text from './Text';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/Link',
  component: Link,
};

export const Default = args => <Link {...args} />;

Default.args = {
  children: 'Some text',
  href: '#',
};

Default.argTypes = {
  children: 'string',
  href: '#',
};

export const Nested = args => (
  <Text type="h2" color={TEXT_COLOR['text-red-60']}>
    Outer text-
    <Link {...args} />
  </Text>
);

Nested.args = {
  inherited: true,
  as: 'button',
  children: 'nested Link with inherited styles',
};

Nested.argTypes = {
  children: 'string',
};
