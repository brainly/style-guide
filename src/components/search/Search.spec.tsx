import * as React from 'react';
import Search from './Search';
import {render, queryByRole} from '@testing-library/react';

test('render', () => {
  const search = render(<Search />);

  expect(search.queryByRole('searchbox')).toBeTruthy();
});

test('render icon', () => {
  const search = render(<Search />);

  expect(search.queryByRole('img')).toBeTruthy();
});

test('adaptive Button with icon', () => {
  const search = render(<Search withRoundButton />);

  expect(queryByRole(search.queryByRole('button'), 'img')).toBeTruthy();
});
