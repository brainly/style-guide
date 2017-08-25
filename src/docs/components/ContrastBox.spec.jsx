import React from 'react';
import {shallow} from 'enzyme';
import ContrastBox from './ContrastBox';

test('render', () => {
  const contrastBox = shallow(
    <ContrastBox>some text</ContrastBox>
  );

  expect(contrastBox.hasClass('docs-block__contrast-box')).toEqual(true);
});

test('error when no children', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(
    <ContrastBox />
  );
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('to bottom', () => {
  const contrastBox = shallow(
    <ContrastBox toBottom>some text</ContrastBox>
  );

  expect(contrastBox.hasClass('docs-block__contrast-box--to-bottom')).toEqual(true);
});

test('small padding', () => {
  const contrastBox = shallow(
    <ContrastBox smallPadding>some text</ContrastBox>
  );

  expect(contrastBox.hasClass('docs-block__contrast-box--small-padding')).toEqual(true);
});

test('light', () => {
  const contrastBox = shallow(
    <ContrastBox light>some text</ContrastBox>
  );

  expect(contrastBox.hasClass('docs-block__contrast-box--light')).toEqual(true);
});

test('full width', () => {
  const contrastBox = shallow(
    <ContrastBox fullWidth>some text</ContrastBox>
  );

  expect(contrastBox.hasClass('docs-block__contrast-box--full-width')).toEqual(true);
});

test('narrow', () => {
  const contrastBox = shallow(
    <ContrastBox narrow>some text</ContrastBox>
  );

  expect(contrastBox.hasClass('docs-block__contrast-box--narrow')).toEqual(true);
});
