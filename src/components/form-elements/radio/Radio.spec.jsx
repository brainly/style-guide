import * as React from 'react';
import Radio from './Radio';

import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Radio />', () => {
  const renderRadio = props =>
    render(<Radio onChange={() => jest.fn()} {...props} />);

  it('it renders unchecked radio input, without label', () => {
    const radio = renderRadio({});
    const radioInput = radio.getByRole('radio');

    expect(radioInput.checked).toBe(false);
    expect(radio.queryByLabelText('my label')).toBeNull();
  });

  it('checks when either input or label is clicked', () => {
    const radio = renderRadio({children: 'my label'});
    const radioInput = radio.getByRole('radio');

    expect(radioInput.checked).toBe(false);
    userEvent.click(radio.queryByLabelText('my label'));
    expect(radioInput).toEqual(document.activeElement);
    expect(radioInput.checked).toBe(true);
  });

  it('checks when either input is clicked', () => {
    const radio = renderRadio({children: 'my label'});
    const radioInput = radio.getByRole('radio');

    expect(radioInput.checked).toBe(false);
    userEvent.click(radioInput);
    expect(radioInput.checked).toBe(true);
  });

  it('it renders as initially checked', () => {
    const radio = renderRadio({checked: true});
    const radioInput = radio.getByRole('radio');

    expect(radioInput.checked).toBe(true);
  });

  it('it displays description', () => {
    const descriptionText = 'Cool radio it is';

    const radio = renderRadio({
      description: descriptionText,
      invalid: true,
      children: 'Click me pls',
    });

    expect(radio.getByText(descriptionText)).toBeTruthy();
  });

  it("it doesn't allow checking disabled radio", () => {
    const labelText = 'Click me pls';
    const onChange = jest.fn();
    const radio = renderRadio({
      children: labelText,
      checked: false,
      disabled: true,
      onChange,
    });
    const radioInput = radio.getByRole('radio');

    expect(radioInput.checked).toBe(false);
    userEvent.click(radioInput);
    expect(onChange).not.toHaveBeenCalled();
    expect(radioInput.checked).toBe(false);
    userEvent.click(radio.queryByLabelText(labelText));
    expect(onChange).not.toHaveBeenCalled();
    expect(radioInput.checked).toBe(false);
  });
});
