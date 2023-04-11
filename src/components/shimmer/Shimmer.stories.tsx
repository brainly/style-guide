import React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import {Shimmer} from './Shimmer';
import Box from '../box/Box';
import Text from '../text/Text';

export default {
  title: 'Components/Shimmer',
  component: Shimmer,
  args: {
    active: true,
  },
};

export const Default = args => (
  <Shimmer {...args}>
    <Button>Shiny button</Button>
  </Shimmer>
);

export const MultipleComponents = () => {
  return (
    <Flex>
      <Shimmer active>
        <Button>Me shine</Button>
      </Shimmer>
      <Flex marginLeft="s">
        <Shimmer active>
          <Button>Me shine too</Button>
        </Shimmer>
      </Flex>
    </Flex>
  );
};

export const CompoundComponent = () => {
  return (
    <Shimmer active>
      <Box color="red-30">
        <Flex marginBottom="s">
          <Text>
            Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
            laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
            cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
            fugiat deserunt ad.
          </Text>
        </Flex>
        <Button variant="solid-indigo">Ok</Button>
      </Box>
    </Shimmer>
  );
};

export const CustomGradients = () => {
  return (
    <Flex direction="column">
      <Flex marginBottom="s">
        <Shimmer
          active
          image={`linear-gradient(
        90deg,
        rgba(22, 59, 243, 0) 0%,
        rgba(22, 59, 243, 0.5) 50%,
        rgba(22, 59, 243, 0) 100%
      )`}
        >
          <Box color="gray-20">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
      <Shimmer
        active
        image={`linear-gradient(
        90deg,
        rgba(255, 52, 26, 0) 0%,
        rgba(255, 52, 26, 0.5) 50%,
        rgba(255, 52, 26, 0) 100%
      )`}
      >
        <Box color="gray-20">
          <Flex marginBottom="s">
            <Text>
              Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
              laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
              cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
              fugiat deserunt ad.
            </Text>
          </Flex>
          <Button variant="solid-indigo">Ok</Button>
        </Box>
      </Shimmer>
    </Flex>
  );
};

export const BlendModes = () => {
  return (
    <Flex direction="column">
      <Text>blend mode: normal</Text>
      <Flex marginBottom="s">
        <Shimmer
          active
          image={`linear-gradient(
        90deg,
        rgba(22, 59, 243, 0) 0%,
        rgba(22, 59, 243, 0.5) 50%,
        rgba(22, 59, 243, 0) 100%
      )`}
        >
          <Box color="gray-20">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
      <Text>blend mode: difference</Text>
      <Flex marginBottom="s">
        <Shimmer
          active
          image={`linear-gradient(
        90deg,
        rgba(22, 59, 243, 0) 0%,
        rgba(22, 59, 243, 0.5) 50%,
        rgba(22, 59, 243, 0) 100%
      )`}
          blendMode="difference"
        >
          <Box color="gray-20">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
      <Text>blend mode: color-burn</Text>
      <Flex marginBottom="s">
        <Shimmer
          active
          image={`linear-gradient(
        90deg,
        rgba(22, 59, 243, 0) 0%,
        rgba(22, 59, 243, 0.5) 50%,
        rgba(22, 59, 243, 0) 100%
      )`}
          blendMode="color-burn"
        >
          <Box color="gray-20">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
    </Flex>
  );
};

export const Directions = () => {
  return (
    <Flex direction="column">
      <Text>direction: horizontal</Text>
      <Flex marginBottom="s">
        <Shimmer active>
          <Box color="gray-40">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
      <Text>direction: vertical</Text>
      <Flex marginBottom="s">
        <Shimmer active direction="vertical">
          <Box color="gray-40">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
      <Text>direction: diagonal</Text>
      <Flex marginBottom="s">
        <Shimmer active direction="diagonal">
          <Box color="gray-40">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid-indigo">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
    </Flex>
  );
};
