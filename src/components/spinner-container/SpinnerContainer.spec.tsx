import * as React from 'react';
import SpinnerContainer from './SpinnerContainer';
import {render} from '@testing-library/react';

test('render', () => {
  const container = render(<SpinnerContainer>children</SpinnerContainer>);

  expect(container.hasClass('sg-spinner-container')).toEqual(true);
});
test('loading', () => {
  const container = render(<SpinnerContainer loading />);

  expect(container.find('.sg-spinner-container__overlay')).toHaveLength(1);
});
