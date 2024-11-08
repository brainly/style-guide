import * as React from 'react';
import Checkbox from './Checkbox';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../../axe';

describe('<Checkbox />', () => {
  // @ts-expect-error TS7006
  const renderCheckbox = props =>
    render(<Checkbox onChange={() => jest.fn()} {...props} />);

  it('renders unchecked checkbox input, without label', () => {
    const checkbox = renderCheckbox({});
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
    expect(checkbox.queryByLabelText('my label')).toBeNull();
  });

  it('has an accessible name when children provided', () => {
    const label = 'label';
    const checkbox = renderCheckbox({
      children: label,
    });

    expect(
      checkbox.getByRole('checkbox', {
        name: label,
      })
    ).toBeTruthy();
  });

  it('has an accessible name when no children provided but is wrapped in a custom label', () => {
    const label = 'label';
    const checkbox = render(
      <label>
        {label}
        <Checkbox />
      </label>
    );

    expect(
      checkbox.getByRole('checkbox', {
        name: label,
      })
    ).toBeTruthy();
  });

  it('checks/unchecks when either checkbox, input or label is clicked or space is pressed', () => {
    const checkbox = renderCheckbox({
      children: 'my label',
    });
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkbox.getByLabelText('my label'));
    expect(checkboxInput).toEqual(document.activeElement);
    expect(checkboxInput.checked).toBe(true);
    userEvent.keyboard('{space}');
    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkbox.getByText('my label'));
    expect(checkboxInput.checked).toBe(true);
  });

  it('it renders as initially checked', () => {
    const checkbox = renderCheckbox({
      defaultChecked: true,
    });
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(true);
  });

  it('it renders as initially unchecked', () => {
    const checkbox = renderCheckbox({
      defaultChecked: false,
    });
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
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

  it("it doesn't allow checking/unchecking disabled checkbox", () => {
    const labelText = 'Click me pls';
    const onChange = jest.fn();
    const checkbox = renderCheckbox({
      children: labelText,
      checked: true,
      disabled: true,
      onChange,
    });
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(true);
    userEvent.click(checkboxInput);
    expect(onChange).not.toHaveBeenCalled();
    expect(checkboxInput.checked).toBe(true);
    userEvent.click(checkbox.getByLabelText(labelText));
    expect(onChange).not.toHaveBeenCalled();
    expect(checkboxInput.checked).toBe(true);
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
      defaultChecked: false,
    });
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkbox.getByText(descriptionText));
    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkbox.getByText(errorMessageText));
    expect(checkboxInput.checked).toBe(false);
  });

  it('it does not apply animation unless initial state has changed after first render of DOM', async () => {
    const checkbox = renderCheckbox({
      defaultChecked: false,
      children: 'my label',
    });
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;
    const iconWithAnimation = checkbox.container.getElementsByClassName(
      'sg-checkbox__icon--with-animation'
    );

    expect(checkboxInput.checked).toBe(false);
    expect(iconWithAnimation.length).toBe(0);
    setTimeout(() => {
      userEvent.click(checkbox.getByLabelText('my label'));
    });
    await waitFor(() => {
      expect(checkboxInput).toEqual(document.activeElement);
    });
    expect(checkboxInput.checked).toBe(true);
    await waitFor(() => {
      expect(iconWithAnimation.length).toBe(1);
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations when children is provided', async () => {
      await testA11y(<Checkbox>item</Checkbox>);
    });
    it('should have no a11y violations when it has a custom label', async () => {
      await testA11y(
        <label>
          item
          <Checkbox />
        </label>
      );
    });
    it('should have no a11y violations when it is checked', async () => {
      await testA11y(<Checkbox checked>item</Checkbox>);
    });
    it('should have no a11y violations when it is required', async () => {
      await testA11y(<Checkbox required>item</Checkbox>);
    });
    it('should have no a11y violations when it is invalid and has error message', async () => {
      await testA11y(
        <Checkbox invalid errorMessage="error">
          item
        </Checkbox>
      );
    });
  });
});
