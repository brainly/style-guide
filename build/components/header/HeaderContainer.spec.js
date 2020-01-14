import React from 'react';
import HeaderContainer from './HeaderContainer';
import { shallow } from 'enzyme';
test('render', function () {
  var headerContainer = shallow(React.createElement(HeaderContainer, null, "some text"));
  expect(headerContainer.hasClass('sg-header__container')).toEqual(true);
});
test('light', function () {
  var headerContainer = shallow(React.createElement(HeaderContainer, {
    light: true
  }, "some text"));
  expect(headerContainer.hasClass('sg-header__container--light')).toEqual(true);
});