import * as SubheadlineStories from './Subheadline.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import Subheadline, {
  SUBHEADLINE_ALIGN,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
} from './Subheadline';
import React from 'react';

export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">size prop</h3>
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
      <h3 className="component__story-name">transform prop</h3>
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
      <h3 className="component__story-name">align prop</h3>
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

export const Default = generateChromaticStory(Subheadline);
const {includeStories, ...meta} = SubheadlineStories.default;

export default meta;
