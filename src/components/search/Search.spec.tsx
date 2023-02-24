import * as React from 'react';
import Search from './Search';
import {render, getByRole} from '@testing-library/react';

it('render', () => {
  const search = render(<Search />);

  expect(search.getByRole('searchbox')).toBeTruthy();
});

it('render icon', () => {
  const search = render(<Search />);

  expect(search.getByRole('img')).toBeTruthy();
});

it('adaptive Button with icon', () => {
  const search = render(<Search withRoundButton />);

  expect(getByRole(search.getByRole('button'), 'img')).toBeTruthy();
});
