import React from 'react';
import HeaderSecondary, {SIZE, TYPE as HEADER_TYPE, COLOR as HEADER_COLOR} from './HeaderSecondary';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const header = shallow(
    <HeaderSecondary>Test</HeaderSecondary>
  );

  expect(header.hasClass('sg-header-secondary')).toBeTruthy();
});

test('size', () => {
  const header = shallow(
    <HeaderSecondary size={SIZE.SMALL}>Test</HeaderSecondary>
  );

  expect(header.hasClass('sg-header-secondary--small')).toBeTruthy();
});

test('type', () => {
  const header = mount(
    <HeaderSecondary type={HEADER_TYPE.H3}>Test</HeaderSecondary>
  );

  expect(header.props().type).toEqual(HEADER_TYPE.H3);
});

test('light', () => {
  const text = shallow(
    <HeaderSecondary color={HEADER_COLOR.LIGHT}>Test</HeaderSecondary>
  );

  expect(text.hasClass('sg-header-secondary--light')).toBeTruthy();
});

test('default size', () => {
  const header = shallow(
    <HeaderSecondary size={SIZE.NORMAL}>Test</HeaderSecondary>
  );

  expect(header.hasClass('sg-header-secondary--normal')).toBeFalsy();
});
