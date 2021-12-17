import * as React from 'react';
import Link from './Link';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/Link',
  component: Link,
};

export const Default = args => <Link {...args} />;

Default.args = {
  children: 'Some text',
};

Default.argTypes = {
  children: 'string',
};

export const Nested = args => <Link {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR['text-red-60'],
  children: (
    <>
      Outer Link{' '}
      <Link inherited type="span">
        nested Link with inherited styles
      </Link>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
