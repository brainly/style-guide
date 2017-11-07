import React from 'react';
import HeaderContainer from './HeaderContainer';
import {shallow} from 'enzyme';

test('render', () => {
  const headerContainer = shallow(
    <HeaderContainer>some text</HeaderContainer>
  );

  expect(headerContainer.hasClass('sg-header__container')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<HeaderContainer />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('light', () => {
  const headerContainer = shallow(
    <HeaderContainer light>some text</HeaderContainer>
  );

  expect(headerContainer.hasClass('sg-header__container--light')).toEqual(true);
});

