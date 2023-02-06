import * as React from 'react';
import SeparatorVertical, {SIZE} from './SeparatorVertical';
import {render} from '@testing-library/react';

test('render', () => {
  const separator = render(<SeparatorVertical />);

  expect(separator.queryByRole('separator')).toBeTruthy();
});

test('size', () => {
  const separator = render(<SeparatorVertical size={SIZE.SMALL} />);

  expect(
    separator.container.firstElementChild.classList.contains(
      'sg-vertical-separator--small'
    )
  ).toEqual(true);
});
