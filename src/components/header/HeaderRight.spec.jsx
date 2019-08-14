import React from 'react';
import HeaderRight from './HeaderRight';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(<HeaderRight>some text</HeaderRight>);

  expect(header.hasClass('sg-header__right')).toEqual(true);
});
