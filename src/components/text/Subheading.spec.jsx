import * as React from 'react';
import Subheading from './Subheading';
import {mount, shallow} from 'enzyme';
import {
  SUBHEADING_SIZE,
  SUBHEADING_TYPE,
  SUBHEADING_COLOR,
  SUBHEADING_ALIGN,
  SUBHEADING_TRANSFORM,
} from './subheadingConsts';

test('render', () => {
  const subheading = shallow(<Subheading>Test</Subheading>);

  expect(subheading.hasClass('sg-subheading')).toBeTruthy();
});

test('size', () => {
  const headline = shallow(
    <Subheading size={SUBHEADING_SIZE.SMALL}>Test</Subheading>
  );

  expect(headline.hasClass('sg-subheading--small')).toBeTruthy();
});

test('type', () => {
  const headline = mount(
    <Subheading type={SUBHEADING_TYPE.H3}>Test</Subheading>
  );

  expect(headline.props().type).toEqual(SUBHEADING_TYPE.H3);
});

test('light', () => {
  const text = shallow(
    <Subheading color={SUBHEADING_COLOR.WHITE}>Test</Subheading>
  );

  expect(text.hasClass('sg-subheading--white')).toBeTruthy();
});

test('default size', () => {
  const headline = shallow(
    <Subheading size={SUBHEADING_SIZE.MEDIUM}>Test</Subheading>
  );

  expect(headline.hasClass('sg-subheading--medium')).toBeFalsy();
});

test('transform uppercase', () => {
  const headline = shallow(
    <Subheading transform={SUBHEADING_TRANSFORM.UPPERCASE}>Test</Subheading>
  );

  expect(headline.hasClass('sg-subheading--uppercase')).toBeTruthy();
});

test('extra align left', () => {
  const headline = shallow(
    <Subheading align={SUBHEADING_ALIGN.LEFT}>Test</Subheading>
  );

  expect(headline.hasClass('sg-subheading--to-left')).toBeTruthy();
});
