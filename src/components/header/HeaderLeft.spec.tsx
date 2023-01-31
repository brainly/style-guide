import * as React from 'react';
import HeaderLeft from './HeaderLeft';
import {render} from '@testing-library/react';

test('render', () => {
  const header = render(<HeaderLeft>some text</HeaderLeft>);

  expect(
    header.container.firstElementChild.classList.contains('sg-header__left')
  ).toEqual(true);
});
