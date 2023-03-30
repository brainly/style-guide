import * as React from 'react';
import Chip from './Chip';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

describe('<Chip />', () => {
  it('has an accessible description', () => {
    const description = 'This is a secription';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chip = render(
      <div>
        <Chip aria-describedby="desc" value="label" name="name">
          label
        </Chip>
        <p id="desc">{description}</p>
      </div>
    );

    expect(screen.getByRole('radio', {description})).toBeInTheDocument();
  });
  describe('single select', () => {
    it('renders uncontrolled chip with accessible name and radio role', () => {
      const label = 'physics';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const chip = render(
        <Chip value={label} name={label}>
          {label}
        </Chip>
      );

      const chipInput = screen.getByRole('radio', {
        name: label,
      }) as HTMLInputElement;

      expect(chipInput).toBeInTheDocument();
      expect(chipInput.checked).toBe(false);
      expect(chipInput.getAttribute('value')).toBe(label);
      expect(chipInput.getAttribute('name')).toBe(label);
    });

    it('checks/unchecks when either label is clicked or space is pressed', () => {
      const labels = ['physics', 'math'];
      const chip = render(
        <div>
          {labels.map(label => (
            <Chip value={label} name="subjects" key={label}>
              {label}
            </Chip>
          ))}
        </div>
      );
      const chipInputs = screen.getAllByRole(
        'radio'
      ) as Array<HTMLInputElement>;

      expect(chipInputs[0].checked).toBe(false);
      expect(chipInputs[1].checked).toBe(false);

      userEvent.click(chip.getByLabelText(labels[0]));
      expect(chipInputs[0]).toEqual(document.activeElement);
      expect(chipInputs[0].checked).toBe(true);
      expect(chipInputs[1].checked).toBe(false);

      chipInputs[1].focus();
      userEvent.keyboard('{space}');
      expect(chipInputs[0].checked).toBe(false);
      expect(chipInputs[1].checked).toBe(true);

      chipInputs[0].focus();
      userEvent.keyboard('{enter}');
      expect(chipInputs[0].checked).toBe(false);
      expect(chipInputs[1].checked).toBe(true);
    });

    it('renders as checked', () => {
      const label = 'physics';
      const chip = render(
        <Chip value={label} name={label} checked>
          {label}
        </Chip>
      );
      const chipInput = chip.getByRole('radio') as HTMLInputElement;

      expect(chipInput.checked).toBe(true);
    });

    it('does not allow checking disabled chip', () => {
      const onChange = jest.fn();
      const label = 'physics';
      const chip = render(
        <Chip value={label} name={label} onChange={onChange} disabled>
          {label}
        </Chip>
      );
      const chipInput = screen.getByRole('radio') as HTMLInputElement;

      expect(chipInput.checked).toBe(false);
      userEvent.click(chipInput);
      expect(onChange).not.toHaveBeenCalled();
      expect(chipInput.checked).toBe(false);
      userEvent.click(chip.getByLabelText(label));
      expect(onChange).not.toHaveBeenCalled();
      expect(chipInput.checked).toBe(false);
    });
  });

  describe('multi select', () => {
    it('renders uncontrolled chip with accessible name and radio role', () => {
      const label = 'physics';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const chip = render(
        <Chip value={label} name={label} multiSelect>
          {label}
        </Chip>
      );

      const chipInput = screen.getByRole('checkbox', {
        name: label,
      }) as HTMLInputElement;

      expect(chipInput).toBeInTheDocument();
      expect(chipInput.checked).toBe(false);
      expect(chipInput.getAttribute('value')).toBe(label);
      expect(chipInput.getAttribute('name')).toBe(label);
    });

    it('checks/unchecks when either label is clicked or space/enter is pressed', () => {
      const labels = ['physics', 'math'];
      const chip = render(
        <div>
          {labels.map(label => (
            <Chip value={label} name="subjects" key={label} multiSelect>
              {label}
            </Chip>
          ))}
        </div>
      );
      const chipInputs = screen.getAllByRole(
        'checkbox'
      ) as Array<HTMLInputElement>;

      expect(chipInputs[0].checked).toBe(false);
      expect(chipInputs[1].checked).toBe(false);

      userEvent.click(chip.getByLabelText(labels[0]));
      expect(chipInputs[0]).toEqual(document.activeElement);
      expect(chipInputs[0].checked).toBe(true);
      expect(chipInputs[1].checked).toBe(false);

      chipInputs[1].focus();
      userEvent.keyboard('{space}');
      expect(chipInputs[0].checked).toBe(true);
      expect(chipInputs[1].checked).toBe(true);

      chipInputs[0].focus();
      userEvent.keyboard('{space}');
      expect(chipInputs[0].checked).toBe(false);
      expect(chipInputs[1].checked).toBe(true);
    });

    it('renders as checked', () => {
      const label = 'physics';
      const chip = render(
        <Chip value={label} name={label} checked multiSelect>
          {label}
        </Chip>
      );
      const chipInput = chip.getByRole('checkbox') as HTMLInputElement;

      expect(chipInput.checked).toBe(true);
    });

    it('does not allow checking disabled chip', () => {
      const onChange = jest.fn();
      const label = 'physics';
      const chip = render(
        <Chip
          value={label}
          name={label}
          onChange={onChange}
          disabled
          multiSelect
        >
          {label}
        </Chip>
      );
      const chipInput = screen.getByRole('checkbox') as HTMLInputElement;

      expect(chipInput.checked).toBe(false);
      userEvent.click(chipInput);
      expect(onChange).not.toHaveBeenCalled();
      expect(chipInput.checked).toBe(false);
      userEvent.click(chip.getByLabelText(label));
      expect(onChange).not.toHaveBeenCalled();
      expect(chipInput.checked).toBe(false);
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations when it has a description', async () => {
      await testA11y(
        <div>
          <Chip aria-describedby="desc" value="label" name="name">
            label
          </Chip>
          <p id="desc">description</p>
        </div>
      );
    });
    describe('single select', () => {
      it('should have no a11y violations when children, name and value are provided', async () => {
        await testA11y(
          <Chip name="name" value="value">
            item
          </Chip>
        );
      });

      it('should have no a11y violations when checked', async () => {
        await testA11y(
          <Chip name="name" value="value" checked>
            item
          </Chip>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(
          <Chip name="name" value="value" disabled>
            item
          </Chip>
        );
      });

      it('should have no a11y violations when required', async () => {
        await testA11y(
          <Chip name="name" value="value" required>
            item
          </Chip>
        );
      });
    });

    describe('multi select', () => {
      it('should have no a11y violations when children, name and value are provided', async () => {
        await testA11y(
          <Chip name="name" value="value" multiSelect>
            item
          </Chip>
        );
      });

      it('should have no a11y violations when checked', async () => {
        await testA11y(
          <Chip name="name" value="value" checked multiSelect>
            item
          </Chip>
        );
      });

      it('should have no a11y violations when disabled', async () => {
        await testA11y(
          <Chip name="name" value="value" disabled multiSelect>
            item
          </Chip>
        );
      });

      it('should have no a11y violations when required', async () => {
        await testA11y(
          <Chip name="name" value="value" required multiSelect>
            item
          </Chip>
        );
      });
    });
  });
});
