import React from 'react';
import HeaderMiddle from './HeaderMiddle';
import { shallow } from 'enzyme';
test('render', function () {
  var header = shallow(React.createElement(HeaderMiddle, null, "some text"));
  expect(header.hasClass('sg-header__middle')).toEqual(true);
});