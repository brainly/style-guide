import * as React from 'react';
import Radio from './Radio';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../../axe';

describe('<Radio />', () => {
  // @ts-ignore TS7006
  const renderRadio = props =>
    render(<Radio onChange={() => jest.fn()} {...props} />);

  it('renders unchecked radio input, without label', () => {
    const radio = renderRadio({});
    const radioInput = radio.getByRole('radio') as HTMLInputElement;

    expect(radioInput.checked).toBe(false);
  });

  it('it renders a label', () => {
    const radio = renderRadio({
      children: 'my label',
    });

    expect(radio.queryByLabelText('my label')).toBeTruthy();
  });

  it('checks when label is clicked', () => {
    const radio = renderRadio({
      children: 'my label',
    });
    const radioInput = radio.getByRole('radio', {
      name: 'my label',
    }) as HTMLInputElement;

    expect(radioInput.checked).toBe(false);
    userEvent.click(radio.getByText('my label'));
    expect(radioInput).toEqual(document.activeElement);
    expect(radioInput.checked).toBe(true);
  });

  it('checks when space is pressed', () => {
    const radio = renderRadio({
      children: 'my label',
    });
    const radioInput = radio.getByRole('radio') as HTMLInputElement;

    radioInput.focus();
    expect(radioInput.checked).toBe(false);
    userEvent.keyboard('{space}');
    expect(radioInput.checked).toBe(true);
  });

  it('checks when input is clicked', () => {
    const radio = renderRadio({
      children: 'my label',
    });
    const radioInput = radio.getByRole('radio') as HTMLInputElement;

    expect(radioInput.checked).toBe(false);
    userEvent.click(radioInput);
    expect(radioInput.checked).toBe(true);
  });

  it('renders as initially checked', () => {
    const radio = renderRadio({
      checked: true,
    });
    const radioInput = radio.getByRole('radio') as HTMLInputElement;

    expect(radioInput.checked).toBe(true);
  });

  it('displays description', () => {
    const descriptionText = 'Cool radio it is';
    const radio = renderRadio({
      description: descriptionText,
      children: 'Click me pls',
    });

    expect(radio.getByText(descriptionText)).toBeTruthy();
    expect(
      radio.getByRole('radio', {
        description: descriptionText,
      })
    ).toBeTruthy();
  });

  it("doesn't allow checking disabled radio", () => {
    const labelText = 'Click me pls';
    const onChange = jest.fn();
    const radio = renderRadio({
      children: labelText,
      checked: false,
      disabled: true,
      onChange,
    });
    const radioInput = radio.getByRole('radio') as HTMLInputElement;

    expect(radioInput.checked).toBe(false);
    userEvent.click(radioInput);
    expect(onChange).not.toHaveBeenCalled();
    expect(radioInput.checked).toBe(false);
    userEvent.click(radio.getByText(labelText));
    expect(onChange).not.toHaveBeenCalled();
    expect(radioInput.checked).toBe(false);
  });

  it('it does not apply animation unless initial state has changed after first render of DOM', async () => {
    const radio = renderRadio({
      children: 'my label',
    });
    const radioInput = radio.getByRole('radio') as HTMLInputElement;
    const iconWithAnimation = radio.container.getElementsByClassName(
      'sg-radio__circle--with-animation'
    );

    expect(radioInput.checked).toBe(false);
    expect(iconWithAnimation.length).toBe(0);
    setTimeout(() => {
      userEvent.click(radio.getByLabelText('my label'));
    });
    await waitFor(() => {
      expect(radioInput).toEqual(document.activeElement);
    });
    expect(radioInput.checked).toBe(true);
    expect(iconWithAnimation.length).toBe(1);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Radio onChange={() => jest.fn()}>Radio</Radio>);
    });

    it('should have no a11y violations with external label', async () => {
      await testA11y(
        <label>
          Radio
          <Radio onChange={() => jest.fn()} />
        </label>
      );
    });

    it('should have no a11y violations when description is provided', async () => {
      await testA11y(
        <Radio onChange={() => jest.fn()} description="Check me">
          Radio
        </Radio>
      );
    });

    it('should have no a11y violations when is checked and required', async () => {
      await testA11y(
        <div>
          <Radio onChange={() => jest.fn()} name="test" checked>
            Radio
          </Radio>
          <Radio onChange={() => jest.fn()} name="test" required>
            Radio
          </Radio>
        </div>
      );
    });
  });
});
