import React from 'react';
import DropdownItem from './DropdownItem';
import { shallow } from 'enzyme';

var voidFunction = function voidFunction() {
  return undefined;
};

test('render', function () {
  var text = 'xyz';
  var dropDown = shallow(React.createElement(DropdownItem, {
    text: text,
    onClick: voidFunction
  }));
  var textItem = dropDown.find('.sg-dropdown__item-text');
  expect(dropDown.hasClass('sg-dropdown__item-hole')).toEqual(true);
  expect(textItem).toHaveLength(1);
  expect(textItem.text()).toEqual(text);
});
test('click working', function () {
  var onClick = jest.fn();
  var dropDown = shallow(React.createElement(DropdownItem, {
    text: "xyz",
    onClick: onClick
  }));
  expect(onClick.mock.calls).toHaveLength(0);
  dropDown.simulate('click');
  expect(onClick.mock.calls).toHaveLength(1);
});
test('click working', function () {
  var onClick = jest.fn();
  var dropDown = shallow(React.createElement(DropdownItem, {
    text: "xyz",
    onClick: onClick
  }));
  expect(onClick.mock.calls).toHaveLength(0);
  dropDown.simulate('click');
  expect(onClick.mock.calls).toHaveLength(1);
});