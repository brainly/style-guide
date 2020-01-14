import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Dropdown from './Dropdown';
import { shallow } from 'enzyme';
var item1st = {
  id: 'csdsd',
  text: '1st item'
};
var item2nd = {
  id: 'sdfsdfg',
  text: '2nd item'
};
var item3rd = {
  id: 'fdpks',
  text: '3rd item'
};
var defaultItems = [item1st, item2nd, item3rd];
var defaultLabel = 'default Label';
var defaultProps = {
  items: defaultItems,
  label: defaultLabel
};
test('render', function () {
  var dropDown = shallow(React.createElement(Dropdown, defaultProps));
  expect(dropDown.hasClass('sg-dropdown')).toEqual(true);
});
test('default full width', function () {
  var dropDown = shallow(React.createElement(Dropdown, defaultProps));
  expect(dropDown.hasClass('sg-dropdown--full-width')).toEqual(true);
});
test('no full width', function () {
  var dropDown = shallow(React.createElement(Dropdown, _extends({}, defaultProps, {
    fullWidth: false
  })));
  expect(dropDown.hasClass('sg-dropdown--full-width')).toEqual(false);
});