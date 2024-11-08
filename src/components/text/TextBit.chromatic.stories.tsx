import * as TextBitStories from './TextBit.stories.mdx';
import {
  generateChromaticStory,
  responsivePropsStoryLabel,
} from '../../chromatic/utils';
import React from 'react';
import TextBit, {TEXT_BIT_SIZE} from './TextBit';

// @ts-expect-error TS7006
export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('size', [
          TEXT_BIT_SIZE.MEDIUM,
          null,
          TEXT_BIT_SIZE.LARGE,
          TEXT_BIT_SIZE.XLARGE,
        ])}
      </h3>
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

const {includeStories, ...meta} = TextBitStories.default;

export const Default = generateChromaticStory(TextBitStories);
export default meta;
