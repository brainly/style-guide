import React from 'react';
import HeaderLeft from './HeaderLeft';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(<HeaderLeft>some text</HeaderLeft>);

  expect(header.hasClass('sg-header__left')).toEqual(true);
});
