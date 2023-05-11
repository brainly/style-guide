import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';

import {CardRadioGroup} from './CardRadioGroup';
import CardRadio from './CardRadio';

describe('<CardRadio />', () => {
  const renderCardRadio = (
    props?: Omit<React.ComponentPropsWithRef<typeof CardRadio>, 'children'>
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
});
