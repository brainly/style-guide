import * as React from 'react';
import Spinner from './Spinner';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Spinner', () => {
  it('render', () => {
    const component = render(<Spinner />);

    expect(component.getByRole('status')).toBeTruthy();
  });

  it('className', () => {
    const testclass = 'mati-love-4-ever';
    const component = render(<Spinner className={testclass} />);

    expect(
      // @ts-expect-error TS18047
      component.container.firstElementChild.classList.contains(`${testclass}`)
    ).toEqual(true);
  });

  it('should have a role status', () => {
    const spinner = render(<Spinner />);

    expect(spinner.getByRole('status')).toBeTruthy();
  });

  it('should announce loading information', () => {
    const spinner = render(<Spinner />);

    expect(spinner.getByRole('status').getAttribute('aria-live')).toBe(
      'assertive'
    );
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Spinner />);
    });
  });
});
