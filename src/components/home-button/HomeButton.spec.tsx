import * as React from 'react';
import HomeButton, {TYPE} from './HomeButton';
import {render} from '@testing-library/react';

test('render', () => {
  const button = render(<HomeButton />);

  expect(button.queryAllByRole('img').length).toBeGreaterThan(0);
  expect(button.queryByRole('link')).toBeTruthy();
});

test('type', () => {
  const button = render(<HomeButton type={TYPE.EODEV} />);

  expect(
    button.container.firstElementChild.classList.contains(
      'sg-home-button--eodev'
    )
  ).toBe(true);
});

test('href', () => {
  const button = render(<HomeButton href="http://foo.com" />);

  expect(button.getByRole('link').getAttribute('href')).toEqual(
    'http://foo.com'
  );
});

test('empty href', () => {
  const button = render(<HomeButton>Test</HomeButton>);

  expect(button.getByRole('link').getAttribute('href')).toEqual('#');
});
