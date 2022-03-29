import * as React from 'react';
import {formatTags} from '../../_docs/utils';
import Link, {LINK_ALIGN, LINK_SIZE, LINK_TRANSFORM, LINK_WEIGHT} from './Link';
import Text from './Text';
import {TEXT_COLOR} from './textConsts';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    size: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(LINK_SIZE)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(LINK_SIZE),
      },
    },
    weight: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(LINK_WEIGHT)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(LINK_WEIGHT),
      },
    },
    transform: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(LINK_TRANSFORM)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(LINK_TRANSFORM),
      },
    },
    align: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(LINK_ALIGN)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(LINK_ALIGN),
      },
    },
    noWrap: {
      description: '(Responsive)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    breakWords: {
      description: '(Responsive)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
  },
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
