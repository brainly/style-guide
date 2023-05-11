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

  it('renders CardRadio', () => {
    renderCardRadio();
    expect(screen.getByLabelText('Option A')).toBeInTheDocument();
  });
});
