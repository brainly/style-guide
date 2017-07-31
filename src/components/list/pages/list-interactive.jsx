import React from 'react';
import List, {ICON_TYPE, ICON_COLOR} from '../List';
import MenuList, {SIZE} from '../MenuList';
import DocsActiveBlock from 'components/DocsActiveBlock';

const firstString = 'One two three';
const secondString = 'Two three four';
const thirdString = 'Three four five';
const items = [firstString, secondString, thirdString];
const example = ['ask questions about your assignment', 'get answer with explanation', 'find similar questions'];
const menuItem1 = {text: firstString, href: '#'};
const menuItem2 = {text: secondString, href: '#'};
const menuItem3 = {text: thirdString, href: '#'};
const menuItems = [menuItem1, menuItem2, menuItem3];

const Lists = () => {

  const settings = [
    {
      name: 'small',
      values: Boolean
    },
    {
      name: 'spaced',
      values: Boolean
    },
    {
      name: 'iconType',
      values: ICON_TYPE
    },
    {
      name: 'iconColor',
      values: ICON_COLOR
    }
  ];

  const menuSettings = [
    {
      name: 'size',
      values: SIZE
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings} backgroundColor="dark">
      <List items={items}/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <List items={example} iconColor={ICON_COLOR.GRAY_SECONDARY} iconType={ICON_TYPE.PLUS} spaced/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={menuSettings}>
      <MenuList items={menuItems}/>
    </DocsActiveBlock>
  </div>;
};

export default Lists;
