import * as React from 'react';
import {render, screen} from '@testing-library/react';
import Dialog from './Dialog';

describe('<Dialog />', () => {
  it('renders correctly', async () => {
    render(<Dialog isOpen />);
    expect(screen.getByText('Dialog')).toBeTruthy();
  });
});
