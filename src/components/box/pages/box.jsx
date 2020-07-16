import React from 'react';

import DocsBlock from 'components/DocsBlock';

import Box from '../Box';
import Text from 'text/Text';
import Flex from 'flex/Flex';
import Icon from 'icons/Icon';
import Headline from '../../text/Headline';

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
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="gray-secondary-lightest" padding="xs">
            <Text size="small">Gray secondary lightest (default)</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="gray-secondary-ultra-light" padding="xs">
            <Text size="small">Gray secondary ultra light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="dark" padding="xs">
            <Text size="small">Dark</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="blue" padding="xs">
            <Text size="small">Blue</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="blue-secondary" padding="xs">
            <Text size="small">Blue secondary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="blue-secondary-light" padding="xs">
            <Text size="small">Blue secondary light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="lavender" padding="xs">
            <Text size="small">Lavender</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="mint" padding="xs">
            <Text size="small">Mint</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="mint-secondary" padding="xs">
            <Text size="small">Mint secondary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="mint-secondary-light" padding="xs">
            <Text size="small">Mint secondary light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="mint-secondary-ultra-light" padding="xs">
            <Text size="small">Mint secondary ultra light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="mustard-primary" padding="xs">
            <Text size="small">Mustard primary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="peach" padding="xs">
            <Text size="small">Peach</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="peach-secondary" padding="xs">
            <Text size="small">Peach secondary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box border borderColor="peach-secondary-light" padding="xs">
            <Text size="small">Peach secondary light</Text>
          </Box>
        </Flex>
      </Flex>
    </DocsBlock>

    <DocsBlock info="Background colors">
      <Flex wrap>
        <Flex marginRight="s" marginBottom="s">
          <Box color="gray-secondary-lightest" padding="xs">
            <Text size="small">Gray secondary lightest</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="gray-secondary-ultra-light" padding="xs">
            <Text size="small">Gray secondary ultra light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="dark" padding="xs">
            <Text size="small">Dark</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="blue" padding="xs">
            <Text size="small">Blue</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="blue-secondary" padding="xs">
            <Text size="small">Blue secondary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="blue-secondary-light" padding="xs">
            <Text size="small">Blue secondary light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="lavender" padding="xs">
            <Text size="small">Lavender</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="mint" padding="xs">
            <Text size="small">Mint</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="mint-secondary" padding="xs">
            <Text size="small">Mint secondary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="mint-secondary-light" padding="xs">
            <Text size="small">Mint secondary light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="mint-secondary-ultra-light" padding="xs">
            <Text size="small">Mint secondary ultra light</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="mustard-primary" padding="xs">
            <Text size="small">Mustard primary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach" padding="xs">
            <Text size="small">Peach</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary" padding="xs">
            <Text size="small">Peach secondary</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="xs">
            <Text size="small">Peach secondary light</Text>
          </Box>
        </Flex>
      </Flex>
    </DocsBlock>

    <DocsBlock info="Padding">
      <Flex wrap>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding={null}>
            <Text size="small">No padding</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="xxs">
            <Text size="small">Padding xxs</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="xs">
            <Text size="small">Padding xs</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="s">
            <Text size="small">Padding s</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="m">
            <Text size="small">Padding m (default)</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="l">
            <Text size="small">Padding l</Text>
          </Box>
        </Flex>
        <Flex marginRight="s" marginBottom="s">
          <Box color="peach-secondary-light" padding="xl">
            <Text size="small">Padding xl</Text>
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
