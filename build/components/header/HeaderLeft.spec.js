import React from 'react';
import HeaderLeft from './HeaderLeft';
import { shallow } from 'enzyme';
test('render', function () {
  var header = shallow(React.createElement(HeaderLeft, null, "some text"));
  expect(header.hasClass('sg-header__left')).toEqual(true);
});