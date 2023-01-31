import * as React from 'react';
import Logo, {TYPE} from './Logo';
import {render} from '@testing-library/react';

test('render', () => {
  const logo = render(<Logo />);

  expect(logo.hasClass('sg-logo')).toEqual(true);
  expect(logo.find('img')).toHaveLength(1);
});
test('type', () => {
  const logo = render(<Logo type={TYPE.ZNANIJA} />);

  expect(logo.hasClass('sg-logo--znanija')).toEqual(true);
});
