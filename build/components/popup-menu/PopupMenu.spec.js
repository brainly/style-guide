import React from 'react';
import PopupMenu from './PopupMenu';
import { shallow } from 'enzyme';
var items = ['one', 'two', 'three'];
test('render', function () {
  var popupMenu = shallow(React.createElement(PopupMenu, {
    items: items
  }));
  expect(popupMenu.hasClass('sg-popup-menu')).toEqual(true);
});
test('render items', function () {
  var popupMenu = shallow(React.createElement(PopupMenu, {
    items: items
  }));
  expect(popupMenu.find('.sg-popup-menu__hole')).toHaveLength(items.length);
});
test('extra spacing', function () {
  var popupMenu = shallow(React.createElement(PopupMenu, {
    items: items,
    extraSpacing: true
  }));
  expect(popupMenu.hasClass('sg-popup-menu--elements-spaced')).toEqual(true);
});