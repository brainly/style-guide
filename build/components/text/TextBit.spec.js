import React from 'react';
import TextBit, { TEXT_BIT_TYPE, TEXT_BIT_SIZE, TEXT_BIT_COLOR } from './TextBit';
import { shallow, mount } from 'enzyme';
test('render', function () {
  var textBit = shallow(React.createElement(TextBit, {
    type: TEXT_BIT_TYPE.H1
  }, "Test"));
  expect(textBit.hasClass('sg-text-bit')).toBeTruthy();
});
test('size', function () {
  var textBit = shallow(React.createElement(TextBit, {
    size: TEXT_BIT_SIZE.XLARGE
  }, "Test"));
  expect(textBit.hasClass('sg-text-bit--xlarge')).toBeTruthy();
});
test('should not pass size when default passed', function () {
  var textBit = shallow(React.createElement(TextBit, {
    size: TEXT_BIT_SIZE.NORMAL
  }, "Test"));
  expect(textBit.hasClass('sg-text-bit--normal')).toBeFalsy();
});
test('type', function () {
  var textBit = mount(React.createElement(TextBit, {
    type: TEXT_BIT_TYPE.H3
  }, "Test"));
  expect(textBit.props().type).toEqual(TEXT_BIT_TYPE.H3);
});
test('color', function () {
  var textBit = shallow(React.createElement(TextBit, {
    color: TEXT_BIT_COLOR.BLUE_SECONDARY
  }, "Test"));
  expect(textBit.hasClass('sg-text-bit--blue-secondary')).toBeTruthy();
});