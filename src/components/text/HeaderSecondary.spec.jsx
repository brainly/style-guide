import React from 'react';
import HeaderSecondary, {HEADER_SIZE, HEADER_TYPE, HEADER_COLOR, HEADER_TRANSFORM} from './HeaderSecondary';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const header = shallow(
    <HeaderSecondary>Test</HeaderSecondary>
  );

  expect(header.hasClass('sg-header-secondary')).toBeTruthy();
});

test('size', () => {
  const header = shallow(
    <HeaderSecondary size={HEADER_SIZE.SMALL}>Test</HeaderSecondary>
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
    <HeaderSecondary size={HEADER_SIZE.NORMAL}>Test</HeaderSecondary>
  );

  expect(header.hasClass('sg-header-secondary--normal')).toBeFalsy();
});

test('transform uppercase', () => {
  const header = shallow(
    <HeaderSecondary transform={HEADER_TRANSFORM.UPPERCASE}>Test</HeaderSecondary>
  );

  expect(header.hasClass('sg-header-secondary--uppercase')).toBeTruthy();
});
