import * as React from 'react';
import Headline, {
  HEADLINE_SIZE,
  HEADLINE_TYPE,
  TEXT_COLOR,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from './Headline';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const headline = shallow(<Headline>Test</Headline>);

  expect(headline.hasClass('sg-headline')).toBeTruthy();
});

test('size', () => {
  const headline = shallow(
    <Headline size={HEADLINE_SIZE.SMALL}>Test</Headline>
  );

  expect(headline.hasClass('sg-headline--small')).toBeTruthy();
});

test('type', () => {
  const headline = mount(<Headline type={HEADLINE_TYPE.H3}>Test</Headline>);

  expect(headline.props().type).toEqual(HEADLINE_TYPE.H3);
});

test('text-white', () => {
  const text = shallow(
    <Headline color={TEXT_COLOR['text-white']}>Test</Headline>
  );

  expect(text.hasClass('sg-headline--text-white')).toBeTruthy();
});

test('default size', () => {
  const headline = shallow(
    <Headline size={HEADLINE_SIZE.MEDIUM}>Test</Headline>
  );

  expect(headline.hasClass('sg-headline--medium')).toBeFalsy();
});

test('transform uppercase', () => {
  const headline = shallow(
    <Headline transform={HEADLINE_TRANSFORM.UPPERCASE}>Test</Headline>
  );

  expect(headline.hasClass('sg-headline--uppercase')).toBeTruthy();
});

test('extra bold', () => {
  const headline = shallow(<Headline extraBold>Test</Headline>);

  expect(headline.hasClass('sg-headline--extra-bold')).toBeTruthy();
});

test('extra align left', () => {
  const headline = shallow(
    <Headline align={HEADLINE_ALIGN.LEFT}>Test</Headline>
  );

  expect(headline.hasClass('sg-headline--to-left')).toBeTruthy();
});
