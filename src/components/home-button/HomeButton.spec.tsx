import * as React from 'react';
import HomeButton from './HomeButton';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('HomeButton', () => {
  it('render', () => {
    const button = render(<HomeButton />);

    expect(button.getAllByRole('img').length).toBeGreaterThan(0);
    expect(button.getByRole('link')).toBeTruthy();
  });

  it('href', () => {
    const button = render(<HomeButton href="http://foo.com" />);

    expect(button.getByRole('link').getAttribute('href')).toEqual(
      'http://foo.com'
    );
  });

  it('empty href', () => {
    const button = render(<HomeButton>Test</HomeButton>);

    expect(button.getByRole('link').getAttribute('href')).toEqual('#');
  });

  it('should have a label', () => {
    const logo = render(<HomeButton />);

    expect(logo.getByLabelText('brainly home')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<HomeButton />);
    });
  });
});
