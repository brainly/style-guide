import React from 'react';
import FlashMessage, { TYPE } from './FlashMessage';
import { shallow } from 'enzyme';
test('render', function () {
  var flashMessage = shallow(React.createElement(FlashMessage, {
    text: "test"
  }));
  expect(flashMessage.hasClass('sg-flash')).toEqual(true);
  expect(flashMessage.find('div.sg-flash__message')).toHaveLength(1);
});
test('default type', function () {
  var flashMessage = shallow(React.createElement(FlashMessage, {
    text: "test"
  }));
  var messageDiv = flashMessage.find('div.sg-flash__message');
  expect(messageDiv.hasClass('sg-flash__message')).toEqual(true);
  expect(messageDiv.hasClass('sg-flash__message--default')).toEqual(false);
});
test('type', function () {
  var flashMessage = shallow(React.createElement(FlashMessage, {
    text: "test",
    type: TYPE.ERROR
  }));
  var messageDiv = flashMessage.find('div.sg-flash__message');
  expect(messageDiv.hasClass('sg-flash__message--error')).toEqual(true);
});