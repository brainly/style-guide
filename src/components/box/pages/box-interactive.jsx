import React from 'react';
import queryString from 'query-string';

import Headline from 'text/Headline';
import Flex from 'flex/Flex';
import Text from 'text/Text';
import Icon from 'icons/Icon';
import DocsActiveBlock from 'components/DocsActiveBlock';

import Box, {COLOR, PADDING} from '../Box';

const urlParams =
  location.hash === '#boxes' ? queryString.parse(location.search) : {};

const Boxes = () => {
  const settings = [
    {
      name: 'color',
      values: COLOR,
    },
    {
      name: 'border',
      values: Boolean,
    },
    {
      name: 'borderColor',
      values: COLOR,
    },
    {
      name: 'shadow',
      values: Boolean,
    },
    {
      name: 'padding',
      values: PADDING,
    },
    {
      name: 'noBorderRadius',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Box color="mint-secondary-light" {...urlParams}>
          <Flex>
            <Flex marginRight="s">
              <Icon type="verified" color="adaptive" />
            </Flex>
            <Flex direction="column">
              <Headline size="small">
                This question is Expert Verified.
              </Headline>
              <Flex marginTop="s">
                <Text size="small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </DocsActiveBlock>
    </div>
  );
};

export default Boxes;
