import * as React from 'react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<RadioGroup />', () => {
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

  it('it renders radio group with radio buttons', () => {
    const radioGroup = renderRadioGroup({name: 'option', value: 'option-a'});

    expect(radioGroup.getByLabelText('Option A').checked).toBe(true);
    expect(radioGroup.getByLabelText('Option B').checked).toBe(false);
  });

  it('changes selected element when Radio is clicked', () => {
    const radioGroup = renderRadioGroup({name: 'option', value: 'option-a'});

    userEvent.click(radioGroup.queryByLabelText('Option B'));
    expect(radioGroup.getByLabelText('Option A').checked).toBe(false);
    expect(radioGroup.getByLabelText('Option B').checked).toBe(true);
    userEvent.click(radioGroup.queryByLabelText('Option A'));
    expect(radioGroup.getByLabelText('Option A')).toEqual(
      document.activeElement
    );
    expect(radioGroup.getByLabelText('Option A').checked).toBe(true);
    expect(radioGroup.getByLabelText('Option B').checked).toBe(false);
  });

  it('it renders radio group with error message', () => {
    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
      invalid: true,
      errorMessage: 'Error message',
    });

    expect(radioGroup.getByText('Error message')).toBeTruthy();
  });

  it("it doesn't allow checking disabled radio", () => {
    const onChange = jest.fn();

    const radioGroup = renderRadioGroup({
      name: 'option',
      value: 'option-a',
      disabled: true,
      onChange,
    });

    expect(radioGroup.getByLabelText('Option B').checked).toBe(false);
    userEvent.click(radioGroup.queryByLabelText('Option B'));
    expect(onChange).not.toHaveBeenCalled();
    expect(radioGroup.getByLabelText('Option B').checked).toBe(false);
  });
});
