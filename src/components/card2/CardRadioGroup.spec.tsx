import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

import {CardRadioGroup} from './CardRadioGroup';
import CardRadio from './CardRadio';

describe('<CardRadioGroup />', () => {
  const renderCardRadioGroup = (
    props?: Omit<React.ComponentPropsWithRef<typeof CardRadioGroup>, 'children'>
  ) =>
    render(
      <CardRadioGroup {...props}>
        <CardRadio value="option-a">Option A</CardRadio>
        <CardRadio value="option-b">Option B</CardRadio>
      </CardRadioGroup>
    );

  it('renders CardRadioGroup with CardRadios', () => {
    renderCardRadioGroup();
    expect(screen.getByLabelText('Option A')).toBeInTheDocument();
    expect(screen.getByLabelText('Option B')).toBeInTheDocument();
  });

  it('does not allow checking disabled CardRadio', () => {
    renderCardRadioGroup({disabled: true});
    userEvent.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  it('changes selected element when CardRadio is clicked', () => {
    renderCardRadioGroup();
    userEvent.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).not.toBeChecked();
    userEvent.click(screen.getByLabelText('Option B'));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
  });

  it('calls onChange when CardRadio is clicked', () => {
    const onChange = jest.fn();

    renderCardRadioGroup({onChange});
    userEvent.click(screen.getByLabelText('Option A'));
    expect(onChange).toHaveBeenCalledWith('option-a');
  });

  it('checked CardRadio can be changed on controlled CardRadioGroup', () => {
    const {rerender} = render(
      <CardRadioGroup value="option-a">
        <CardRadio value="option-a">Option A</CardRadio>
        <CardRadio value="option-b">Option B</CardRadio>
      </CardRadioGroup>
    );

    expect(screen.getByLabelText('Option A')).toBeChecked();
    expect(screen.getByLabelText('Option B')).not.toBeChecked();

    rerender(
      <CardRadioGroup value="option-b">
        <CardRadio value="option-a">Option A</CardRadio>
        <CardRadio value="option-b">Option B</CardRadio>
      </CardRadioGroup>
    );
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
    expect(screen.getByLabelText('Option B')).toBeChecked();
  });

  it('has an accessible name', () => {
    renderCardRadioGroup({'aria-label': 'test'});
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

    expect(
      screen.getByRole('radiogroup', {description: 'description'})
    ).toBeInTheDocument();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      const {container} = renderCardRadioGroup();

      await testA11y(container);
    });

    it('should have no a11y violations when required', async () => {
      const {container} = renderCardRadioGroup({required: true});

      await testA11y(container);
    });

    it('should have no a11y violations when value is provided', async () => {
      const {container} = renderCardRadioGroup({value: 'option-a'});

      await testA11y(container);
    });

    it('should have no a11y violations when disabled', async () => {
      const {container} = renderCardRadioGroup({disabled: true});

      await testA11y(container);
    });

    it('should have no a11y violations when label is provided', async () => {
      const {container} = renderCardRadioGroup({'aria-label': 'test'});

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
