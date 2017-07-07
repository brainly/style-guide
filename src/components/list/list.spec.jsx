import React from 'react';
import {shallow, mount} from 'enzyme';
import ListItem from '../list/ListItem';
import MenuList, {SIZE} from '../list/MenuList';
import MenuItem from '../list/MenuItem';
import List from '../list/List';
import Icon from '../icons/Icon';

const testItem = 'test';
const items = [testItem];
const menuItem = {
  text: 'Test',
  href: '#'
};
const menuItems = [menuItem];

describe('list', () => {
  test('render', () => {
    const list = shallow(
      <List items={items}/>
    );

    expect(list.hasClass('sg-list')).toEqual(true);
  });

  test('with spaced elements', () => {
    const list = shallow(
      <List spaced={true} items={items}/>
    );

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(true);
  });

  test('with default spacing', () => {
    const list = shallow(
      <List items={items}/>
    );

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(false);
  });
});

describe('list item', () => {

  test('render', () => {
    const listItem = shallow(
      <ListItem text="test"/>
    );
    const icon = listItem.find(Icon);
    const iconDiv = listItem.find('div').at(0);

    expect(listItem.hasClass('sg-list__element')).toEqual(true);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual('arrow_right');
    expect(iconDiv.hasClass('sg-list__icon')).toEqual(true);
  });

  test('small right spacing', () => {
    const listItem = mount(
      <ListItem small={true} text="test"/>
    );

    expect(listItem.props().small).toEqual(true);
  });

  test('default spacing', () => {
    const listItem = mount(
      <ListItem text="test"/>
    );

    expect(listItem.props().small).toEqual(undefined);
  });

  test('error when no text', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<ListItem/>);

    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });
});

describe('menu list', () => {
  test('render', () => {
    const menu = shallow(
      <MenuList items={menuItems}/>
    );

    expect(menu.hasClass('sg-menu-list')).toEqual(true);
    expect(menu.hasClass('sg-menu-list--normal')).toEqual(false);
  });

  test('small size', () => {
    const menu = shallow(
      <MenuList items={menuItems} size={SIZE.SMALL}/>
    );

    expect(menu.hasClass('sg-menu-list--small')).toEqual(true);
  });

  test('large', () => {
    const menu = shallow(
      <MenuList items={menuItems} size={SIZE.LARGE}/>
    );

    expect(menu.hasClass('sg-menu-list--large')).toEqual(true);
  });
});

describe('menu item', () => {
  test('render', () => {
    const menuItem = shallow(
      <MenuItem text="test" href="#"/>
    );

    expect(menuItem.hasClass('sg-menu-list__element')).toEqual(true);
  });

  test('error when no text', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<MenuItem href="#"/>);

    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

  test('error when no href', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<MenuItem text="test"/>);

    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

});
