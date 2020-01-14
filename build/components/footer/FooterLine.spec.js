import React from 'react';
import FooterLine from './FooterLine';
import { shallow } from 'enzyme';
test('render', function () {
  var header = shallow(React.createElement(FooterLine, null, "some text"));
  expect(header.hasClass('sg-footer__line')).toEqual(true);
});