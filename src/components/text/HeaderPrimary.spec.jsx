import React from 'react';
import HeaderPrimary, {HEADER_SIZE, HEADER_TYPE, HEADER_COLOR} from './HeaderPrimary';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const header = shallow(
    <HeaderPrimary>Test</HeaderPrimary>
  );

  expect(header.hasClass('sg-header-primary')).toBeTruthy();
});

test('size', () => {
  const header = shallow(
    <HeaderPrimary size={HEADER_SIZE.SMALL}>Test</HeaderPrimary>
  );

  expect(header.hasClass('sg-header-primary--small')).toBeTruthy();
});

test('type', () => {
  const header = mount(
    <HeaderPrimary type={HEADER_TYPE.H3}>Test</HeaderPrimary>
  );

  expect(header.props().type).toEqual(HEADER_TYPE.H3);
});

test('light', () => {
  const text = shallow(
    <HeaderPrimary color={HEADER_COLOR.LIGHT}>Test</HeaderPrimary>
  );

  expect(text.hasClass('sg-header-primary--light')).toBeTruthy();
});

test('default size', () => {
  const header = shallow(
    <HeaderPrimary size={HEADER_SIZE.NORMAL}>Test</HeaderPrimary>
  );

  expect(header.hasClass('sg-header-primary--normal')).toBeFalsy();
});
