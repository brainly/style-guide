import * as React from 'react';
import * as FlexStories from './Flex.stories.mdx';
import Flex, {
  DIRECTION,
  JUSTIFY_VALUES,
  ALIGNMENT_VALUES,
  MARGINS,
  GAP_VALUES,
  FLEX_VALUES,
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

// @ts-ignore TS7006
export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('direction', [
          DIRECTION.COLUMN,
          DIRECTION.COLUMN_REVERSE,
          null,
          DIRECTION.ROW,
        ])}
      </h3>
      <Flex
        direction={[
          DIRECTION.COLUMN,
          DIRECTION.COLUMN_REVERSE,
          null,
          DIRECTION.ROW,
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
          JUSTIFY_VALUES.END,
          JUSTIFY_VALUES.START,
          null,
          JUSTIFY_VALUES.SPACE_BETWEEN,
        ])}
      </h3>
      <Flex
        justifyContent={[
          JUSTIFY_VALUES.END,
          JUSTIFY_VALUES.START,
          null,
          JUSTIFY_VALUES.SPACE_BETWEEN,
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
          ALIGNMENT_VALUES.CENTER,
          ALIGNMENT_VALUES.END,
          null,
          ALIGNMENT_VALUES.START,
        ])}
      </h3>
      <Flex
        alignItems={[
          ALIGNMENT_VALUES.CENTER,
          ALIGNMENT_VALUES.END,
          null,
          ALIGNMENT_VALUES.START,
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
          MARGINS.XSMALL,
          MARGINS.XXLARGE,
          null,
          MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex {...args}>
        <Flex
          margin={[MARGINS.XSMALL, MARGINS.XXLARGE, null, MARGINS.XXXXLARGE]}
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
          MARGINS.XSMALL,
          MARGINS.XXLARGE,
          null,
          MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex direction="column" {...args}>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex
          marginTop={[MARGINS.XSMALL, MARGINS.XXLARGE, null, MARGINS.XXXXLARGE]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('marginLeft', [
          MARGINS.XSMALL,
          MARGINS.XXLARGE,
          null,
          MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex {...args}>
        <Flex {...args}>
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
        <Flex
          marginLeft={[
            MARGINS.XSMALL,
            MARGINS.XXLARGE,
            null,
            MARGINS.XXXXLARGE,
          ]}
          {...args}
        >
          <Box {...indigoBoxStyle}>Flex child 1</Box>
        </Flex>
      </Flex>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('marginBottom', [
          MARGINS.XSMALL,
          MARGINS.XXLARGE,
          null,
          MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex direction="column" {...args}>
        <Flex
          marginBottom={[
            MARGINS.XSMALL,
            MARGINS.XXLARGE,
            null,
            MARGINS.XXXXLARGE,
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
          MARGINS.XSMALL,
          MARGINS.XXLARGE,
          null,
          MARGINS.XXXXLARGE,
        ])}
      </h3>
      <Flex {...args}>
        <Flex
          marginRight={[
            MARGINS.XSMALL,
            MARGINS.XXLARGE,
            null,
            MARGINS.XXXXLARGE,
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
          ALIGNMENT_VALUES.CENTER,
          ALIGNMENT_VALUES.END,
          ALIGNMENT_VALUES.START,
          ALIGNMENT_VALUES.STRETCH,
        ])}
      </h3>
      <Box {...indigoBoxStyle} style={{height: 400, width: 400}}>
        <Flex
          alignContent={[
            ALIGNMENT_VALUES.CENTER,
            ALIGNMENT_VALUES.END,
            ALIGNMENT_VALUES.START,
            ALIGNMENT_VALUES.STRETCH,
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
          GAP_VALUES.SMALL,
          null,
          GAP_VALUES.MEDIUM,
          GAP_VALUES.XLARGE,
        ])}
      </h3>
      <Box {...indigoBoxStyle} style={{height: 400, width: 400}}>
        <Flex
          gap={[GAP_VALUES.SMALL, null, GAP_VALUES.MEDIUM, GAP_VALUES.XLARGE]}
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
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('FLEX', [
          FLEX_VALUES.INITIAL,
          null,
          FLEX_VALUES.AUTO,
          FLEX_VALUES['10'],
        ])}
      </h3>
      <Box {...indigoBoxStyle} style={{height: 400, width: 400}}>
        <Flex wrap fullHeight>
          <Flex
            flex={[
              FLEX_VALUES.INITIAL,
              FLEX_VALUES['10'],
              null,
              FLEX_VALUES.AUTO,
            ]}
          >
            <Box {...indigoBoxStyle}>Flex child</Box>
          </Flex>
          <Flex
            flex={[
              FLEX_VALUES.INITIAL,
              FLEX_VALUES['2'],
              null,
              FLEX_VALUES.AUTO,
            ]}
          >
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
