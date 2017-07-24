import React from 'react';
import Input, {SIZE, COLOR} from './Input';
import {shallow} from 'enzyme';

test('render', () => {
  const input = shallow(
    <Input/>
  );

  expect(input.hasClass('sg-input')).toEqual(true);
});

test('full width', () => {
  const input = shallow(
    <Input fullWidth={true}/>
  );

  expect(input.hasClass('sg-input--full-width')).toEqual(true);
});


test('default validation', () => {
  const input = shallow(
    <Input/>
  );

  expect(input.hasClass('sg-input--valid')).toEqual(false);
  expect(input.hasClass('sg-input--invalid')).toEqual(false);
});


test('valid', () => {
  const input = shallow(
    <Input valid={true}/>
  );

  expect(input.hasClass('sg-input--valid')).toEqual(true);
  expect(input.hasClass('sg-input--invalid')).toEqual(false);
});


test('invalid', () => {
  const input = shallow(
    <Input invalid={true}/>
  );

  expect(input.hasClass('sg-input--invalid')).toEqual(true);
  expect(input.hasClass('sg-input--valid')).toEqual(false);
});

test('error when both valid and invalid', () => {
  expect(() => {
    shallow(<Input valid={true} invalid={true}/>);
  }).toThrow();
});

test('size', () => {
  const input = shallow(
    <Input size={SIZE.LARGE}/>
  );

  expect(input.hasClass('sg-input--large')).toEqual(true);
});


test('default size', () => {
  const input = shallow(
    <Input/>
  );

  expect(input.hasClass('sg-input--normal')).toEqual(false);
  expect(input.hasClass('sg-input--large')).toEqual(false);
});


test('color', () => {
  const input = shallow(
    <Input color={COLOR.LIGHT}/>
  );

  expect(input.hasClass('sg-input--light')).toEqual(true);
});


test('default color', () => {
  const input = shallow(
    <Input/>
  );

  expect(input.hasClass('sg-input--normal')).toEqual(false);
  expect(input.hasClass('sg-input--light')).toEqual(false);
});

