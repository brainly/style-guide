import * as React from 'react';
import classnames from 'classnames';
import Subheadline from './Subheadline';
import {
  SUBHEADLINE_ALIGN,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
} from './subheadlineConsts';
import {TEXT_COLOR} from './Text';
import {formatTags} from '../../_docs/utils';

export default {
  title: 'Components/Subheadline',
  component: Subheadline,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(SUBHEADLINE_SIZE)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(SUBHEADLINE_SIZE),
      },
    },
    transform: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(SUBHEADLINE_TRANSFORM)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(SUBHEADLINE_TRANSFORM),
      },
    },
    align: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(SUBHEADLINE_ALIGN)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(SUBHEADLINE_ALIGN),
      },
    },
    color: {
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_COLOR)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_COLOR),
      },
    },
  },
};

export const Default = args => <Subheadline {...args} />;

Default.args = {
  children: 'Some text',
};

Default.argTypes = {
  children: 'string',
};

export const Colors = args => (
  <div>
    {Object.values(TEXT_COLOR).map(color => (
      <div
        key={color}
        className={classnames({
          'sg-story-variant-dark-box': color === TEXT_COLOR['text-white'],
        })}
        style={{padding: 10}}
      >
        <Subheadline {...args} color={color}>
          Subheadline
        </Subheadline>
      </div>
    ))}
  </div>
);

export const Sizes = args => (
  <div>
    {Object.values(SUBHEADLINE_SIZE).map(size => (
      <div key={size} style={{padding: 10}}>
        <Subheadline {...args} color={size}>
          Subheadline
        </Subheadline>
      </div>
    ))}
  </div>
);

export const Alignments = args => (
  <div>
    {Object.values(SUBHEADLINE_ALIGN).map(alignment => (
      <div
        key={alignment}
        style={{padding: 10, border: '1px solid lightgray', marginBottom: 10}}
      >
        <Subheadline {...args} align={alignment}>
          Subheadline
        </Subheadline>
      </div>
    ))}
  </div>
);

export const Nested = args => <Subheadline {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR['text-red-60'],
  children: (
    <>
      Outer subheadline{' '}
      <Subheadline inherited type="span">
        nested subheadline with inherited styles
      </Subheadline>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
