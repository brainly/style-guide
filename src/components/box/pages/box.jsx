import React from 'react';

import DocsBlock from 'components/DocsBlock';
import Text from 'text/Text';
import Headline from 'text/Headline';
import Flex from 'flex/Flex';
import Icon from 'icons/Icon';

import Box, {COLOR, PADDING} from '../Box';

const Boxes = () => (
  <div>
    <DocsBlock info="Default">
      <Box>
        <Text size="small">
          By default there is no border, 24px padding and no background color
        </Text>
      </Box>
    </DocsBlock>

    <DocsBlock info="With border">
      <Box border>
        <Text size="small">Box with default border</Text>
      </Box>
    </DocsBlock>

    <DocsBlock info="With shadow">
      <Box shadow>
        <Text size="small">Box with shadow</Text>
      </Box>
    </DocsBlock>

    <DocsBlock info="Border colors">
      <Flex wrap>
        {Object.values(COLOR).map(color => (
          <Flex key={color} marginRight="s" marginBottom="s">
            <Box border borderColor={color} padding="xs">
              <Text size="small">{color}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </DocsBlock>

    <DocsBlock info="Background colors">
      <Flex wrap>
        {Object.values(COLOR).map(color => (
          <Flex key={color} marginRight="s" marginBottom="s">
            <Box color={color} padding="xs">
              <Text size="small">{color}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </DocsBlock>

    <DocsBlock info="Padding">
      <Flex wrap alignItems="flex-end">
        {Object.values(PADDING)
          .reverse()
          .map(padding => (
            <Flex key={padding} marginRight="s" marginBottom="s">
              <Box color="peach-secondary-light" padding={padding}>
                <Text size="small">Padding {padding}</Text>
              </Box>
            </Flex>
          ))}

        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding={null}>
            <Text size="small">No padding</Text>
          </Box>
        </Flex>
      </Flex>
    </DocsBlock>

    <DocsBlock info="No border radius">
      <Flex wrap>
        <Flex marginRight="s" marginBottom="s">
          <Box color="blue-secondary-light" noBorderRadius>
            <Text size="small">No border radius</Text>
          </Box>
        </Flex>
      </Flex>
    </DocsBlock>

    <DocsBlock info="Example usage">
      <Box color="mint-secondary-light">
        <Flex>
          <Flex marginRight="s">
            <Icon type="verified" color="adaptive" />
          </Flex>
          <Flex direction="column">
            <Headline size="small">This question is Expert Verified.</Headline>
            <Flex marginTop="s">
              <Text size="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </DocsBlock>
  </div>
);

export default Boxes;
