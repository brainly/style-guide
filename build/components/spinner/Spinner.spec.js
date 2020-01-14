import React from 'react';
import Spinner, { SPINNER_SIZE } from './Spinner';
import { shallow } from 'enzyme';
test('render', function () {
  var component = shallow(React.createElement(Spinner, null));
  expect(component).toHaveLength(1);
  expect(component.is('.sg-spinner')).toEqual(true);
});
test('SPINNER_SIZE', function () {
  var size = SPINNER_SIZE.XSMALL;
  var component = shallow(React.createElement(Spinner, {
    size: size
  }));
  expect(component.hasClass('sg-spinner--xsmall')).toEqual(true);
});
test('light', function () {
  var component = shallow(React.createElement(Spinner, {
    light: true
  }));
  expect(component).toHaveLength(1);
  expect(component.hasClass('sg-spinner--light')).toEqual(true);
});
test('className', function () {
  var testclass = 'mati-love-4-ever';
  var component = shallow(React.createElement(Spinner, {
    className: testclass
  }));
  expect(component).toHaveLength(1);
  expect(component.is(".".concat(testclass))).toEqual(true);
});