import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Flex, {FLEX_DIRECTION, FLEX_JUSTIFY_VALUES, FLEX_MARGINS} from '../Flex';

import Text, {TEXT_SIZE} from '../../text/Text';
import Link, {LINK_SIZE} from '../../text/Link';
import Box, {COLOR} from '../../box/Box';
import SeparatorHorizontal, {TYPE} from '../../separators/SeparatorHorizontal';

const Flexbox = () => (
  <div>
    <DocsBlock info="Spacing utility">
      <Flex
        direction={FLEX_DIRECTION.COLUMN}
        marginBottom={FLEX_MARGINS.MEDIUM}
        fullWidth
      >
        <Text size={TEXT_SIZE.SMALL}>
          Use multiples of 8 to define dimensions, padding, and margin of both
          block and inline elements. We add one exeption to the scale which is
          4px - this is value added to create small padding and margins for
          little components or denser parts of the site. Presented basic setup
          of spacings is used to create other utilities, like margins, paddings
          or icons sizes.
        </Text>
      </Flex>
      <Flex direction={FLEX_DIRECTION.ROW} wrap>
        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>xxs - 4px</Text>
          <div className="doc-spacing doc-spacing--xxs" />
        </Flex>
        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>xs - 8px</Text>
          <div className="doc-spacing doc-spacing--s" />
        </Flex>
        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>s - 16px</Text>
          <div className="doc-spacing doc-spacing--m" />
        </Flex>
        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>m - 24px</Text>
          <div className="doc-spacing doc-spacing--m" />
        </Flex>

        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>l - 40px</Text>
          <div className="doc-spacing doc-spacing--l" />
        </Flex>

        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>xl - 64px</Text>
          <div className="doc-spacing doc-spacing--xl" />
        </Flex>

        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>xxl - 104px</Text>
          <div className="doc-spacing doc-spacing--xxl" />
        </Flex>

        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>xxxl - 168px</Text>
          <div className="doc-spacing doc-spacing--xxxl" />
        </Flex>

        <Flex direction={FLEX_DIRECTION.COLUMN}>
          <Text size={TEXT_SIZE.SMALL}>xxxxl - 272px</Text>
          <div className="doc-spacing doc-spacing--xxxxl" />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Flexbox introduction">
      <Flex
        direction={FLEX_DIRECTION.COLUMN}
        marginBottom={FLEX_MARGINS.MEDIUM}
        fullWidth
      >
        {/* eslint-disable max-len */}
        <Text size={TEXT_SIZE.SMALL}>
          Flex component can be used to apply flexbox behaviors into the layout.
          Before using these utilities, you should be familiar with{' '}
          <Link
            size={LINK_SIZE.SMALL}
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
          >
            CSS3 Flexible Box spec
          </Link>
        </Text>
        <Text size={TEXT_SIZE.SMALL}>
          To justify your elements you can use following options: CENTER,
          FLEX_START, FLEX_END, BASELINE, SPACE_BETWEEN, SPACE_AROUND,
          SPACE_EVENLY, STRETCH
        </Text>
        <Text size={TEXT_SIZE.SMALL}>
          To align your elements you can use following options: CENTER,
          FLEX_START, FLEX_END, BASELINE,STRETCH
        </Text>
        <Text size={TEXT_SIZE.SMALL}>
          There are avalaible options of margin, marginTop, marginRight,
          marginBottom, marginLeft with all the presented spacing values.
        </Text>
      </Flex>
      {/* eslint-enable max-len */}
      <SeparatorHorizontal type={TYPE.SPACED} />
    </DocsBlock>
    <DocsBlock info="Examples of flex column or row">
      <Flex
        direction={FLEX_DIRECTION.COLUMN}
        marginBottom={FLEX_MARGINS.MEDIUM}
        fullWidth
      >
        <Flex marginBottom={FLEX_MARGINS.MEDIUM}>
          <Box color={COLOR.BLUE}>I am a flex element with margin bottom M</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>
            I am a second flex element in the column
          </Box>
        </Flex>
      </Flex>
      <Flex direction={FLEX_DIRECTION.ROW} fullWidth>
        <Flex marginRight={FLEX_MARGINS.MEDIUM}>
          <Box color={COLOR.BLUE}>I am a flex element with margin right M</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>
            I am a second flex element in the row
          </Box>
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Examples of flex justify and align">
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
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
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
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
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.FLEX_START}
        fullWidth
      >
        <Flex marginRight={FLEX_MARGINS.MEDIUM}>
          <Box color={COLOR.BLUE}>flex start</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>flex start</Box>
        </Flex>
      </Flex>
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.FLEX_END}
        fullWidth
      >
        <Flex marginRight={FLEX_MARGINS.MEDIUM}>
          <Box color={COLOR.BLUE}>flex end</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.BLUE_SECONDARY}>flex end</Box>
        </Flex>
      </Flex>
    </DocsBlock>
  </div>
);

export default Flexbox;
