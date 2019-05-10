import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(
    <Footer>some text</Footer>
  );

  expect(header.hasClass('sg-footer')).toEqual(true);
});
