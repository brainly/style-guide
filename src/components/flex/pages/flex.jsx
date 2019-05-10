import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Flex from '../Flex';
import {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET
} from '../FlexConsts';

import Text, {TEXT_SIZE} from '../../text/Text';
import Link, {LINK_SIZE} from '../../text/Link';
import Box, {COLOR} from '../../box/Box';
import SeparatorHorizontal, {TYPE} from '../../separators/SeparatorHorizontal';

const Flexbox = () => (
  <div>
    <DocsBlock info="Flex column or row">
      <Flex direction={FLEX_DIRECTION.COLUMN} marginBottom={SPACING_SET.MEDIUM} fullWidth>
        <Text size={TEXT_SIZE.SMALL}>Flex component can be used to apply flexbox behaviors into the layout. Before using these utilities, you should be familiar with <Link size={LINK_SIZE.SMALL} href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">CSS3 Flexible Box spec</Link></Text>
        <Text size={TEXT_SIZE.SMALL}>To justify your elements you can use following options:  CENTER, FLEX_START, FLEX_END, BASELINE, SPACE_BETWEEN, SPACE_AROUND, SPACE_EVENTLY, STRETCH</Text>
        <Text size={TEXT_SIZE.SMALL}>To align your elements you can use following options:  CENTER, FLEX_START, FLEX_END, BASELINE,STRETCH</Text>
        <Text size={TEXT_SIZE.SMALL}>For more information go to our developer documentation on GITHUB (link la la la)</Text>
      </Flex>
      <Flex direction={FLEX_DIRECTION.COLUMN} marginBottom={SPACING_SET.MEDIUM} fullWidth>
        <Flex marginBottom={SPACING_SET.MEDIUM}>
          <Box color={COLOR.BLUE}>I am a flex element with margin bottom M</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>I am a second flex element in the column</Box>
        </Flex>
      </Flex>
      <SeparatorHorizontal type={TYPE.SPACED} />
      <Flex direction={FLEX_DIRECTION.ROW} fullWidth>
        <Flex marginRight={SPACING_SET.MEDIUM}>
          <Box color={COLOR.BLUE}>I am a flex element with margin right M</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>I am a second flex element in the row</Box>
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Flex justify and align">
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={SPACING_SET.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.SPACE_BETWEEN}
        fullWidth
      >
        <Flex>
          <Box color={COLOR.BLUE}>space between</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>space between</Box>
        </Flex>
      </Flex>
      <SeparatorHorizontal type={TYPE.SPACED} />
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={SPACING_SET.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.SPACE_AROUND}
        fullWidth
      >
        <Flex>
          <Box color={COLOR.BLUE}>space around</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>space around</Box>
        </Flex>
      </Flex>
    </DocsBlock>
  </div>
);

export default Flexbox;
