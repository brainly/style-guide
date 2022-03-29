import * as React from 'react';
import {formatTags} from '../../_docs/utils';
import TextBit, {TEXT_BIT_SIZE} from './TextBit';

export default {
  title: 'Components/TextBit',
  component: TextBit,
  argTypes: {
    size: {
      description: '(Responsive)',
      table: {
        type: {
          summary: formatTags(Object.values(TEXT_BIT_SIZE)),
        },
      },
      control: {
        type: 'select',
        options: Object.values(TEXT_BIT_SIZE),
      },
    },
  },
};

export const Default = args => <TextBit {...args} />;

Default.args = {
  children: 'Some TextBit',
};

Default.argTypes = {
  children: 'string',
};

export const Nested = args => <TextBit {...args} />;

Nested.args = {
  type: 'h2',
  children: (
    <>
      TextBit{' '}
      <TextBit inherited type="span" color="text-indigo-40">
        nested TextBit
      </TextBit>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
