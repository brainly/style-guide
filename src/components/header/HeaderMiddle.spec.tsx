import * as React from 'react';
import HeaderMiddle from './HeaderMiddle';
import {render} from '@testing-library/react';

it('render', () => {
  const header = render(<HeaderMiddle>some text</HeaderMiddle>);

  expect(
    // @ts-ignore TS18047
    header.container.firstElementChild.classList.contains('sg-header__middle')
  ).toEqual(true);
});
