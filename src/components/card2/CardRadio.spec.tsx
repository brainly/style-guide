import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

import {CardRadioGroup} from './CardRadioGroup';
import CardRadio from './CardRadio';

type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Type>;

describe('<CardRadio />', () => {
  const renderCardRadio = (
    props?: Optional<React.ComponentPropsWithoutRef<typeof CardRadio>, 'value'>
  ) =>
    render(
      <CardRadioGroup>
        <CardRadio value="option-a" {...props}>
          Option A
        </CardRadio>
      </CardRadioGroup>
    );

  it('renders CardRadio with accessible name and radio role', () => {
    const label = 'Option A';

    renderCardRadio();

    const cardRadio = screen.getByRole('radio', {
      name: label,
    }) as HTMLInputElement;

    expect(cardRadio).toBeInTheDocument();
    expect(cardRadio.checked).toBe(false);
    expect(cardRadio.getAttribute('value')).toBe('option-a');
  });

  it('does not allow checking disabled item', () => {
    renderCardRadio({disabled: true});
    userEvent.click(screen.getByLabelText('Option A'));
    expect(screen.getByLabelText('Option A')).not.toBeChecked();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      const {container} = renderCardRadio();

      await testA11y(container);
    });
  });
});
