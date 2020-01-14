import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
test('render', function () {
  var header = shallow(React.createElement(Header, null, "some text"));
  expect(header.hasClass('sg-header')).toEqual(true);
});
test('fixed', function () {
  var header = shallow(React.createElement(Header, {
    fixed: true
  }, "some text"));
  expect(header.hasClass('sg-header--fixed')).toEqual(true);
});