import React from 'react';
import HeaderMiddle from './HeaderMiddle';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(<HeaderMiddle>some text</HeaderMiddle>);

  expect(header.hasClass('sg-header__middle')).toEqual(true);
});
