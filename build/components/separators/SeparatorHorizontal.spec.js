import React from 'react';
import SeparatorHorizontal, { TYPE } from './SeparatorHorizontal';
import { shallow } from 'enzyme';
test('render', function () {
  var separator = shallow(React.createElement(SeparatorHorizontal, null));
  expect(separator.hasClass('sg-horizontal-separator')).toEqual(true);
  expect(separator.hasClass('sg-horizontal-separator--normal')).toEqual(false);
});
test('type', function () {
  var separator = shallow(React.createElement(SeparatorHorizontal, {
    type: TYPE.SPACED
  }));
  expect(separator.hasClass('sg-horizontal-separator--spaced')).toEqual(true);
});