import * as React from 'react';
import Logo, {TYPE} from './Logo';
import {render} from '@testing-library/react';

test('render', () => {
  const logo = render(<Logo />);

  expect(logo.queryByRole('img')).toBeTruthy();
});

test('type', () => {
  const logo = render(<Logo type={TYPE.ZNANIJA} />);

  expect(
    logo.container.firstElementChild.classList.contains('sg-logo--znanija')
  ).toEqual(true);
});
