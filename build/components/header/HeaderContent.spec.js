import React from 'react';
import HeaderContent from './HeaderContent';
import { shallow } from 'enzyme';
test('render', function () {
  var headerContent = shallow(React.createElement(HeaderContent, null, "some text"));
  expect(headerContent.hasClass('sg-header__content')).toEqual(true);
});
test('auto-height', function () {
  var headerContent = shallow(React.createElement(HeaderContent, {
    autoHeight: true
  }, "some text"));
  expect(headerContent.hasClass('sg-header__content--auto-height')).toEqual(true);
});