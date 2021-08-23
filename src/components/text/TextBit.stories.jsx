import * as React from 'react';
import TextBit, {TEXT_BIT_COLOR} from './TextBit';

export default {
  title: 'Components/TextBit',
  parameters: {
    component: TextBit,
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
      <TextBit inherited type="span" color={TEXT_BIT_COLOR.LAVENDER_PRIMARY}>
        nested TextBit
      </TextBit>
    </>
  ),
};

Nested.argTypes = {
  children: 'string',
};
