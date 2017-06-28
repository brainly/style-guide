import React from 'react';
import Box, {colors, paddings} from './Box';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.hasClass('sg-box')).toEqual(true);
});

test('when children create hole box', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.find('.sg-box__hole')).toHaveLength(1);
});

test('when no children no create hole box', () => {
  const box = shallow(<Box/>);

  expect(box.find('.sg-box__hole')).toHaveLength(0);
});

test('colors', () => {
  const color = colors.lavender;
  const box = shallow(
    <Box color={color}>some text</Box>
  );

  expect(box.hasClass(`sg-box--${color}`)).toEqual(true);
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
  const color = colors.lavender;
  const box = shallow(
    <Box color={color}>some text</Box>
  );

  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});

test('default padding', () => {
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.hasClass(`sg-box--${paddings.large}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${paddings.small}`)).toEqual(false);
});

test('small padding', () => {
  const padding = paddings.small;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.hasClass(`sg-box--${paddings.small}`)).toEqual(true);
});


test('large padding', () => {
  const padding = paddings.large;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.hasClass(`sg-box--${paddings.large}`)).toEqual(true);
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
});

