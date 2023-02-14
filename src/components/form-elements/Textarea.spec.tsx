import * as React from 'react';
import Textarea, {SIZE} from './Textarea';
import {render} from '@testing-library/react';

it('render', () => {
  const component = render(<Textarea />);

  expect(component.getByRole('textbox')).toBeTruthy();
});

it('full width', () => {
  const component = render(<Textarea fullWidth />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--full-width')).toEqual(true);
});

it('auto height', () => {
  const component = render(<Textarea autoHeight />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--auto-height')).toEqual(true);
});

it('simple', () => {
  const component = render(<Textarea simple />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--simple')).toEqual(true);
});

it('default validation', () => {
  const component = render(<Textarea />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--valid')).toEqual(false);
  expect(textarea.classList.contains('sg-textarea--invalid')).toEqual(false);
});

it('valid', () => {
  const component = render(<Textarea valid />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--valid')).toEqual(true);
  expect(textarea.classList.contains('sg-textarea--invalid')).toEqual(false);
});

it('invalid', () => {
  const component = render(<Textarea invalid />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--valid')).toEqual(false);
  expect(textarea.classList.contains('sg-textarea--invalid')).toEqual(true);
});

it('error when both valid and invalid', () => {
  expect(() => {
    render(<Textarea valid invalid />);
  }).toThrow();
});

it('size', () => {
  const component = render(<Textarea size={SIZE.SHORT} />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--short')).toEqual(true);
});

it('default size', () => {
  const component = render(<Textarea />);
  const textarea = component.getByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--normal')).toEqual(false);
  expect(textarea.classList.contains('sg-textarea--short')).toEqual(false);
});

it('Type', () => {
  const CustomTextarea = props => (
    <label>
      superCustom
      <textarea {...props} />
    </label>
  );

  const textarea = render(
    // eslint-disable-next-line react/jsx-no-bind
    <Textarea type={CustomTextarea} />
  );

  expect(
    textarea.getByRole('textbox', {
      name: 'superCustom',
    })
  ).toBeTruthy();
});
