import * as HeadlineStories from './Headline.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
import Headline, {
  HEADLINE_ALIGN,
  HEADLINE_SIZE,
  HEADLINE_TRANSFORM,
} from './Headline';
import * as React from 'react';

const ResponsivePropsTemplate = args => {
  return (
    <div>
      <h3 className="component__story-name">size prop</h3>
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
      <h3 className="component__story-name">transform prop</h3>
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
      <h3 className="component__story-name">extraBold prop</h3>
      <Headline extraBold={[true, false, null, true]} {...args}>
        Test
      </Headline>
      <h3 className="component__story-name">align prop</h3>
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

export const Default = mergeStories(HeadlineStories);
const {includeStories, ...meta} = HeadlineStories.default;

export default meta;
