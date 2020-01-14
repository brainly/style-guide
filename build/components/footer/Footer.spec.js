import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
test('render', function () {
  var header = shallow(React.createElement(Footer, null, "some text"));
  expect(header.hasClass('sg-footer')).toEqual(true);
});