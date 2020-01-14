import React from 'react';
import ButtonRound from './ButtonRound';
import { shallow } from 'enzyme';
test('render', function () {
  var button = shallow(React.createElement(ButtonRound, null, "Some text"));
  expect(button.hasClass('sg-button-primary-round')).toEqual(true);
});
test('href', function () {
  var href = '#test';
  var button = shallow(React.createElement(ButtonRound, {
    href: href
  }, "Some text"));
  expect(button.is("[href=\"".concat(href, "\"]"))).toEqual(true);
});
test('label', function () {
  var label = 'example label';
  var button = shallow(React.createElement(ButtonRound, {
    label: label
  }, "Some text"));
  expect(button.contains(label)).toEqual(true);
  expect(button.find('.sg-button-primary-round__label')).toHaveLength(1);
});
test('no label', function () {
  var button = shallow(React.createElement(ButtonRound, null, "Some text"));
  expect(button.find('sg-button-primary-round__label')).toHaveLength(0);
});
test('func', function () {
  var counter = 0;

  var onClick = function onClick() {
    return counter++;
  };

  var button = shallow( // eslint-disable-next-line react/jsx-no-bind
  React.createElement(ButtonRound, {
    onClick: onClick
  }, "Some text"));
  expect(counter).toEqual(0);
  button.simulate('click');
  expect(counter).toEqual(1);
});
test('func throw testing 1part - undefined function', function () {
  var button = shallow(React.createElement(ButtonRound, null, "Some text"));
  expect(function () {
    return button.simulate('click');
  }).not.toThrow();
  var button2 = shallow(React.createElement(ButtonRound, {
    onClick: undefined
  }, "Some text"));
  expect(function () {
    return button2.simulate('click');
  }).not.toThrow();
});
test('func throw testing 2part - defined bad type', function () {
  var spy = jest.spyOn(console, 'error');
  console['error'] = jest.fn();
  var notFunctionObject = 'there should be func not string';
  var button = shallow(React.createElement(ButtonRound, {
    onClick: notFunctionObject
  }, "Some text"));
  expect(function () {
    return button.simulate('click');
  }).toThrow();
  spy.mockRestore();
});