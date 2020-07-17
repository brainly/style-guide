import React from 'react';
import Flex, {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  FLEX_MARGINS,
} from '../Flex';

import BoxDeprecated, {COLOR} from '../../box/BoxDeprecated';
import queryString from 'query-string';

import DocsActiveBlock from 'components/DocsActiveBlock';

const urlParams =
  location.hash === '#flexbox' ? queryString.parse(location.search) : {};

const Flexboxes = () => {
  const settings = [
    {
      name: 'fullWidth',
      values: Boolean,
    },
    {
      name: 'fullHeight',
      values: Boolean,
    },
    {
      name: 'noShrink',
      values: Boolean,
    },
    {
      name: 'inlineFlex',
      values: Boolean,
    },
    {
      name: 'wrap',
      values: Boolean,
    },
    {
      name: 'wrapReverse',
      values: Boolean,
    },
    {
      name: 'direction',
      values: FLEX_DIRECTION,
    },
    {
      name: 'justifyContent',
      values: FLEX_JUSTIFY_VALUES,
    },
    {
      name: 'alignItems',
      values: FLEX_ALIGNMENT_VALUES,
    },
    {
      name: 'alignContent',
      values: FLEX_ALIGNMENT_VALUES,
    },
    {
      name: 'alignSelf',
      values: FLEX_ALIGNMENT_VALUES,
    },
    {
      name: 'margin',
      values: FLEX_MARGINS,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Flex {...urlParams}>
          <Flex>
            <BoxDeprecated color={COLOR.BLUE}>This is a box 1.</BoxDeprecated>
          </Flex>
          <Flex>
            <BoxDeprecated color={COLOR.BLUE}>This is a box 2.</BoxDeprecated>
          </Flex>
        </Flex>
      </DocsActiveBlock>
    </div>
  );
};

export default Flexboxes;
