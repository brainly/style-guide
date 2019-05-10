import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Flex from '../Flex';
import {
  FLEX_DIRECTION,
  FLEX_DISPLAY,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET
} from '../FlexConsts';

import Text, {TEXT_SIZE} from '../../text/Text';
import Box, {COLOR} from '../../box/Box';
import SeparatorHorizontal, {TYPE} from '../../separators/SeparatorHorizontal';

const Flexus = () => (
  <div>
    <DocsBlock info="Flex column or row">
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
      <Text>To align or justify you can use all the avalaible options:  CENTER, FLEX_START</Text>
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

export default Flexus;
