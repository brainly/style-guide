import * as React from 'react';
import MenuList, {SIZE} from './MenuList';
import Flex from '../flex/Flex';
import Box from '../box/Box';

const menuItem1 = {text: 'Element one', href: '#'};
const menuItem2 = {text: 'Element two', href: '#'};
const menuItem3 = {text: 'Element three', href: '#'};
const menuItems = [menuItem1, menuItem2, menuItem3];

export default {
  title: 'Components/MenuList',
  parameters: {
    component: MenuList,
  },
};

export const Default = args => {
  const {items} = args;

  return <MenuList {...args} items={items} />;
};

Default.args = {
  children: null,
  size: 'normal',
  items: menuItems,
};

Default.argTypes = {
  children: {control: null},
  size: {control: 'select', options: SIZE},
  items: {
    control: {
      type: 'object',
    },
  },
};

export const Sizes = () => (
  <Flex className="sg-space-x-l">
    <Flex>
      <Box color="gray-secondary-ultra-light">
        <MenuList size="large" items={menuItems} />
      </Box>
    </Flex>
    <Flex>
      <Box color="gray-secondary-ultra-light">
        <MenuList size="normal" items={menuItems} />
      </Box>
    </Flex>
    <Flex>
      <Box color="gray-secondary-ultra-light">
        <MenuList size="small" items={menuItems} />
      </Box>
    </Flex>
  </Flex>
);
