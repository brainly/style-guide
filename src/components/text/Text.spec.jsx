import React from 'react';
import Text from './Text';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
} from './textConsts';

import {shallow} from 'enzyme';

test('render', () => {
  const text = shallow(<Text>Test</Text>);

  expect(text.hasClass('sg-text')).toBeTruthy();
});

test('size', () => {
  const text = shallow(<Text size={TEXT_SIZE.XLARGE}>Test</Text>);

  expect(text.hasClass('sg-text--xlarge')).toBeTruthy();
});

test('type', () => {
  const text = 'random text';
  const component = shallow(<Text type={TEXT_TYPE.SPAN}>{text}</Text>);

  expect(component.find('span').contains(text)).toEqual(true);
});

test('type - label', () => {
  const text = 'random text';
  const component = shallow(<Text type={TEXT_TYPE.LABEL}>{text}</Text>);

  expect(component.find('label').contains(text)).toEqual(true);
});

test('color', () => {
  const text = shallow(<Text color={TEXT_COLOR.MINT_DARK}>Test</Text>);

  expect(text.hasClass('sg-text--mint-dark')).toBeTruthy();
});

test('weight', () => {
  const text = shallow(<Text weight={TEXT_WEIGHT.BOLD}>Test</Text>);

  expect(text.hasClass('sg-text--bold')).toBeTruthy();
});

test('transform - uppercase', () => {
  const text = shallow(<Text transform={TEXT_TRANSFORM.UPPERCASE}>Test</Text>);

  expect(text.hasClass('sg-text--uppercase')).toBeTruthy();
});

test('transform - lowercase', () => {
  const text = shallow(<Text transform={TEXT_TRANSFORM.LOWERCASE}>Test</Text>);

  expect(text.hasClass('sg-text--lowercase')).toBeTruthy();
});

test('transform - capitalize', () => {
  const text = shallow(<Text transform={TEXT_TRANSFORM.CAPITALIZE}>Test</Text>);

  expect(text.hasClass('sg-text--capitalize')).toBeTruthy();
});

test('align - left', () => {
  const text = shallow(<Text align={TEXT_ALIGN.LEFT}>Test</Text>);

  expect(text.hasClass('sg-text--to-left')).toBeTruthy();
});

test('align - center', () => {
  const text = shallow(<Text align={TEXT_ALIGN.CENTER}>Test</Text>);

  expect(text.hasClass('sg-text--to-center')).toBeTruthy();
});

test('align - right', () => {
  const text = shallow(<Text align={TEXT_ALIGN.RIGHT}>Test</Text>);

  expect(text.hasClass('sg-text--to-right')).toBeTruthy();
});

test('align - justify', () => {
  const text = shallow(<Text align={TEXT_ALIGN.JUSTIFY}>Test</Text>);

  expect(text.hasClass('sg-text--justify')).toBeTruthy();
});

test('full', () => {
  const text = shallow(<Text full>Test</Text>);

  expect(text.hasClass('sg-text--full')).toBeTruthy();
});

test('asContainer', () => {
  const text = shallow(<Text asContainer>Test</Text>);

  expect(text.hasClass('sg-text--container')).toBeTruthy();
});
