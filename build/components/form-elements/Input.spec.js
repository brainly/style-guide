import React from 'react';
import Input, { SIZE, COLOR } from './Input';
import { shallow } from 'enzyme';
test('render', function () {
  var input = shallow(React.createElement(Input, null));
  expect(input.hasClass('sg-input')).toEqual(true);
});
test('full width', function () {
  var input = shallow(React.createElement(Input, {
    fullWidth: true
  }));
  expect(input.hasClass('sg-input--full-width')).toEqual(true);
});
test('default validation', function () {
  var input = shallow(React.createElement(Input, null));
  expect(input.hasClass('sg-input--valid')).toEqual(false);
  expect(input.hasClass('sg-input--invalid')).toEqual(false);
});
test('valid', function () {
  var input = shallow(React.createElement(Input, {
    valid: true
  }));
  expect(input.hasClass('sg-input--valid')).toEqual(true);
  expect(input.hasClass('sg-input--invalid')).toEqual(false);
});
test('invalid', function () {
  var input = shallow(React.createElement(Input, {
    invalid: true
  }));
  expect(input.hasClass('sg-input--invalid')).toEqual(true);
  expect(input.hasClass('sg-input--valid')).toEqual(false);
});
test('error when both valid and invalid', function () {
  expect(function () {
    shallow(React.createElement(Input, {
      valid: true,
      invalid: true
    }));
  }).toThrow();
});
test('size', function () {
  var input = shallow(React.createElement(Input, {
    size: SIZE.LARGE
  }));
  expect(input.hasClass('sg-input--large')).toEqual(true);
});
test('default size', function () {
  var input = shallow(React.createElement(Input, null));
  expect(input.hasClass('sg-input--normal')).toEqual(false);
  expect(input.hasClass('sg-input--large')).toEqual(false);
});
test('color', function () {
  var input = shallow(React.createElement(Input, {
    color: COLOR.WHITE
  }));
  expect(input.hasClass('sg-input--white')).toEqual(true);
});
test('default color', function () {
  var input = shallow(React.createElement(Input, null));
  expect(input.hasClass('sg-input--normal')).toEqual(false);
  expect(input.hasClass('sg-input--light')).toEqual(false);
});