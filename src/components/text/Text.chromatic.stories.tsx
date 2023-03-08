import * as TextStories from './Text.stories.mdx';
import {mergeStories} from '../../chromatic/utils';
import React from 'react';
import Text, {TEXT_ALIGN, TEXT_SIZE, TEXT_TRANSFORM, TEXT_WEIGHT} from './Text';
import hex from '../colors/hex';
import Flex from '../flex/Flex';

const ResponsivePropsTemplate = args => {
  return (
    <div>
      <h3 className="component__story-name">size prop</h3>
      <Text
        size={[TEXT_SIZE.SMALL, TEXT_SIZE.XXLARGE, null, TEXT_SIZE.XXXLARGE]}
        {...args}
      >
        Test
      </Text>
      <h3 className="component__story-name">weight prop</h3>
      <Text weight={[TEXT_WEIGHT.BOLD, null, TEXT_WEIGHT.REGULAR]} {...args}>
        Test
      </Text>
      <h3 className="component__story-name">transform prop</h3>
      <Text
        transform={[TEXT_TRANSFORM.UPPERCASE, null, TEXT_TRANSFORM.LOWERCASE]}
        {...args}
      >
        Test
      </Text>
      <h3 className="component__story-name">align prop</h3>
      <div style={{width: 400}}>
        <Text
          align={[
            TEXT_ALIGN.JUSTIFY,
            null,
            TEXT_ALIGN.CENTER,
            TEXT_ALIGN.RIGHT,
          ]}
          {...args}
        >
          Aliquip sit pariatur laboris in aliqua. Enim esse eu est nisi eiusmod
          minim deserunt ut cupidatat dolore velit deserunt nisi. Enim in anim
          aute non.
        </Text>
      </div>
      <h3 className="component__story-name">full prop</h3>
      <Flex fullWidth>
        <Text
          full={[true, null, false]}
          {...args}
          style={{backgroundColor: hex['gray-40']}}
        >
          Aliquip sit pariatur laboris in aliqua.
        </Text>
      </Flex>
      <h3 className="component__story-name">noWrap prop</h3>
      <div style={{border: '1px solid gray', width: '400px'}}>
        <Text {...args} noWrap={[true, false, null, true]}>
          Aliquip sit pariatur laboris in aliqua. Enim esse eu est nisi eiusmod.
        </Text>
      </div>
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

export const Default = mergeStories(TextStories);
const {includeStories, ...meta} = TextStories.default;

export default meta;
