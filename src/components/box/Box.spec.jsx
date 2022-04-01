import * as React from 'react';
import {shallow} from 'enzyme';

import Box, {PADDING} from './Box';

test('render', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.hasClass('sg-box')).toEqual(true);
});

test('colors', () => {
  const box = shallow(<Box color="green-40">some text</Box>);

  expect(box.hasClass(`sg-box--green-40`)).toEqual(true);
});

test('shadow', () => {
  const boxComponent = <Box shadow>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.shadow).toEqual(true);
  expect(box.hasClass('sg-box--shadow')).toEqual(true);
});

test('border', () => {
  const boxComponent = <Box border>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(true);
  expect(box.hasClass('sg-box--border')).toEqual(true);
});

test('border', () => {
  const boxComponent = <Box border={false}>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(false);
  expect(box.hasClass('sg-box--border')).toEqual(false);
});

test('borderColor', () => {
  const boxComponent = (
    <Box border borderColor="green-40">
      some text
    </Box>
  );
  const box = shallow(boxComponent);

  expect(box.hasClass('sg-box--border-color-green-40')).toEqual(true);
});

test('default padding', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.hasClass(`sg-box--padding-${PADDING.xxs}`)).toEqual(false);
  expect(box.hasClass(`sg-box--padding-${PADDING.xs}`)).toEqual(false);
  expect(box.hasClass(`sg-box--padding-${PADDING.s}`)).toEqual(false);
  expect(box.hasClass(`sg-box--padding-${PADDING.m}`)).toEqual(true);
  expect(box.hasClass(`sg-box--padding-${PADDING.l}`)).toEqual(false);
  expect(box.hasClass(`sg-box--padding-${PADDING.xl}`)).toEqual(false);
});

test('padding xxs', () => {
  const box = shallow(<Box padding={PADDING.xxs}>some text</Box>);

  expect(box.hasClass('sg-box--padding-xxs')).toEqual(true);
});

test('padding xs', () => {
  const box = shallow(<Box padding={PADDING.xs}>some text</Box>);

  expect(box.hasClass('sg-box--padding-xs')).toEqual(true);
});

test('padding s', () => {
  const box = shallow(<Box padding={PADDING.s}>some text</Box>);

  expect(box.hasClass('sg-box--padding-s')).toEqual(true);
});

test('padding m', () => {
  const box = shallow(<Box padding={PADDING.m}>some text</Box>);

  expect(box.hasClass('sg-box--padding-m')).toEqual(true);
});

test('padding l', () => {
  const box = shallow(<Box padding={PADDING.l}>some text</Box>);

  expect(box.hasClass('sg-box--padding-l')).toEqual(true);
});

test('padding xl', () => {
  const box = shallow(<Box padding={PADDING.xl}>some text</Box>);

  expect(box.hasClass('sg-box--padding-xl')).toEqual(true);
});

test('no padding', () => {
  const box = shallow(<Box padding={null}>some text</Box>);

  expect(box.hasClass(`sg-box--${PADDING.xxs}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.xs}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.s}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.m}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.l}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.xl}`)).toEqual(false);
});

it('shadow is responsive prop', () => {
  const component = shallow(<Box shadow={[true, false, null, true]}>box</Box>);

  expect(
    component.hasClass('sg-box--shadow md:sg-box--no-shadow xl:sg-box--shadow')
  ).toEqual(true);
});

it('noBorderRadius is responsive prop', () => {
  const component = shallow(
    <Box noBorderRadius={[false, true, null, false]}>box</Box>
  );

  expect(
    component.hasClass(
      'sg-box--border-radius md:sg-box--no-border-radius xl:sg-box--border-radius'
    )
  ).toEqual(true);
});
