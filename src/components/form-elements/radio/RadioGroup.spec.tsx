import * as React from 'react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<RadioGroup />', () => {
  // @ts-expect-error TS7006
  const renderRadioGroup = props =>
    render(
      <RadioGroup {...props}>
        <Radio onChange={() => jest.fn()} value="option-a">
          Option A
        </Radio>
        <Radio onChange={() => jest.fn()} value="option-b">
          Option B
        </Radio>
      </RadioGroup>
    );

  it('renders radio group with radio buttons', () => {
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
    });

    expect(radioGroup.getByRole('radiogroup')).toBeTruthy();
    expect(radioGroup.getByLabelText('Option A')).toBeChecked();
    expect(radioGroup.getByLabelText('Option B')).not.toBeChecked();
  });
  it('changes selected element when Radio is clicked and has only one checked Radio at a time', () => {
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
    });

    userEvent.click(radioGroup.getByLabelText('Option B'));
    expect(radioGroup.getByLabelText('Option A')).not.toBeChecked();
    expect(radioGroup.getByLabelText('Option B')).toBeChecked();
    userEvent.click(radioGroup.getByLabelText('Option A'));
    expect(radioGroup.getByLabelText('Option A')).toEqual(
      document.activeElement
    );
    expect(radioGroup.getByLabelText('Option A')).toBeChecked();
    expect(radioGroup.getByLabelText('Option B')).not.toBeChecked();
  });
  it('renders radio group with error message', () => {
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
      invalid: true,
      errorMessage: 'Error message',
    });

    expect(radioGroup.getByText('Error message')).toBeTruthy();
  });
  it("doesn't allow checking disabled radio", () => {
    const onChange = jest.fn();
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
      disabled: true,
      onChange,
    });

    expect(radioGroup.getByLabelText('Option B')).not.toBeChecked();
    userEvent.click(radioGroup.getByLabelText('Option B'));
    expect(onChange).not.toHaveBeenCalled();
    expect(radioGroup.getByLabelText('Option B')).not.toBeChecked();
  });
  it('checked radio can be changed on controlled radio group', async () => {
    const {container, getByLabelText, rerender} = renderRadioGroup({
      name: 'option',
      value: 'option-a',
    });
    const iconsWithAnimation = container.getElementsByClassName(
      'sg-radio__circle--with-animation'
    );

    expect(iconsWithAnimation.length).toBe(0);
    expect(getByLabelText('Option A')).toBeChecked();
    expect(getByLabelText('Option B')).not.toBeChecked();
    // re-render the same component with option-b checked
    rerender(
      <RadioGroup
        onChange={() => jest.fn()}
        {...{
          name: 'option',
          value: 'option-b',
        }}
      >
        <Radio onChange={() => jest.fn()} value="option-a">
          Option A
        </Radio>
        <Radio onChange={() => jest.fn()} value="option-b">
          Option B
        </Radio>
      </RadioGroup>
    );
    expect(getByLabelText('Option A')).not.toBeChecked();
    expect(getByLabelText('Option B')).toBeChecked();
  });
  it('it does not apply animation unless initial state has changed after first render of DOM', async () => {
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
    });
    const iconsWithAnimation = radioGroup.container.getElementsByClassName(
      'sg-radio__circle--with-animation'
    );

    expect(iconsWithAnimation.length).toBe(0);

    requestAnimationFrame(() => {
      userEvent.click(radioGroup.getByLabelText('Option B'));
    });
    await waitFor(() => expect(iconsWithAnimation.length).toBe(2));
  });
  it('has an accessible name', () => {
    const onChange = jest.fn();
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
      'aria-label': 'RadioGroup name',
      onChange,
    });

    expect(
      radioGroup.getByRole('radiogroup', {
        name: 'RadioGroup name',
      })
    ).toBeTruthy();
  });
  it('has an accessible description', () => {
    const onChange = jest.fn();
    const radioGroup = render(
      <div>
        <RadioGroup onChange={onChange} aria-describedby="rg-desc">
          <Radio onChange={() => jest.fn()} value="option-a">
            Option A
          </Radio>
          <Radio onChange={() => jest.fn()} value="option-b">
            Option B
          </Radio>
        </RadioGroup>
        <p id="rg-desc">RadioGroup description</p>
      </div>
    );

    expect(
      radioGroup.getByRole('radiogroup', {
        description: 'RadioGroup description',
      })
    ).toBeTruthy();
  });
});
