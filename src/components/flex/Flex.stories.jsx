import * as React from 'react';
import Flex, {FLEX_DIRECTION, FLEX_MARGINS, FLEX_JUSTIFY_VALUES} from './Flex';
import Text, {TEXT_SIZE} from '../text/Text';
import Box, {COLOR} from '../box/Box';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    htmlTag: {
      defaultValue: 'div',
      table: {
        defaultValue: {summary: 'div'},
      },
    },
  },
};

export const Default = args => {
  return <Flex {...args} />;
};

Default.args = {
  children: [
    <div key="1">This is a element 1.</div>,
    <div key="2">This is a element 2.</div>,
  ],
};

export const Spacing = () => (
  <Flex direction={FLEX_DIRECTION.ROW} wrap>
    <Flex direction={FLEX_DIRECTION.COLUMN}>
      <Text size={TEXT_SIZE.SMALL}>xxs - 4px</Text>
      <div className="doc-spacing doc-spacing--xxs" />
    </Flex>
    <Flex direction={FLEX_DIRECTION.COLUMN}>
      <Text size={TEXT_SIZE.SMALL}>xs - 8px</Text>
      <div className="doc-spacing doc-spacing--xs" />
    </Flex>
    <Flex direction={FLEX_DIRECTION.COLUMN}>
      <Text size={TEXT_SIZE.SMALL}>s - 16px</Text>
      <div className="doc-spacing doc-spacing--s" />
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
);

export const Column = () => (
  <Flex
    direction={FLEX_DIRECTION.COLUMN}
    marginBottom={FLEX_MARGINS.MEDIUM}
    fullWidth
  >
    <Flex marginBottom={FLEX_MARGINS.MEDIUM}>
      <Box color={COLOR.blue}>I am a flex element with margin bottom M</Box>
    </Flex>
    <Flex>
      <Box color={COLOR.blueSecondary}>
        I am a second flex element in the column
      </Box>
    </Flex>
  </Flex>
);

export const Row = () => (
  <Flex direction={FLEX_DIRECTION.ROW} fullWidth>
    <Flex marginRight={FLEX_MARGINS.MEDIUM}>
      <Box color={COLOR.blue}>I am a flex element with margin right M</Box>
    </Flex>
    <Flex>
      <Box color={COLOR.blueSecondary}>
        I am a second flex element in the row
      </Box>
    </Flex>
  </Flex>
);

export const JustifyAndAlign = () => (
  <div>
    Container
    <div
      style={{
        width: '600px',
        border: '1px solid rgba(0,0,0,.1)',
      }}
    >
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.SPACE_BETWEEN}
        fullWidth
      >
        <Flex>
          <Box color={COLOR.blue}>space between</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.blueSecondary}>space between</Box>
        </Flex>
      </Flex>
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.SPACE_AROUND}
        fullWidth
      >
        <Flex>
          <Box color={COLOR.blue}>space around</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.blueSecondary}>space around</Box>
        </Flex>
      </Flex>
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.FLEX_START}
        fullWidth
      >
        <Flex marginRight={FLEX_MARGINS.MEDIUM}>
          <Box color={COLOR.blue}>flex start</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.blueSecondary}>flex start</Box>
        </Flex>
      </Flex>
      <Flex
        direction={FLEX_DIRECTION.ROW}
        marginBottom={FLEX_MARGINS.MEDIUM}
        justifyContent={FLEX_JUSTIFY_VALUES.FLEX_END}
        fullWidth
      >
        <Flex marginRight={FLEX_MARGINS.MEDIUM}>
          <Box color={COLOR.blue}>flex end</Box>
        </Flex>
        <Flex>
          <Box color={COLOR.blueSecondary}>flex end</Box>
        </Flex>
      </Flex>
    </div>
  </div>
);
