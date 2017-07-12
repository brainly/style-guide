import React from 'react';
import TextInput, {SIZE, COLOR, VALIDATION} from './TextInput';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <TextInput/>
  );

  expect(button.hasClass('sg-input')).toEqual(true);
});

test('full width', () => {
  const button = shallow(
    <TextInput fullWidth={true}/>
  );

  expect(button.hasClass('sg-input--full-width')).toEqual(true);
});


test('default validation', () => {
  const button = shallow(
    <TextInput/>
  );

  expect(button.hasClass('sg-input--valid')).toEqual(false);
  expect(button.hasClass('sg-input--invalid')).toEqual(false);
});


test('valid', () => {
  const button = shallow(
    <TextInput valid={VALIDATION.VALID}/>
  );

  expect(button.hasClass('sg-input--valid')).toEqual(true);
  expect(button.hasClass('sg-input--invalid')).toEqual(false);
});


test('invalid', () => {
  const button = shallow(
    <TextInput valid={VALIDATION.INVALID}/>
  );

  expect(button.hasClass('sg-input--valid')).toEqual(false);
  expect(button.hasClass('sg-input--invalid')).toEqual(true);
});


test('size', () => {
  const button = shallow(
    <TextInput size={SIZE.LARGE}/>
  );

  expect(button.hasClass('sg-input--large')).toEqual(true);
});


test('default size', () => {
  const button = shallow(
    <TextInput/>
  );

  expect(button.hasClass('sg-input--normal')).toEqual(false);
  expect(button.hasClass('sg-input--large')).toEqual(false);
});


test('color', () => {
  const button = shallow(
    <TextInput color={COLOR.LIGHT}/>
  );

  expect(button.hasClass('sg-input--light')).toEqual(true);
});


test('default color', () => {
  const button = shallow(
    <TextInput/>
  );

  expect(button.hasClass('sg-input--normal')).toEqual(false);
  expect(button.hasClass('sg-input--light')).toEqual(false);
});

