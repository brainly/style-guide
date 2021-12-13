import * as React from 'react';
import classnames from 'classnames';
import Subheadline from './Subheadline';
import {SUBHEADLINE_ALIGN, SUBHEADLINE_SIZE} from './subheadlineConsts';
import {TEXT_COLOR} from './Text';

export default {
  title: 'Components/Subheadline',
  parameters: {
    component: Subheadline,
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
