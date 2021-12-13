import * as React from 'react';
import Subheadline from './Subheadline';
import {mount, shallow} from 'enzyme';
import {
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TYPE,
  SUBHEADLINE_ALIGN,
  SUBHEADLINE_TRANSFORM,
} from './subheadlineConsts';
import {TEXT_COLOR} from './Text';

test('render', () => {
  const subheadline = shallow(<Subheadline>Test</Subheadline>);

  expect(subheadline.hasClass('sg-subheadline')).toBeTruthy();
});

test('size', () => {
  const headline = shallow(
    <Subheadline size={SUBHEADLINE_SIZE.SMALL}>Test</Subheadline>
  );

  expect(headline.hasClass('sg-subheadline--small')).toBeTruthy();
});

test('type', () => {
  const headline = mount(
    <Subheadline type={SUBHEADLINE_TYPE.H3}>Test</Subheadline>
  );

  expect(headline.props().type).toEqual(SUBHEADLINE_TYPE.H3);
});

test('color', () => {
  const text = shallow(
    <Subheadline color={TEXT_COLOR['text-white']}>Test</Subheadline>
  );

  expect(text.hasClass('sg-subheadline--text-white')).toBeTruthy();
});

test('default size', () => {
  const headline = shallow(
    <Subheadline size={SUBHEADLINE_SIZE.MEDIUM}>Test</Subheadline>
  );

  expect(headline.hasClass('sg-subheadline--medium')).toBeFalsy();
});

test('transform uppercase', () => {
  const headline = shallow(
    <Subheadline transform={SUBHEADLINE_TRANSFORM.UPPERCASE}>Test</Subheadline>
  );

  expect(headline.hasClass('sg-subheadline--uppercase')).toBeTruthy();
});

test('extra align left', () => {
  const headline = shallow(
    <Subheadline align={SUBHEADLINE_ALIGN.LEFT}>Test</Subheadline>
  );

  expect(headline.hasClass('sg-subheadline--to-left')).toBeTruthy();
});
