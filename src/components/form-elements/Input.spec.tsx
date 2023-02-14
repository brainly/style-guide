import * as React from 'react';
import Input from './Input';
import {render} from '@testing-library/react';

it('render', () => {
  const component = render(<Input />);

  expect(component.getByRole('textbox')).toBeTruthy();
});

it('full width', () => {
  const component = render(<Input fullWidth />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--full-width')).toEqual(true);
});

it('default validation', () => {
  const component = render(<Input />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--valid')).toEqual(false);
  expect(input.classList.contains('sg-input--invalid')).toEqual(false);
});

it('valid', () => {
  const component = render(<Input valid />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--valid')).toEqual(true);
  expect(input.classList.contains('sg-input--invalid')).toEqual(false);
});

it('invalid', () => {
  const component = render(<Input invalid />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--invalid')).toEqual(true);
  expect(input.classList.contains('sg-input--valid')).toEqual(false);
});

it('error when both valid and invalid', () => {
  expect(() => {
    render(<Input valid invalid />);
  }).toThrow();
});

it('size', () => {
  const component = render(<Input size="l" />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--l')).toEqual(true);
});

it('small size', () => {
  const component = render(<Input size="s" />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--s')).toEqual(true);
});

it('default size', () => {
  const component = render(<Input />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--l')).toEqual(false);
});

it('color', () => {
  const component = render(<Input color="white" />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--white')).toEqual(true);
});

it('default color', () => {
  const component = render(<Input />);
  const input = component.getByRole('textbox');

  expect(input.classList.contains('sg-input--light')).toEqual(false);
});
