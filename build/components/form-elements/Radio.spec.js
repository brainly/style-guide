import React from 'react';
import Radio from './Radio';
import { shallow } from 'enzyme';
test('render', function () {
  var radio = shallow(React.createElement(Radio, null));
  expect(radio.hasClass('sg-radio')).toEqual(true);
  expect(radio.find('input[type="radio"]')).toHaveLength(1);
});
test('not checked', function () {
  var radio = shallow(React.createElement(Radio, null));
  var input = radio.find('input[type="radio"]');
  expect(input.props().checked).toBeFalsy();
});
test('checked', function () {
  var radio = shallow(React.createElement(Radio, {
    checked: true
  }));
  var input = radio.find('input[type="radio"]');
  expect(input.props().checked).toBeTruthy();
});
test('unique ID by default', function () {
  var noOfRadio = 15;
  var arrayOfId = new Array(noOfRadio).fill(true).map(function () {
    var radio = shallow(React.createElement(Radio, null));
    var input = radio.find('input[type="radio"]');
    return input.props().id;
  });
  expect(arrayOfId).toHaveLength(new Set(arrayOfId).size);
});
test('passing id', function () {
  var id = 'id_of_radio';
  var radio = shallow(React.createElement(Radio, {
    id: id
  }));
  var input = radio.find('input[type="radio"]');
  expect(input.props().id).toEqual(id);
});
test('passing name', function () {
  var name = 'group_name';
  var radio = shallow(React.createElement(Radio, {
    name: name
  }));
  var input = radio.find('input[type="radio"]');
  expect(input.props().name).toEqual(name);
});