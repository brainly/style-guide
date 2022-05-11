import * as React from 'react';
import Checkbox from './Checkbox';

import {render} from '@testing-library/react';

describe('<Checkbox />', () => {
  const renderCheckbox = props =>
    render(<Checkbox onChange={() => jest.fn()} {...props} />);

  it('it renders unchecked checkbox input, without label', () => {
    const checkbox = renderCheckbox({});
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.checked).toBe(false);
    expect(checkbox.queryByLabelText('my label')).toBeNull();
  });

  it('checks/unchecks when either input or label is clicked', () => {
    const checkbox = renderCheckbox({children: 'my label'});
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.checked).toBe(false);
    expect(checkbox.queryByLabelText('my label')).toBeTruthy();
    checkboxInput.click();
    expect(checkboxInput.checked).toBe(true);
    checkbox.queryByLabelText('my label').click();
    expect(checkboxInput.checked).toBe(false);
  });

  it('it renders as initially checked', () => {
    const checkbox = renderCheckbox({defaultChecked: true});
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.checked).toBe(true);
  });

  it('it renders as initially checked', () => {
    const checkbox = renderCheckbox({defaultChecked: true});
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.checked).toBe(true);
  });

  it('it has custom id generated', () => {
    const checkbox = renderCheckbox();
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.id).toBeTruthy();
  });

  it('it displays error message and description', () => {
    const descriptionText = 'Cool checkbox it is';
    const errorMessageText = 'Oops.';

    const checkbox = renderCheckbox({
      id: 'myid',
      description: descriptionText,
      invalid: true,
      errorMessage: errorMessageText,
      children: 'Click me pls',
    });
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.id).toEqual('myid');
    expect(checkbox.getByText(descriptionText)).toBeTruthy();
    expect(checkbox.getByText(descriptionText).id).toEqual('myid-description');
    expect(checkbox.getByText(errorMessageText)).toBeTruthy();
    expect(checkbox.getByText(errorMessageText).id).toEqual('myid-errorText');
  });

  it("it doesn't check/uncheck when either description or error message is clicked", () => {
    const descriptionText = 'Cool checkbox it is';
    const errorMessageText = 'Oops.';
    const labelText = 'Click me pls';

    const checkbox = renderCheckbox({
      description: descriptionText,
      invalid: true,
      errorMessage: errorMessageText,
      children: labelText,
      checked: false,
    });
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.checked).toBe(false);
    checkbox.getByText(descriptionText).click();
    expect(checkboxInput.checked).toBe(false);
    checkbox.getByText(errorMessageText).click();
    expect(checkboxInput.checked).toBe(false);
    checkbox.queryByLabelText(labelText).click();
    expect(checkboxInput.checked).toBe(true);
  });

  it("it doesn't allow checking/unchecking disabled checkbox", () => {
    const labelText = 'Click me pls';
    const onChange = jest.fn();
    const checkbox = renderCheckbox({
      children: labelText,
      checked: true,
      disabled: true,
      onChange,
    });
    const checkboxInput = checkbox.getByRole('checkbox');

    expect(checkboxInput.checked).toBe(true);
    checkboxInput.click();
    expect(onChange).not.toHaveBeenCalled();
    expect(checkboxInput.checked).toBe(true);
    checkbox.queryByLabelText(labelText).click();
    expect(onChange).not.toHaveBeenCalled();
    expect(checkboxInput.checked).toBe(true);
  });
});
