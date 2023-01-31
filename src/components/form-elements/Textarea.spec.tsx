import * as React from 'react';
import Textarea, {SIZE} from './Textarea';
import {render} from '@testing-library/react';

test('render', () => {
  const component = render(<Textarea />);

  expect(component.queryByRole('textbox')).toBeTruthy();
});

test('full width', () => {
  const component = render(<Textarea fullWidth />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--full-width')).toEqual(true);
});

test('auto height', () => {
  const component = render(<Textarea autoHeight />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--auto-height')).toEqual(true);
});

test('simple', () => {
  const component = render(<Textarea simple />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--simple')).toEqual(true);
});

test('default validation', () => {
  const component = render(<Textarea />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--valid')).toEqual(false);
  expect(textarea.classList.contains('sg-textarea--invalid')).toEqual(false);
});

test('valid', () => {
  const component = render(<Textarea valid />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--valid')).toEqual(true);
  expect(textarea.classList.contains('sg-textarea--invalid')).toEqual(false);
});

test('invalid', () => {
  const component = render(<Textarea invalid />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--valid')).toEqual(false);
  expect(textarea.classList.contains('sg-textarea--invalid')).toEqual(true);
});

test('error when both valid and invalid', () => {
  expect(() => {
    render(<Textarea valid invalid />);
  }).toThrow();
});

test('size', () => {
  const component = render(<Textarea size={SIZE.SHORT} />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--short')).toEqual(true);
});

test('default size', () => {
  const component = render(<Textarea />);
  const textarea = component.queryByRole('textbox');

  expect(textarea.classList.contains('sg-textarea--normal')).toEqual(false);
  expect(textarea.classList.contains('sg-textarea--short')).toEqual(false);
});

test('Type', () => {
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
    textarea.queryByRole('textbox', {
      name: 'superCustom',
    })
  ).toBeTruthy();
});
