import * as React from 'react';
import Logo, {TYPE} from './Logo';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Logo', () => {
  it('render', () => {
    const logo = render(<Logo />);

    expect(logo.getByRole('img')).toBeTruthy();
  });

  it('type', () => {
    const logo = render(<Logo type={TYPE.ZNANIJA} />);

    expect(
      logo.container.firstElementChild.classList.contains('sg-logo--znanija')
    ).toEqual(true);
  });

  it('should have an alt', () => {
    const logo = render(<Logo />);

    expect(logo.getByAltText('brainly')).toBeTruthy();
  });
  it('should not have an alt', () => {
    const logo = render(<Logo alt="" />);

    expect(logo.queryByAltText('brainly')).toBeFalsy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Logo />);
    });
  });
});
