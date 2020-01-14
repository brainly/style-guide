import React from 'react';
import Logo, { TYPE } from './Logo';
import { shallow } from 'enzyme';
test('render', function () {
  var logo = shallow(React.createElement(Logo, null));
  expect(logo.hasClass('sg-logo')).toEqual(true);
  expect(logo.find('img')).toHaveLength(1);
});
test('type', function () {
  var logo = shallow(React.createElement(Logo, {
    type: TYPE.ZNANIJA
  }));
  expect(logo.hasClass('sg-logo--znanija')).toEqual(true);
});