import * as React from 'react';
import {CardCheckbox} from './Card';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

describe('<CardCheckbox />', () => {
  it('renders unchecked checkbox input, without label', () => {
    const checkbox = render(<CardCheckbox />);
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
    expect(checkbox.queryByLabelText('my label')).not.toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const onChange = jest.fn();
    const checkbox = render(<CardCheckbox onChange={onChange} />);
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    userEvent.click(checkboxInput);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  describe('a11y', () => {
    it('should have no a11y violations when children is provided', async () => {
      await testA11y(
        <CardCheckbox aria-labelledby="label">
          <label id="label">placeholder</label>
        </CardCheckbox>
      );
    });
  });
});
