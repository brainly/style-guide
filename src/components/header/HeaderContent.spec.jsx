import React from 'react';
import HeaderContent from './HeaderContent';
import {shallow} from 'enzyme';

test('render', () => {
  const headerContent = shallow(
    <HeaderContent>some text</HeaderContent>
  );

  expect(headerContent.hasClass('sg-header__content')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<HeaderContent />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('auto-height', () => {
  const headerContent = shallow(
    <HeaderContent autoHeight>some text</HeaderContent>
  );

  expect(headerContent.hasClass('sg-header__content--auto-height')).toEqual(true);
});

