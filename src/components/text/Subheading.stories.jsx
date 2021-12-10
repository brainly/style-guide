import * as React from 'react';
import classnames from 'classnames';
import Subheading from './Subheading';
import {SUBHEADING_ALIGN, SUBHEADING_SIZE} from './subheadingConsts';
import {TEXT_COLOR} from './Text';

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
        <Subheading {...args} color={color}>
          Subheading
        </Subheading>
      </div>
    ))}
  </div>
);

export const Sizes = args => (
  <div>
    {Object.values(SUBHEADING_SIZE).map(size => (
      <div key={size} style={{padding: 10}}>
        <Subheading {...args} color={size}>
          Subheading
        </Subheading>
      </div>
    ))}
  </div>
);

export const Alignments = args => (
  <div>
    {Object.values(SUBHEADING_ALIGN).map(alignment => (
      <div
        key={alignment}
        style={{padding: 10, border: '1px solid lightgray', marginBottom: 10}}
      >
        <Subheading {...args} align={alignment}>
          Subheading
        </Subheading>
      </div>
    ))}
  </div>
);

export const Nested = args => <Subheading {...args} />;

Nested.args = {
  type: 'h2',
  color: TEXT_COLOR['text-red-60'],
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