import React from 'react';
import HeaderRight from './HeaderRight';
import { shallow } from 'enzyme';
test('render', function () {
  var header = shallow(React.createElement(HeaderRight, null, "some text"));
  expect(header.hasClass('sg-header__right')).toEqual(true);
});