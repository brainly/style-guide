import * as React from 'react';
import CardButton from './CardButton';
import {render} from '@testing-library/react';
// import {testA11y} from '../../axe';
// import userEvent from '@testing-library/user-event';

describe('CardButton', () => {
  it('renders its children', () => {
    const {getByText} = render(<CardButton>Button</CardButton>);

    expect(getByText('Button')).toBeInTheDocument();
  });
});
