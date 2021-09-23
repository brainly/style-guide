import * as React from 'react';
import MenuList, {SIZE} from './MenuList';
import {StoryVariant} from '../../_docs/utils';

const menuItem1 = {text: 'Element one', href: '#'};
const menuItem2 = {text: 'Element two', href: '#'};
const menuItem3 = {text: 'Element three', href: '#'};
const menuItems = [menuItem1, menuItem2, menuItem3];

export default {
  title: 'Components/MenuList',
  parameters: {
    component: MenuList,
  },
  argTypes: {
    children: {control: null},
    size: {control: 'select', options: SIZE},
    items: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    children: null,
    size: 'normal',
    items: menuItems,
  },
};

export const Default = args => <MenuList {...args} />;

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <MenuList {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);
