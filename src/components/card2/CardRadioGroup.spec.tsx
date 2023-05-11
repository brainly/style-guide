import * as React from 'react';
import {CardRadioGroup} from './CardRadioGroup';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

// Assume that we have a CardRadio component in the same directory
import CardRadio from './CardRadio';

describe('<CardRadioGroup />', () => {
  const getCardRadioGroup = (
    props?: Omit<React.ComponentPropsWithRef<typeof CardRadioGroup>, 'children'>
  ) => (
    <CardRadioGroup {...props}>
      <CardRadio value="option-a">Option A</CardRadio>
      <CardRadio value="option-b">Option B</CardRadio>
    </CardRadioGroup>
  );

  it('renders CardRadioGroup with CardRadios', () => {
    render(getCardRadioGroup());
    expect(screen.getByLabelText('Option A')).toBeInTheDocument();
    expect(screen.getByLabelText('Option B')).toBeInTheDocument();
  });

  it('does not allow checking disabled CardRadio', () => {
    render(getCardRadioGroup({disabled: true}));
    userEvent.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  it('changes selected element when CardRadio is clicked', () => {
    render(getCardRadioGroup());
    userEvent.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).not.toBeChecked();
    userEvent.click(screen.getByLabelText('Option B'));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
  });

  it('calls onChange when CardRadio is clicked', () => {
    const onChange = jest.fn();

    render(getCardRadioGroup({onChange}));
    userEvent.click(screen.getByLabelText('Option A'));
    expect(onChange).toHaveBeenCalledWith('option-a');
  });

  it('checked CardRadio can be changed on controlled CardRadioGroup', () => {
    const {rerender} = render(getCardRadioGroup({value: 'option-a'}));

    userEvent.click(screen.getByLabelText('Option B'));
    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).not.toBeChecked();
    rerender(getCardRadioGroup({value: 'option-b'}));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
  });

  it('has an accessible name', () => {
    render(getCardRadioGroup({'aria-label': 'test'}));
    expect(screen.getByLabelText('test')).toBeInTheDocument();
  });

  it('has an accessible description', () => {
    render(
      <CardRadioGroup
        aria-describedby="description"
        aria-label="Card radio label"
      >
        <p id="description">description</p>
        <CardRadio value="option-a">Option A</CardRadio>
        <CardRadio value="option-b">Option B</CardRadio>
      </CardRadioGroup>
    );

    // get by role with description and check if it is in the doc
    expect(
      screen.getByRole('radiogroup', {description: 'description'})
    ).toBeInTheDocument();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      const {container} = render(getCardRadioGroup());

      await testA11y(container);
    });

    it('should have no a11y violations when required', async () => {
      const {container} = render(getCardRadioGroup({required: true}));

      await testA11y(container);
    });

    it('should have no a11y violations when value is provided', async () => {
      const {container} = render(getCardRadioGroup({value: 'option-a'}));

      await testA11y(container);
    });

    it('should have no a11y violations when disabled', async () => {
      const {container} = render(getCardRadioGroup({disabled: true}));

      await testA11y(container);
    });

    it('should have no a11y violations when label is provided', async () => {
      const {container} = render(getCardRadioGroup({'aria-label': 'test'}));

      await testA11y(container);
    });

    it('should have no a11y violations when description is provided', async () => {
      const {container} = render(
        <CardRadioGroup
          aria-describedby="description"
          aria-label="Card radio label"
        >
          <p id="description">description</p>
          <CardRadio value="option-a">Option A</CardRadio>
          <CardRadio value="option-b">Option B</CardRadio>
        </CardRadioGroup>
      );

      await testA11y(container);
    });
  });
});
