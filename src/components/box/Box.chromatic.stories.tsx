import * as React from 'react';
import * as BoxStories from './Box.stories.mdx';
import Box, {COLOR} from './Box';
import {generateChromaticStory} from '../../chromatic/utils';

export const ResponsiveProps = args => {
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

ResponsiveProps.parameters = {
  chromatic: {
    viewports: [680, 900, 1100, 1500],
  },
};

export const Default = generateChromaticStory(BoxStories);
const {includeStories, ...meta} = BoxStories.default;

export default meta;
