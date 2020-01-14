import React from 'react';
import { shallow } from 'enzyme';
import MenuList, { MenuItem, SIZE } from 'list/MenuList';
var menuItem = {
  text: 'Test',
  href: '#'
};
var menuItems = [menuItem];
describe('<MenuList />', function () {
  test('renders', function () {
    var menu = shallow(React.createElement(MenuList, {
      items: menuItems
    }));
    expect(menu.hasClass('sg-menu-list')).toEqual(true);
    expect(menu.hasClass('sg-menu-list--normal')).toEqual(false);
  });
  test('small size', function () {
    var menu = shallow(React.createElement(MenuList, {
      items: menuItems,
      size: SIZE.SMALL
    }));
    expect(menu.hasClass('sg-menu-list--small')).toEqual(true);
  });
  test('large', function () {
    var menu = shallow(React.createElement(MenuList, {
      items: menuItems,
      size: SIZE.LARGE
    }));
    expect(menu.hasClass('sg-menu-list--large')).toEqual(true);
  });
});
describe('<MenuItem />', function () {
  test('renders', function () {
    var menuItem = shallow(React.createElement(MenuItem, {
      text: "test",
      href: "#"
    }));
    expect(menuItem.hasClass('sg-menu-list__element')).toEqual(true);
    expect(menuItem.find('.sg-menu-list__link')).toHaveLength(1);
  });
  test('renders different type of html element', function () {
    var menuItem = shallow(React.createElement(MenuItem, {
      type: "span",
      text: "test"
    }));
    expect(menuItem.find('span')).toHaveLength(1);
  });
  test('passes props to link element', function () {
    var menuItem = shallow(React.createElement(MenuItem, {
      type: "span",
      text: "test",
      id: "m4l"
    }));
    expect(menuItem.find('.sg-menu-list__link').props().id).toEqual('m4l');
  });
});