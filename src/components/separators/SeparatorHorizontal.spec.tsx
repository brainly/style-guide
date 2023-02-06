import * as React from 'react';
import SeparatorHorizontal, {TYPE} from './SeparatorHorizontal';
import {render} from '@testing-library/react';

test('render', () => {
  const separator = render(<SeparatorHorizontal />);

  expect(separator.queryByRole('separator')).toBeTruthy();
});

test('type', () => {
  const separator = render(<SeparatorHorizontal type={TYPE.SPACED} />);

  expect(
    separator.container.firstElementChild.classList.contains(
      'sg-horizontal-separator--spaced'
    )
  ).toEqual(true);
});
