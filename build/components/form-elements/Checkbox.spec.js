import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';
test('render', function () {
  var checkbox = shallow(React.createElement(Checkbox, null));
  expect(checkbox.hasClass('sg-checkbox')).toEqual(true);
  expect(checkbox.find('input[type="checkbox"]')).toHaveLength(1);
});
test('not checked', function () {
  var checkbox = shallow(React.createElement(Checkbox, null));
  var input = checkbox.find('input[type="checkbox"]');
  expect(input.props().checked).toBeFalsy();
});
test('checked', function () {
  var checkbox = shallow(React.createElement(Checkbox, {
    checked: true
  }));
  var input = checkbox.find('input[type="checkbox"]');
  expect(input.props().checked).toBeTruthy();
});
test('unique ID by default', function () {
  var noOfCheckbox = 15;
  var arrayOfId = new Array(noOfCheckbox).fill(true).map(function () {
    var checkbox = shallow(React.createElement(Checkbox, null));
    var input = checkbox.find('input[type="checkbox"]');
    return input.props().id;
  });
  expect(arrayOfId).toHaveLength(new Set(arrayOfId).size);
});
test('passing id', function () {
  var id = 'id_of_checkbox';
  var checkbox = shallow(React.createElement(Checkbox, {
    id: id
  }));
  var input = checkbox.find('input[type="checkbox"]');
  expect(input.props().id).toEqual(id);
});