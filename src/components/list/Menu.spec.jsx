import React from 'react';
import {shallow} from 'enzyme';
import MenuList, {SIZE, MenuItem} from 'list/MenuList';

const menuItem = {
  text: 'Test',
  href: '#'
};
const menuItems = [menuItem];

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
