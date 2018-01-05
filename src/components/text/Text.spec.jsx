import React from 'react';
import Text, {TYPE, SIZE, COLOR, WEIGHT, TEXT_ALIGN, TEXT_TRANSFORM} from './Text';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const text = shallow(
    <Text>Test</Text>
  );

  expect(text.hasClass('sg-text')).toBeTruthy();
});

test('size', () => {
  const text = shallow(
    <Text size={SIZE.STANDOUT}>Test</Text>
  );

  expect(text.hasClass('sg-text--standout')).toBeTruthy();
});

test('type', () => {
  const text = mount(
    <Text type={TYPE.SPAN}>Test</Text>
  );

  expect(text.props().type).toEqual(TYPE.SPAN);
});

test('color', () => {
  const text = shallow(
    <Text color={COLOR.MINT}>Test</Text>
  );

  expect(text.hasClass('sg-text--mint')).toBeTruthy();
});

test('weight', () => {
  const text = shallow(
    <Text weight={WEIGHT.BOLD}>Test</Text>
  );

  expect(text.hasClass('sg-text--emphasised')).toBeTruthy();
});

test('transform - uppercase', () => {
  const text = shallow(
    <Text transform={TEXT_TRANSFORM.UPPERCASE}>Test</Text>
  );

  expect(text.hasClass('sg-text--uppercase')).toBeTruthy();
});

test('transform - lowercase', () => {
  const text = shallow(
    <Text transform={TEXT_TRANSFORM.LOWERCASE}>Test</Text>
  );

  expect(text.hasClass('sg-text--lowercase')).toBeTruthy();
});

test('transform - capitalize', () => {
  const text = shallow(
    <Text transform={TEXT_TRANSFORM.CAPITALIZE}>Test</Text>
  );

  expect(text.hasClass('sg-text--capitalize')).toBeTruthy();
});

test('align - left', () => {
  const text = shallow(
    <Text align={TEXT_ALIGN.LEFT}>Test</Text>
  );

  expect(text.hasClass('sg-text--to-left')).toBeTruthy();
});

test('align - center', () => {
  const text = shallow(
    <Text align={TEXT_ALIGN.CENTER}>Test</Text>
  );

  expect(text.hasClass('sg-text--to-center')).toBeTruthy();
});

test('align - right', () => {
  const text = shallow(
    <Text align={TEXT_ALIGN.RIGHT}>Test</Text>
  );

  expect(text.hasClass('sg-text--to-right')).toBeTruthy();
});

test('full', () => {
  const text = shallow(
    <Text full>Test</Text>
  );

  expect(text.hasClass('sg-text--full')).toBeTruthy();
});
