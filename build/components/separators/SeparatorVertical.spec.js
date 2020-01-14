import React from 'react';
import SeparatorVertical, { SIZE } from './SeparatorVertical';
import { shallow } from 'enzyme';
test('render', function () {
  var separator = shallow(React.createElement(SeparatorVertical, null));
  expect(separator.hasClass('sg-vertical-separator')).toEqual(true);
  expect(separator.hasClass('sg-vertical-separator--normal')).toEqual(false);
});
test('size', function () {
  var separator = shallow(React.createElement(SeparatorVertical, {
    size: SIZE.SMALL
  }));
  expect(separator.hasClass('sg-vertical-separator--small')).toEqual(true);
});