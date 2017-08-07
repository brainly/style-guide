import React from 'react';
import Box, {COLOR, PADDING} from './Box';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.hasClass('sg-box')).toEqual(true);
});

test('colors', () => {
  const color = COLOR.LAVENDER;
  const box = shallow(
    <Box color={color}>some text</Box>
  );

  expect(box.hasClass(`sg-box--${color}`)).toEqual(true);
});

test('shadow', () => {
  const boxComponent = <Box shadow={true}>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.shadow).toEqual(true);
  expect(box.hasClass('sg-box--with-shadow')).toEqual(true);
});

test('border', () => {
  const boxComponent = <Box border={true}>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(true);
  expect(box.hasClass('sg-box--no-border')).toEqual(false);
});

test('border', () => {
  const boxComponent = <Box border={false}>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(false);
  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});

test('no colors => default border on ', () => {
  const boxComponent = <Box>some text</Box>;
  const box = shallow(boxComponent);

  expect(box.hasClass('sg-box--no-border')).toEqual(false);
});

test(' colors => default border off', () => {
  const color = COLOR.LAVENDER;
  const box = shallow(
    <Box color={color}>some text</Box>
  );

  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});

test('default padding', () => {
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.hasClass(`sg-box--${PADDING.LARGE}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.SMALL}`)).toEqual(false);
});

test('xsmall padding', () => {
  const padding = PADDING.XSMALL;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.hasClass('sg-box--xsmall-padding')).toEqual(true);
});

test('small padding', () => {
  const padding = PADDING.SMALL;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.hasClass('sg-box--small-padding')).toEqual(true);
});


test('large padding', () => {
  const padding = PADDING.LARGE;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.hasClass('sg-box--large-padding')).toEqual(true);
});

test('no min height', () => {
  const box = shallow(
    <Box noMinHeight={true}>some text</Box>
  );

  expect(box.hasClass('sg-box--no-min-height')).toEqual(true);
});

test('full width', () => {
  const box = shallow(
    <Box full={true}>some text</Box>
  );

  expect(box.hasClass('sg-box--full')).toEqual(true);
});

test('image container', () => {
  const imgSrc = 'https://source.unsplash.com/100x100/?man';

  const box = shallow(
    <Box imgSrc={imgSrc}/>
  );

  expect(box.hasClass('sg-box--image-wrapper')).toEqual(true);
  expect(box.find('.sg-box__image')).toHaveLength(1);
  expect(box.find('.sg-box__hole')).toHaveLength(0);
});

test('standard box, no image container', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.hasClass('sg-box--image-wrapper')).toEqual(false);
  expect(box.find('.sg-box__image')).toHaveLength(0);
  expect(box.find('.sg-box__hole')).toHaveLength(1);
});
