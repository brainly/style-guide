import * as SubheadlineStories from './Subheadline.stories.mdx';
import {
  generateChromaticStory,
  responsivePropsStoryLabel,
} from '../../chromatic/utils';
import Subheadline, {
  SUBHEADLINE_ALIGN,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
} from './Subheadline';
import React from 'react';

// @ts-expect-error TS7006
export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('size', [
          SUBHEADLINE_SIZE.SMALL,
          SUBHEADLINE_SIZE.XXLARGE,
          null,
          SUBHEADLINE_SIZE.XXXLARGE,
        ])}
      </h3>
      <Subheadline
        size={[
          SUBHEADLINE_SIZE.SMALL,
          SUBHEADLINE_SIZE.XXLARGE,
          null,
          SUBHEADLINE_SIZE.XXXLARGE,
        ]}
        {...args}
      >
        Test
      </Subheadline>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('transform', [
          SUBHEADLINE_TRANSFORM.UPPERCASE,
          SUBHEADLINE_TRANSFORM.LOWERCASE,
          null,
          SUBHEADLINE_TRANSFORM.CAPITALIZE,
        ])}
      </h3>
      <Subheadline
        transform={[
          SUBHEADLINE_TRANSFORM.UPPERCASE,
          SUBHEADLINE_TRANSFORM.LOWERCASE,
          null,
          SUBHEADLINE_TRANSFORM.CAPITALIZE,
        ]}
        {...args}
      >
        Test
      </Subheadline>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('align', [
          SUBHEADLINE_ALIGN.LEFT,
          SUBHEADLINE_ALIGN.RIGHT,
          null,
          SUBHEADLINE_ALIGN.LEFT,
        ])}
      </h3>
      <Subheadline
        align={[
          SUBHEADLINE_ALIGN.LEFT,
          SUBHEADLINE_ALIGN.RIGHT,
          null,
          SUBHEADLINE_ALIGN.LEFT,
        ]}
        {...args}
      >
        Test
      </Subheadline>
    </div>
  );
};

ResponsiveProps.parameters = {
  chromatic: {
    viewports: [680, 900, 1100, 1500],
  },
};

export const Default = generateChromaticStory(SubheadlineStories);
const {includeStories, ...meta} = SubheadlineStories.default;

export default meta;
