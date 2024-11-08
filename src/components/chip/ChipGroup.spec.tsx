import * as React from 'react';
import ChipGroup from './ChipGroup';
import Chip from './Chip';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

const chips = ['option-a', 'option-b'];

describe('<ChipGroup />', () => {
  // @ts-ignore TS7006
  const renderChipGroup = props =>
    render(
      <ChipGroup {...props} name="chipgroup">
        {chips.map(chip => (
          <Chip value={chip} key={chip}>
            {chip}
          </Chip>
        ))}
      </ChipGroup>
    );

  it('does not allow checking disabled chip', () => {
    const onChange = jest.fn();

    renderChipGroup({
      value: chips[0],
      disabled: true,
      onChange,
    });

    expect(screen.getByLabelText(chips[1])).not.toBeChecked();
    userEvent.click(screen.getByLabelText(chips[1]));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByLabelText(chips[1])).not.toBeChecked();
  });

  it('has an accessible name', () => {
    const label = 'ChipGroup name';

    renderChipGroup({
      'aria-label': label,
    });

    expect(
      screen.getByRole('radiogroup', {
        name: label,
      })
    ).toBeInTheDocument();
  });

  it('has an accessible description', () => {
    render(
      <div>
        <ChipGroup aria-describedby="rg-desc">
          <Chip onChange={() => jest.fn()} value="option-a">
            Option A
          </Chip>
          <Chip onChange={() => jest.fn()} value="option-b">
            Option B
          </Chip>
        </ChipGroup>
        <p id="rg-desc">ChipGroup description</p>
      </div>
    );

    expect(
      screen.getByRole('radiogroup', {
        description: 'ChipGroup description',
      })
    ).toBeInTheDocument();
  });

  describe('single select', () => {
    it('renders single select chip group with chips', () => {
      renderChipGroup({});

      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getByLabelText(chips[0])).not.toBeChecked();
      expect(screen.getByLabelText(chips[1])).not.toBeChecked();
    });

    it('changes checked element when Chip is clicked and has only one checked Chip at a time', () => {
      renderChipGroup({
        value: chips[0],
      });

      userEvent.click(screen.getByLabelText(chips[1]));
      expect(screen.getByLabelText(chips[0])).not.toBeChecked();
      expect(screen.getByLabelText(chips[1])).toBeChecked();
      userEvent.click(screen.getByLabelText(chips[0]));
      expect(screen.getByLabelText(chips[0])).toEqual(document.activeElement);
      expect(screen.getByLabelText(chips[0])).toBeChecked();
      expect(screen.getByLabelText(chips[1])).not.toBeChecked();
    });

    it('changes the value of group', () => {
      const name = 'groupname';
      const {rerender} = renderChipGroup({
        name,
        value: chips[0],
      });

      expect(screen.getByLabelText(chips[0])).toBeChecked();
      expect(screen.getByLabelText(chips[1])).not.toBeChecked();

      rerender(
        <ChipGroup
          {...{
            name,
            value: chips[1],
          }}
        >
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
      expect(screen.getByLabelText(chips[0])).not.toBeChecked();
      expect(screen.getByLabelText(chips[1])).toBeChecked();
    });

    describe('multi select', () => {
      it('renders multi select chip group with chips', () => {
        renderChipGroup({multiSelect: true});

        expect(screen.getByRole('group')).toBeInTheDocument();
        expect(screen.getByLabelText(chips[0])).not.toBeChecked();
        expect(screen.getByLabelText(chips[1])).not.toBeChecked();
      });

      it('changes the value of group', () => {
        const name = 'groupname';
        const {rerender} = renderChipGroup({
          name,
          value: chips[0],
          multiSelect: true,
        });

        expect(screen.getByLabelText(chips[0])).toBeChecked();
        expect(screen.getByLabelText(chips[1])).not.toBeChecked();

        rerender(
          <ChipGroup
            {...{
              name,
              value: chips,
              multiSelect: true,
            }}
          >
            {chips.map(chip => (
              <Chip value={chip} key={chip}>
                {chip}
              </Chip>
            ))}
          </ChipGroup>
        );
        expect(screen.getByLabelText(chips[1])).toBeChecked();
        expect(screen.getByLabelText(chips[0])).toBeChecked();
      });
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(
        <ChipGroup name="chipgroup">
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
    });

    it('should have no a11y violations when required', async () => {
      await testA11y(
        <ChipGroup name="chipgroup" required>
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
    });

    it('should have no a11y violations when value is provided', async () => {
      await testA11y(
        <ChipGroup name="chipgroup" value={chips[1]}>
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
    });

    it('should have no a11y violations when disabled', async () => {
      await testA11y(
        <ChipGroup name="chipgroup" disabled>
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
    });

    it('should have no a11y violations when multi select', async () => {
      await testA11y(
        <ChipGroup name="chipgroup" multiSelect>
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
    });

    it('should have no a11y violations when label is provided', async () => {
      await testA11y(
        <ChipGroup name="chipgroup" aria-label="group name">
          {chips.map(chip => (
            <Chip value={chip} key={chip}>
              {chip}
            </Chip>
          ))}
        </ChipGroup>
      );
    });

    it('should have no a11y violations when description is provided', async () => {
      await testA11y(
        <div>
          <ChipGroup aria-describedby="rg-desc">
            <Chip onChange={() => jest.fn()} value="option-a">
              Option A
            </Chip>
            <Chip onChange={() => jest.fn()} value="option-b">
              Option B
            </Chip>
          </ChipGroup>
          <p id="rg-desc">ChipGroup description</p>
        </div>
      );
    });
  });
});
