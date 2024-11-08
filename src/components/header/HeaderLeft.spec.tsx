import * as React from 'react';
import HeaderLeft from './HeaderLeft';
import {render} from '@testing-library/react';

it('render', () => {
  const header = render(<HeaderLeft>some text</HeaderLeft>);

  expect(
    // @ts-ignore TS18047
    header.container.firstElementChild.classList.contains('sg-header__left')
  ).toEqual(true);
});
