import * as React from 'react';
import CardCheckbox from './CardCheckbox';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

describe('<CardCheckbox />', () => {
  it('renders unchecked checkbox input, without label', () => {
    const checkbox = render(<CardCheckbox />);
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
  });

  it('renders CardRadio with accessible name and checkbox role', () => {
    const label = 'Option A';

    render(<CardCheckbox>{label}</CardCheckbox>);
    const checkboxInput = screen.getByRole('checkbox', {
      name: label,
    }) as HTMLInputElement;

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput.checked).toBe(false);
  });

  it('does not allow checking disabled item', () => {
    render(<CardCheckbox disabled>Option A</CardCheckbox>);
    userEvent.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  it('checks/unchecks when either checkbox, input or label is clicked or space is pressed', () => {
    const checkbox = render(<CardCheckbox>my label</CardCheckbox>);
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkboxInput);
    expect(checkboxInput).toEqual(document.activeElement);

    expect(checkboxInput.checked).toBe(true);
    userEvent.keyboard('{space}');
    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkbox.getByText('my label'));
    expect(checkboxInput.checked).toBe(true);
  });

  it('allows aria-labbelledby to override accessible name', () => {
    render(
      <CardCheckbox aria-labelledby="labelid">
        Option A<span id="labelid">Custom Label Option A</span>
      </CardCheckbox>
    );

    const checkboxInput = screen.getByRole('checkbox', {
      name: 'Custom Label Option A',
    }) as HTMLInputElement;

    expect(checkboxInput).toBeInTheDocument();
  });

  it('allows descriibedby to define accessible description', () => {
    render(
      <CardCheckbox aria-describedby="descriptionid">
        Option A<span id="descriptionid">Custom Description Option A</span>
      </CardCheckbox>
    );

    const checkboxInput = screen.getByRole('checkbox', {
      description: 'Custom Description Option A',
    }) as HTMLInputElement;

    expect(checkboxInput).toBeInTheDocument();
  });

  it('it renders as checked by default', () => {
    const checkbox = render(
      <CardCheckbox defaultChecked>my label</CardCheckbox>
    );
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(true);
  });

  it('renders as unchecked by default', () => {
    const checkbox = render(
      <CardCheckbox defaultChecked={false}>my label</CardCheckbox>
    );
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
  });

  it('responds to check/uncheck when controlled', () => {
    const ControlledCheckbox = () => {
      const [checked, setChecked] = React.useState(false);

      return (
        <CardCheckbox
          checked={checked}
          onChange={() => setChecked(val => !val)}
          aria-labelledby="label"
        >
          <label id="label">placeholder</label>
        </CardCheckbox>
      );
    };

    const checkbox = render(<ControlledCheckbox />);
    const checkboxInput = checkbox.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxInput.checked).toBe(false);
    userEvent.click(checkboxInput);
    expect(checkboxInput.checked).toBe(true);
    userEvent.click(checkboxInput);
    expect(checkboxInput.checked).toBe(false);
  });

  describe('a11y', () => {
    it('should have no a11y violations when children is provided', async () => {
      await testA11y(
        <CardCheckbox aria-labelledby="label">
          <label id="label">placeholder</label>
        </CardCheckbox>
      );
    });

    it('should have no a11y violations when checked', async () => {
      await testA11y(
        <CardCheckbox aria-labelledby="label" checked>
          <label id="label">placeholder</label>
        </CardCheckbox>
      );
    });

    it('should have no a11y violations when disabled', async () => {
      await testA11y(
        <CardCheckbox aria-labelledby="label" disabled>
          <label id="label">placeholder</label>
        </CardCheckbox>
      );
    });

    it('should have no a11y violations when required', async () => {
      await testA11y(
        <CardCheckbox aria-labelledby="label" required>
          <label id="label">placeholder</label>
        </CardCheckbox>
      );
    });
  });
});
