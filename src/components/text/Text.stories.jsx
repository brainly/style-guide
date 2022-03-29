import * as React from 'react';
import {formatTags} from '../../_docs/utils';
import Text, {TEXT_COLOR, TEXT_SIZE} from './Text';
import {
  TEXT_ALIGN,
  TEXT_TRANSFORM,
  TEXT_WEIGHT,
  TEXT_WHITE_SPACE,
} from './textConsts';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_SIZE)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_SIZE),
      },
    },
    weight: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_WEIGHT)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_WEIGHT),
      },
    },
    transform: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_TRANSFORM)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_TRANSFORM),
      },
    },
    align: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_ALIGN)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_ALIGN),
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
    full: {
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
    whiteSpace: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_WHITE_SPACE)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_WHITE_SPACE),
      },
    },
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
