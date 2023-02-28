import * as React from 'react';
import Logo from './Logo';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Logo', () => {
  it('render', () => {
    const logo = render(<Logo />);

    expect(logo.getByRole('img')).toBeTruthy();
  });

  it('should have an alt', () => {
    const logo = render(<Logo />);

    expect(logo.getByAltText('brainly')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Logo />);
    });
  });
});
