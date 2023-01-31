import * as React from 'react';
import Text from './Text';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_WHITE_SPACE,
} from './textConsts';
import {render} from '@testing-library/react';

test('render', () => {
  const text = render(<Text>Test</Text>);

  expect(text.hasClass('sg-text')).toBeTruthy();
});
test('size', () => {
  const text = render(<Text size={TEXT_SIZE.XLARGE}>Test</Text>);

  expect(text.hasClass('sg-text--xlarge')).toBeTruthy();
});
it('size is responsive prop', () => {
  const component = render(
    <Text size={[TEXT_SIZE.SMALL, TEXT_SIZE.XXLARGE, null, TEXT_SIZE.XXXLARGE]}>
      Test
    </Text>
  );

  expect(
    component.hasClass(
      'sg-text--small md:sg-text--xxlarge xl:sg-text--xxxlarge'
    )
  ).toEqual(true);
});
test('type', () => {
  const text = 'random text';
  const component = render(<Text type={TEXT_TYPE.SPAN}>{text}</Text>);

  expect(component.find('span').contains(text)).toEqual(true);
});
test('type - label', () => {
  const text = 'random text';
  const component = render(<Text type={TEXT_TYPE.LABEL}>{text}</Text>);

  expect(component.find('label').contains(text)).toEqual(true);
});
test('color', () => {
  const text = render(<Text color="text-green-60">Test</Text>);

  expect(text.hasClass('sg-text--text-green-60')).toBeTruthy();
});
test('weight', () => {
  const text = render(<Text weight={TEXT_WEIGHT.BOLD}>Test</Text>);

  expect(text.hasClass('sg-text--bold')).toBeTruthy();
});
it('weight is responsive prop', () => {
  const component = render(
    <Text weight={[TEXT_WEIGHT.BOLD, null, TEXT_WEIGHT.REGULAR]}>Test</Text>
  );

  expect(component.hasClass('sg-text--bold lg:sg-text--regular')).toEqual(true);
});
test('transform - uppercase', () => {
  const text = render(<Text transform={TEXT_TRANSFORM.UPPERCASE}>Test</Text>);

  expect(text.hasClass('sg-text--uppercase')).toBeTruthy();
});
it('transform is responsive prop', () => {
  const component = render(
    <Text
      transform={[TEXT_TRANSFORM.UPPERCASE, null, TEXT_TRANSFORM.LOWERCASE]}
    >
      Test
    </Text>
  );

  expect(
    component.hasClass('sg-text--uppercase lg:sg-text--lowercase')
  ).toEqual(true);
});
test('transform - lowercase', () => {
  const text = render(<Text transform={TEXT_TRANSFORM.LOWERCASE}>Test</Text>);

  expect(text.hasClass('sg-text--lowercase')).toBeTruthy();
});
test('transform - capitalize', () => {
  const text = render(<Text transform={TEXT_TRANSFORM.CAPITALIZE}>Test</Text>);

  expect(text.hasClass('sg-text--capitalize')).toBeTruthy();
});
test('align - left', () => {
  const text = render(<Text align={TEXT_ALIGN.LEFT}>Test</Text>);

  expect(text.hasClass('sg-text--to-left')).toBeTruthy();
});
test('align - center', () => {
  const text = render(<Text align={TEXT_ALIGN.CENTER}>Test</Text>);

  expect(text.hasClass('sg-text--to-center')).toBeTruthy();
});
test('align - right', () => {
  const text = render(<Text align={TEXT_ALIGN.RIGHT}>Test</Text>);

  expect(text.hasClass('sg-text--to-right')).toBeTruthy();
});
test('align - justify', () => {
  const text = render(<Text align={TEXT_ALIGN.JUSTIFY}>Test</Text>);

  expect(text.hasClass('sg-text--justify')).toBeTruthy();
});
it('align is responsive prop', () => {
  const component = render(
    <Text align={[TEXT_ALIGN.JUSTIFY, null, TEXT_ALIGN.CENTER]}>Test</Text>
  );

  expect(component.hasClass('sg-text--justify lg:sg-text--to-center')).toEqual(
    true
  );
});
test('full', () => {
  const text = render(<Text full>Test</Text>);

  expect(text.hasClass('sg-text--full')).toBeTruthy();
});
it('full is responsive prop', () => {
  const component = render(<Text full={[true, null, false]}>Test</Text>);

  expect(component.hasClass('sg-text--full lg:sg-text--auto')).toEqual(true);
});
test('asContainer', () => {
  const text = render(<Text asContainer>Test</Text>);

  expect(text.hasClass('sg-text--container')).toBeTruthy();
});
test('whiteSpace', () => {
  const text1 = render(<Text whiteSpace="pre-wrap">Test</Text>);
  const text2 = render(<Text whiteSpace="pre-line">Test</Text>);

  expect(text1.hasClass('sg-text--pre-wrap')).toBeTruthy();
  expect(text2.hasClass('sg-text--pre-line')).toBeTruthy();
});
it('whiteSpace is responsive prop', () => {
  const component = render(
    <Text whiteSpace={[TEXT_WHITE_SPACE.NORMAL, TEXT_WHITE_SPACE.PRE_LINE]}>
      Test
    </Text>
  );

  expect(
    component.hasClass('sg-text--white-space-normal md:sg-text--pre-line')
  ).toEqual(true);
});
