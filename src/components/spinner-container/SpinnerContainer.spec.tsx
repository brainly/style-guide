import * as React from 'react';
import SpinnerContainer from './SpinnerContainer';
import {render, within} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('SpinnerContainer', () => {
  it('render', () => {
    const spinnerContainer = render(
      <SpinnerContainer>children</SpinnerContainer>
    );

    expect(
      spinnerContainer.container.firstElementChild.classList.contains(
        'sg-spinner-container'
      )
    ).toEqual(true);
  });

  it('loading', () => {
    const container = render(<SpinnerContainer loading />);

    expect(container.queryByRole('status')).toBeTruthy();
  });

  describe('loading: ', () => {
    it('should have a role status', () => {
      const spinnerContainer = render(<SpinnerContainer loading />);

      expect(spinnerContainer.getByRole('status')).toBeTruthy();
    });

    it('children should have aria-busy="true"', () => {
      const spinnerContainer = render(
        <SpinnerContainer loading>
          <header>children</header>
        </SpinnerContainer>
      );

      expect(
        spinnerContainer.getByRole('banner').getAttribute('aria-busy')
      ).toBe('true');
    });

    it('should announce loading information', () => {
      const spinnerContainer = render(<SpinnerContainer loading />);
      const status = spinnerContainer.getByRole('status');

      expect(status.getAttribute('aria-live')).toBe('assertive');
      expect(within(status).getByText('content is loading')).toBeTruthy();
    });
  });

  describe('loaded: ', () => {
    it('should have a role status', () => {
      const spinnerContainer = render(<SpinnerContainer />);

      expect(spinnerContainer.getByRole('status')).toBeTruthy();
    });

    it('should announce information is loaded', () => {
      const spinnerContainer = render(<SpinnerContainer />);
      const status = spinnerContainer.getByRole('status');

      expect(status.getAttribute('aria-live')).toBe('assertive');
      expect(within(status).getByText('content loaded')).toBeTruthy();
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations when loading', async () => {
      await testA11y(<SpinnerContainer loading />);
    });

    it('should have no a11y violations when loaded', async () => {
      await testA11y(<SpinnerContainer />);
    });
  });
});
