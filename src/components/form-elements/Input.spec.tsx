import * as React from 'react';
import Input from './Input';
import {render} from '@testing-library/react';

test('render', () => {
  const component = render(<Input />);

  expect(component.queryByRole('textbox')).toBeTruthy();
});

test('full width', () => {
  const component = render(<Input fullWidth />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--full-width')).toEqual(true);
});

test('default validation', () => {
  const component = render(<Input />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--valid')).toEqual(false);
  expect(input.classList.contains('sg-input--invalid')).toEqual(false);
});

test('valid', () => {
  const component = render(<Input valid />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--valid')).toEqual(true);
  expect(input.classList.contains('sg-input--invalid')).toEqual(false);
});

test('invalid', () => {
  const component = render(<Input invalid />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--invalid')).toEqual(true);
  expect(input.classList.contains('sg-input--valid')).toEqual(false);
});

test('error when both valid and invalid', () => {
  expect(() => {
    render(<Input valid invalid />);
  }).toThrow();
});

test('size', () => {
  const component = render(<Input size="l" />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--l')).toEqual(true);
});

test('small size', () => {
  const component = render(<Input size="s" />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--s')).toEqual(true);
});

test('default size', () => {
  const component = render(<Input />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--l')).toEqual(false);
});

test('color', () => {
  const component = render(<Input color="white" />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--white')).toEqual(true);
});

test('default color', () => {
  const component = render(<Input />);
  const input = component.queryByRole('textbox');

  expect(input.classList.contains('sg-input--light')).toEqual(false);
});
