import React from 'react';
import Input from './Input';
import {shallow} from 'enzyme';

test('render', () => {
  const component = shallow(<Input />);
  const input = component.find('input');

  expect(input.hasClass('sg-input')).toEqual(true);
});

test('full width', () => {
  const component = shallow(<Input fullWidth />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--full-width')).toEqual(true);
});

test('default validation', () => {
  const component = shallow(<Input />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--valid')).toEqual(false);
  expect(input.hasClass('sg-input--invalid')).toEqual(false);
});

test('valid', () => {
  const component = shallow(<Input valid />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--valid')).toEqual(true);
  expect(input.hasClass('sg-input--invalid')).toEqual(false);
});

test('invalid', () => {
  const component = shallow(<Input invalid />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--invalid')).toEqual(true);
  expect(input.hasClass('sg-input--valid')).toEqual(false);
});

test('error when both valid and invalid', () => {
  expect(() => {
    shallow(<Input valid invalid />);
  }).toThrow();
});

test('size', () => {
  const component = shallow(<Input size="l" />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--l')).toEqual(true);
});

test('default size', () => {
  const component = shallow(<Input />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--l')).toEqual(false);
});

test('color', () => {
  const component = shallow(<Input color="white" />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--white')).toEqual(true);
});

test('default color', () => {
  const component = shallow(<Input />);
  const input = component.find('input');

  expect(input.hasClass('sg-input--light')).toEqual(false);
});
