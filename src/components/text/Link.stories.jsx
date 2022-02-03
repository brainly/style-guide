import * as React from 'react';
import Link from './Link';
import {TEXT_COLOR} from './textConsts';
import A11yDoc from './Link.md';

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    a11yDocs: A11yDoc,
  },
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
