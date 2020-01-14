import React from 'react';
import Select from './Select';
import { shallow, render } from 'enzyme';
var exampleOptions = [{
  value: 'test',
  text: 'test'
}, {
  value: 'test2',
  text: 'test2'
}];

var voidFunction = function voidFunction() {
  return undefined;
};

test('render', function () {
  var select = shallow(React.createElement(Select, null));
  expect(select.hasClass('sg-select')).toEqual(true);
});
test('render options', function () {
  var select = shallow(React.createElement(Select, {
    options: exampleOptions
  }));
  expect(select.find('option')).toHaveLength(exampleOptions.length);
});
test('choose options', function () {
  var select = render(React.createElement(Select, {
    options: exampleOptions,
    value: exampleOptions[1].value,
    onChange: voidFunction
  }));
  var option1st = select.find('option').get(0);
  var option2nd = select.find('option').get(1);
  expect(option1st.attribs.selected).toBeUndefined();
  expect(option2nd.attribs.selected).toBeDefined();
});
test('full width', function () {
  var select = shallow(React.createElement(Select, {
    fullWidth: true
  }));
  expect(select.hasClass('sg-select--full-width')).toEqual(true);
});
test('default validation', function () {
  var select = shallow(React.createElement(Select, null));
  expect(select.hasClass('sg-select--valid')).toEqual(false);
  expect(select.hasClass('sg-select--invalid')).toEqual(false);
});
test('valid', function () {
  var select = shallow(React.createElement(Select, {
    valid: true
  }));
  expect(select.hasClass('sg-select--valid')).toEqual(true);
  expect(select.hasClass('sg-select--invalid')).toEqual(false);
});
test('invalid', function () {
  var select = shallow(React.createElement(Select, {
    invalid: true
  }));
  expect(select.hasClass('sg-select--valid')).toEqual(false);
  expect(select.hasClass('sg-select--invalid')).toEqual(true);
});
test('capitalized', function () {
  var select = shallow(React.createElement(Select, {
    capitalized: true
  }));
  expect(select.hasClass('sg-select--capitalized')).toEqual(true);
});
test('error when both valid and invalid', function () {
  expect(function () {
    shallow(React.createElement(Select, {
      valid: true,
      invalid: true
    }));
  }).toThrow();
});