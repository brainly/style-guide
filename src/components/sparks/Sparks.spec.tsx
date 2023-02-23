import * as React from 'react';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import Sparks from './Sparks';

describe('<Sparks />', () => {
  it('renders correctly with default props', () => {
    const sparks = render(<Sparks />);

    expect(sparks.getByTestId('sparks')).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const {container} = render(<Sparks />);

    await testA11y(container);
  });
});
