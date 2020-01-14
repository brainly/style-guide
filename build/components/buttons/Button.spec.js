import React from 'react';
import Button, { BUTTON_TYPE } from './Button';
import { shallow } from 'enzyme';
test('render', function () {
  var button = shallow(React.createElement(Button, null, "Some text"));
  expect(button.hasClass('sg-button')).toEqual(true);
});
test('type', function () {
  var buttonType = BUTTON_TYPE.PRIMARY_BLUE;
  var button = shallow(React.createElement(Button, {
    type: buttonType
  }, "Some text"));
  expect(button.hasClass("sg-button--".concat(buttonType))).toEqual(true);
});
test('button with href', function () {
  var button = shallow(React.createElement(Button, {
    href: "http://example.com"
  }, "Some text"));
  expect(button.find('a[href]')).toHaveLength(1);
  expect(button.find('button')).toHaveLength(0);
});
test('disabled', function () {
  var button = shallow(React.createElement(Button, {
    disabled: true
  }, "Some text"));
  expect(button.hasClass('sg-button--disabled')).toEqual(true);
  expect(button.is('[disabled]')).toEqual(true);
});
test('not disabled', function () {
  var button = shallow(React.createElement(Button, null, "Some text"));
  expect(button.hasClass('sg-button--disabled')).toEqual(false);
  expect(button.is('[disabled]')).toEqual(false);
});
test("primary don't have small", function () {
  var button = shallow(React.createElement(Button, {
    small: true
  }, "Some text"));
  expect(button.hasClass('sg-button--small')).toEqual(false);
});
test('full width', function () {
  var button = shallow(React.createElement(Button, {
    fullWidth: true
  }, "Some text"));
  expect(button.hasClass('sg-button--full-width')).toEqual(true);
});
test('icon', function () {
  var icon = React.createElement("span", null, ":P");
  var button = shallow(React.createElement(Button, {
    icon: icon
  }, "Some text"));
  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button__icon')).toHaveLength(1);
});
test('no icon', function () {
  var button = shallow(React.createElement(Button, null, "Some text"));
  expect(button.find('.sg-button__icon')).toHaveLength(0);
});