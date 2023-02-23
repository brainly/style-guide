import * as React from 'react';
import Input from './Input';
import {render} from '@testing-library/react';

it('render', () => {
  const component = render(<Input />);

  expect(component.getByRole('textbox')).toBeTruthy();
});

it('error when both valid and invalid', () => {
  expect(() => {
    render(<Input valid invalid />);
  }).toThrow();
});
