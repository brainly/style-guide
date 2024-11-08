import * as HeadlineStories from './Headline.stories.mdx';
import Headline, {
  HEADLINE_ALIGN,
  HEADLINE_SIZE,
  HEADLINE_TRANSFORM,
} from './Headline';
import * as React from 'react';
import {
  generateChromaticStory,
  responsivePropsStoryLabel,
} from '../../chromatic/utils';

// @ts-ignore TS7006
export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('size', [
          HEADLINE_SIZE.SMALL,
          HEADLINE_SIZE.XXLARGE,
          null,
          HEADLINE_SIZE.XXXLARGE,
        ])}
      </h3>
      <Headline
        size={[
          HEADLINE_SIZE.SMALL,
          HEADLINE_SIZE.XXLARGE,
          null,
          HEADLINE_SIZE.XXXLARGE,
        ]}
        {...args}
      >
        Test
      </Headline>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('transform', [
          HEADLINE_TRANSFORM.UPPERCASE,
          HEADLINE_TRANSFORM.LOWERCASE,
          null,
          HEADLINE_TRANSFORM.CAPITALIZE,
        ])}
      </h3>
      <Headline
        transform={[
          HEADLINE_TRANSFORM.UPPERCASE,
          HEADLINE_TRANSFORM.LOWERCASE,
          null,
          HEADLINE_TRANSFORM.CAPITALIZE,
        ]}
        {...args}
      >
        Test
      </Headline>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('extraBold', [true, false, null, true])}
      </h3>
      <Headline extraBold={[true, false, null, true]} {...args}>
        Test
      </Headline>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('align', [
          HEADLINE_ALIGN.LEFT,
          HEADLINE_ALIGN.RIGHT,
          null,
          HEADLINE_ALIGN.LEFT,
        ])}
      </h3>
      <Headline
        align={[
          HEADLINE_ALIGN.LEFT,
          HEADLINE_ALIGN.RIGHT,
          null,
          HEADLINE_ALIGN.LEFT,
        ]}
        {...args}
      >
        Test
      </Headline>
    </div>
  );
};

ResponsiveProps.parameters = {
  chromatic: {
    viewports: [680, 900, 1100, 1500],
  },
};

const {includeStories, ...meta} = HeadlineStories.default;

export const Default = generateChromaticStory(HeadlineStories);
export default meta;
