import * as React from 'react';
import * as FlexStories from './Flex.stories.mdx';
import Flex, {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  FLEX_MARGINS,
  FLEX_GAP_VALUES,
} from './Flex';
import Box, {COLOR} from '../box/Box';
import {
  generateChromaticStory,
  responsivePropsStoryLabel,
} from '../../chromatic/utils';

const indigoBoxStyle = {
  border: true,
  borderColor: COLOR['indigo-40'],
  color: COLOR['indigo-20'],
};

export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('direction', [
          FLEX_DIRECTION.COLUMN,
          FLEX_DIRECTION.COLUMN_REVERSE,
          null,
          FLEX_DIRECTION.ROW,
        ])}
      </h3>
      <Flex
        direction={[
          FLEX_DIRECTION.COLUMN,
          FLEX_DIRECTION.COLUMN_REVERSE,
          null,
          FLEX_DIRECTION.ROW,
        ]}
        {...args}
      >
        <Box {...indigoBoxStyle}>Flex child 1</Box>
        <Box {...indigoBoxStyle}>Flex child 2</Box>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('inlineFlex', [true, false, null, true])}
      </h3>
      <div>
        Labore sint do officia labore sit in magna pariatur mollit duis aliquip
        exercitation. Tempor veniam reprehenderit ea nulla in sunt do ea
        nostrud.{' '}
        <Flex inlineFlex={[true, false, null, true]}>
          <Box {...indigoBoxStyle}>Flex child</Box>
        </Flex>
        Officia aute proident laboris nostrud dolor nostrud id aliquip anim
        magna ullamco cupidatat consectetur.
      </div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('justifyContent', [
          FLEX_JUSTIFY_VALUES.FLEX_END,
          FLEX_JUSTIFY_VALUES.FLEX_START,
          null,
          FLEX_JUSTIFY_VALUES.SPACE_BETWEEN,
        ])}
      </h3>
      <Flex
        justifyContent={[
          FLEX_JUSTIFY_VALUES.FLEX_END,
          FLEX_JUSTIFY_VALUES.FLEX_START,
          null,
          FLEX_JUSTIFY_VALUES.SPACE_BETWEEN,
        ]}
        {...args}
      >
        <Box {...indigoBoxStyle} style={{width: 100}}>
          Flex child
        </Box>
        <Box {...indigoBoxStyle} style={{width: 100}}>
          Flex child
        </Box>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('alignItems', [
          FLEX_ALIGNMENT_VALUES.CENTER,
          FLEX_ALIGNMENT_VALUES.FLEX_END,
          null,
          FLEX_ALIGNMENT_VALUES.FLEX_START,
        ])}
      </h3>
      <Flex
        alignItems={[
          FLEX_ALIGNMENT_VALUES.CENTER,
          FLEX_ALIGNMENT_VALUES.FLEX_END,
          null,
          FLEX_ALIGNMENT_VALUES.FLEX_START,
        ]}
        {...args}
      >
        <Box {...indigoBoxStyle} style={{height: 80}}>
          Flex child
        </Box>
        <Box {...indigoBoxStyle} style={{height: 120}}>
          Flex child
        </Box>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('margin', [
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex {...args}>
        <Flex
          margin={[
            FLEX_MARGINS.XSMALL,
            FLEX_MARGINS.XXLARGE,
            null,
            FLEX_MARGINS.XXXXLARGE,
          ]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('marginTop', [
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex direction="column" {...args}>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex
          marginTop={[
            FLEX_MARGINS.XSMALL,
            FLEX_MARGINS.XXLARGE,
            null,
            FLEX_MARGINS.XXXXLARGE,
          ]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('marginLeft', [
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex {...args}>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex
          marginLeft={[
            FLEX_MARGINS.XSMALL,
            FLEX_MARGINS.XXLARGE,
            null,
            FLEX_MARGINS.XXXXLARGE,
          ]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('marginBottom', [
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex direction="column" {...args}>
        <Flex
          marginBottom={[
            FLEX_MARGINS.XSMALL,
            FLEX_MARGINS.XXLARGE,
            null,
            FLEX_MARGINS.XXXXLARGE,
          ]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 2</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('marginRight', [
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex {...args}>
        <Flex
          marginRight={[
            FLEX_MARGINS.XSMALL,
            FLEX_MARGINS.XXLARGE,
            null,
            FLEX_MARGINS.XXXXLARGE,
          ]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 2</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('alignContent', [
          FLEX_ALIGNMENT_VALUES.CENTER,
          FLEX_ALIGNMENT_VALUES.FLEX_END,
          FLEX_ALIGNMENT_VALUES.FLEX_START,
          FLEX_ALIGNMENT_VALUES.STRETCH,
        ])}
      </h3>
      <Box {...indigoBoxStyle} style={{height: 400, width: 400}}>
        <Flex
          alignContent={[
            FLEX_ALIGNMENT_VALUES.CENTER,
            FLEX_ALIGNMENT_VALUES.FLEX_END,
            FLEX_ALIGNMENT_VALUES.FLEX_START,
            FLEX_ALIGNMENT_VALUES.STRETCH,
          ]}
          wrap
          fullHeight
        >
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
        </Flex>
      </Box>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('gap', [
          FLEX_GAP_VALUES.MEDIUM,
          null,
          FLEX_GAP_VALUES.SMALL,
          FLEX_GAP_VALUES.LARGE,
        ])}
      </h3>
      <Box {...indigoBoxStyle} style={{height: 400, width: 400}}>
        <Flex
          gap={[
            FLEX_GAP_VALUES.SMALL,
            null,
            FLEX_GAP_VALUES.MEDIUM,
            FLEX_GAP_VALUES.XLARGE,
          ]}
          wrap
          fullHeight
        >
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
          <Flex>
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

ResponsiveProps.parameters = {
  chromatic: {
    viewports: [680, 900, 1100, 1500],
  },
};

export const Default = generateChromaticStory(FlexStories);
const {includeStories, ...meta} = FlexStories.default;

export default meta;
