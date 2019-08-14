import React from 'react';
import HeaderContainer from './HeaderContainer';
import {shallow} from 'enzyme';

test('render', () => {
  const headerContainer = shallow(<HeaderContainer>some text</HeaderContainer>);

  expect(headerContainer.hasClass('sg-header__container')).toEqual(true);
});

test('light', () => {
  const headerContainer = shallow(
    <HeaderContainer light>some text</HeaderContainer>
  );

  expect(headerContainer.hasClass('sg-header__container--light')).toEqual(true);
});
