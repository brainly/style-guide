import React from 'react';
import Flex, {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  SPACING_SET
} from '../Flex';
import Text, {TEXT_SIZE} from '../../text/Text';
import Link, {LINK_SIZE} from '../../text/Link';
import Box, {COLOR} from '../../box/Box';
import queryString from 'query-string';

import DocsActiveBlock from 'components/DocsActiveBlock';

const urlParams = location.hash === '#flexbox' ? queryString.parse(location.search) : {};

const Flexboxes = () => {
  const settings = [
    {
      name: 'full width',
      values: Boolean
    },
    {
      name: 'full height',
      values: Boolean
    },
    {
      name: 'no shrink',
      values: Boolean
    },
    {
      name: 'inline flex',
      values: Boolean
    },
    {
      name: 'flex direction',
      values: FLEX_DIRECTION
    },
    {
      name: 'flex justify content',
      values: FLEX_JUSTIFY_VALUES
    },
    {
      name: 'flex align items',
      values: FLEX_ALIGNMENT_VALUES
    },
    {
      name: 'flex margin',
      values: SPACING_SET
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Flex {...urlParams} >
          <Box color={COLOR.BLUE}>This is a box 1.</Box>
          <Box color={COLOR.BLUE}>This is a box 2.</Box>
        </Flex>
      </DocsActiveBlock>
    </div>
  );
};

export default Flexboxes;
