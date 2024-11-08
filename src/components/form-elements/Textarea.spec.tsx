import * as React from 'react';
import Textarea from './Textarea';
import {render} from '@testing-library/react';

it('render', () => {
  const component = render(<Textarea />);

  expect(component.getByRole('textbox')).toBeTruthy();
});

it('error when both valid and invalid', () => {
  expect(() => {
    render(<Textarea valid invalid />);
  }).toThrow();
});

it('Type', () => {
  // @ts-ignore TS7006
  const CustomTextarea = props => (
    <label>
      superCustom
      <textarea {...props} />
    </label>
  );

  const textarea = render(
    // eslint-disable-next-line react/jsx-no-bind
    <Textarea as={CustomTextarea} />
  );

  expect(
    textarea.getByRole('textbox', {
      name: 'superCustom',
    })
  ).toBeTruthy();
});
