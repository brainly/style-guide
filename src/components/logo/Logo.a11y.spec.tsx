import * as React from 'react';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import Logo from './Logo';
describe('Logo', () => {
  it('should have an alt', () => {
    const logo = render(<Logo />);
    expect(logo.getByAltText('brainly')).toBeTruthy();
  });
  it('should not have an alt', () => {
    const logo = render(<Logo alt="" />);
    expect(logo.queryByAltText('brainly')).toBeFalsy();
  });
});
describe('Logo a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Logo />);
  });
});
