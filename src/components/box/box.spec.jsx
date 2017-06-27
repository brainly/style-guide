import React from 'react';
import Box, {colors, paddings} from './Box';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.hasClass('sg-box')).toEqual(true);
});

test('error when no children', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Box></Box>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('colors', () => {
  const color = colors.gray;
  const box = shallow(
    <Box color={color}>some text</Box>
  );

  expect(box.hasClass(`sg-box--${color}`)).toEqual(true);
});


test('no colors => default border', () => {
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.props().border).toEqual(true);
});


test(' colors => default no border', () => {
  const color = colors.gray;
  const box = shallow(
    <Box color={color}>some text</Box>
  );

  expect(box.props().border).toEqual(false);
});

test('default padding', () => {
  const padding = paddings.normal;
  const box = shallow(
    <Box>some text</Box>
  );

  expect(box.props().padding).toEqual(padding);
});


test('small padding', () => {
  const padding = paddings.small;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.props().padding).toEqual(padding);
});


test('large padding', () => {
  const padding = paddings.large;
  const box = shallow(
    <Box padding={padding}>some text</Box>
  );

  expect(box.props().padding).toEqual(padding);
});

test('full width', () => {
  const box = shallow(
    <Box fullWidth={true}>some text</Box>
  );

  expect(box.hasClass('sg-box--full-width')).toEqual(true);
});


test('image container', () => {
  const box = shallow(
    <Box image={true}>some text</Box>
  );

  expect(box.hasClass('sg-box--image-wrapper')).toEqual(true);
});

