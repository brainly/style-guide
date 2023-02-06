import * as React from 'react';
import SpinnerContainer from './SpinnerContainer';
import {render} from '@testing-library/react';

test('render', () => {
  const spinnerContainer = render(
    <SpinnerContainer>children</SpinnerContainer>
  );

  expect(
    spinnerContainer.container.firstElementChild.classList.contains(
      'sg-spinner-container'
    )
  ).toEqual(true);
});

test('loading', () => {
  const container = render(<SpinnerContainer loading />);

  expect(container.queryByRole('status')).toBeTruthy();
});
