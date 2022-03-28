import * as React from 'react';
import Headline from './Headline';
import {TEXT_COLOR} from './textConsts';
import {
  HEADLINE_ALIGN,
  HEADLINE_SIZE,
  HEADLINE_TRANSFORM,
} from './headlineConsts';

export default {
  title: 'Components/Headline',
  component: Headline,
  argTypes: {
    children: 'string',
    size: {
      description: '(Responsive)',
      table: {
        type: {
          summary: Object.values(HEADLINE_SIZE).join('|'),
        },
      },
      control: {
        type: 'select',
        options: Object.values(HEADLINE_SIZE),
      },
    },
    color: {
      description: '(Responsive)',
      table: {
        type: {
          summary: Object.values(TEXT_COLOR).join('|'),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_COLOR),
      },
    },
    transform: {
      description: '(Responsive)',
      table: {
        type: {
          summary: Object.values(HEADLINE_TRANSFORM).join('|'),
        },
      },
      control: {
        type: 'select',
        options: Object.values(HEADLINE_TRANSFORM),
      },
    },
    align: {
      description: '(Responsive)',
      table: {
        type: {
          summary: Object.values(HEADLINE_ALIGN).join('|'),
        },
      },
      control: {
        type: 'select',
        options: Object.values(HEADLINE_ALIGN),
      },
    },
    extraBold: {
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
