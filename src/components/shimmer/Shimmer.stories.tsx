import React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import {Shimmer} from './Shimmer';
import Box from '../box/Box';
import Text from '../text/Text';
import Avatar from '../avatar/Avatar';
import TextBit from '../text/TextBit';
import Counter from '../counters/Counter';
import FileHandler from '../file-handler/FileHandler';
import HomeButton from '../home-button/HomeButton';
import Label from '../labels/Label';
import Rating from '../rating/Rating';
import Search from '../search/Search';
import SelectMenu from '../select-menu/SelectMenu';
import SubjectIcon from '../subject-icons/SubjectIcon';

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
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  return (
    <Flex alignItems="flex-start" wrap>
      <Flex margin="s">
        <Shimmer active>
          <Button variant="solid-indigo">Click me!</Button>
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <Avatar size="l" />
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <Box color="indigo-20">
            <TextBit color="text-black">Wake up your mind</TextBit>
          </Box>
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <Counter size="xs">25</Counter>
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <FileHandler color="gray-20" iconType="attachment">
            avatar.jpg
          </FileHandler>
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <HomeButton href="https://brainly.com" type="brainly" />
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <Label color="indigo" iconType="academic_cap">
            label
          </Label>
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <Rating counterText="34 votes" rate={2.4} />
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <Search placeholder="Find all the answers..." size="m" />
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <SelectMenu
            options={[
              {value: 'history', label: 'History'},
              {value: 'science', label: 'Science'},
            ]}
            selectedOptions={selectedOptions}
            onOptionChange={option => {
              setSelectedOptions([option]);
            }}
          />
        </Shimmer>
      </Flex>
      <Flex margin="s">
        <Shimmer active>
          <SubjectIcon type="accountancy" />
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
          <Box color="indigo-40">
            <Flex marginBottom="s">
              <Text>
                Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
                laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
                cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
                fugiat deserunt ad.
              </Text>
            </Flex>
            <Button variant="solid">Ok</Button>
          </Box>
        </Shimmer>
      </Flex>
      <Shimmer
        active
        image={`linear-gradient(
        90deg,
        rgba(255, 232, 229, 0) 5%,
        rgba(255, 232, 229, 0.5) 40%,
        rgba(255, 232, 229, 0.5) 60%,
        rgba(255, 232, 229, 0) 95%
      )`}
      >
        <Box color="red-40">
          <Flex marginBottom="s">
            <Text>
              Nulla cillum ullamco in minim. Non occaecat Lorem ex laborum
              laboris. Fugiat duis quis in est. Velit elit mollit ullamco aute
              cupidatat adipisicing eu nulla duis laborum. Laborum qui nulla
              fugiat deserunt ad.
            </Text>
          </Flex>
          <Button variant="solid">Ok</Button>
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
      <Flex marginBottom="l">
        <Shimmer active>
          <Box color="gray-40" padding="xl">
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
      <Flex marginBottom="l">
        <Shimmer active direction="vertical">
          <Box color="gray-40" padding="xl">
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
          <Box color="gray-40" padding="xl">
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
