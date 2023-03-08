import * as React from 'react';
import * as BoxStories from './Box.stories.mdx';
import Box, {COLOR} from './Box';
import {mergeStories} from '../../chromatic/utils';

const ResponsivePropsTemplate = args => {
  return (
    <div>
      <h3 className="component__story-name">shadow prop</h3>
      <Box shadow={[true, false, null, true]} {...args}>
        box
      </Box>
      <h3 className="component__story-name">noBorderRadius prop</h3>
      <Box noBorderRadius={[false, true, null, false]} {...args}>
        box
      </Box>
      <h3 className="component__story-name">border prop</h3>
      <Box
        border={[false, true, null, false]}
        {...args}
        borderColor={COLOR['indigo-40']}
      >
        box
      </Box>
      <h3 className="component__story-name">padding prop</h3>
      <Box padding={['xs', null, 'm', 'xl']} {...args}>
        box
      </Box>
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

export const Default = mergeStories(BoxStories);
const {includeStories, ...meta} = BoxStories.default;

export default meta;
