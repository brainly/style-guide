import * as TextBitStories from './TextBit.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
import React from 'react';
import TextBit, {TEXT_BIT_SIZE} from './TextBit';

const ResponsivePropsTemplate = args => {
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

export const ResponsivePropsSmall = ResponsivePropsTemplate.bind({});

ResponsivePropsSmall.parameters = {
  viewport: {
    defaultViewport: 'sm',
  },
};

export const ResponsivePropsMedium = ResponsivePropsTemplate.bind({});

ResponsivePropsMedium.parameters = {
  viewport: {
    defaultViewport: 'md',
  },
};

export const ResponsivePropsLarge = ResponsivePropsTemplate.bind({});

ResponsivePropsLarge.parameters = {
  viewport: {
    defaultViewport: 'lg',
  },
};

export const ResponsivePropsXLarge = ResponsivePropsTemplate.bind({});

export const Default = mergeStories(TextBitStories);
const {includeStories, ...meta} = TextBitStories.default;

export default meta;
