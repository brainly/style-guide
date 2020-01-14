import React from 'react';
import HomeButton, { TYPE } from './HomeButton';
import { shallow } from 'enzyme';
test('render', function () {
  var button = shallow(React.createElement(HomeButton, null));
  expect(button.hasClass('sg-home-button')).toBeTruthy();
  expect(button.find('img')).toHaveLength(2);
  expect(button.find('a')).toHaveLength(1);
});
test('type', function () {
  var button = shallow(React.createElement(HomeButton, {
    type: TYPE.EODEV
  }));
  expect(button.hasClass('sg-home-button--eodev')).toBeTruthy();
});
test('href', function () {
  var test = 'test';
  var button = shallow(React.createElement(HomeButton, {
    href: test
  }));
  expect(button.props().href).toEqual(test);
});
test('empty href', function () {
  var button = shallow(React.createElement(HomeButton, null, "Test"));
  expect(button.props().href).toEqual('#');
});