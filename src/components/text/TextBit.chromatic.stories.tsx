import * as TextBitStories from './TextBit.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
import React from 'react';
import TextBit, {TEXT_BIT_SIZE} from './TextBit';

export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">size prop</h3>
      <TextBit
        size={[
          TEXT_BIT_SIZE.MEDIUM,
          null,
          TEXT_BIT_SIZE.LARGE,
          TEXT_BIT_SIZE.XLARGE,
        ]}
        {...args}
      >
        Test
      </TextBit>
    </div>
  );
};

ResponsiveProps.parameters = {
  chromatic: {
    viewports: [680, 900, 1100, 1500],
  },
};

export const Default = mergeStories(TextBitStories);
const {includeStories, ...meta} = TextBitStories.default;

export default meta;
