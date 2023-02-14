import * as React from 'react';
import HeaderRight from './HeaderRight';
import {render} from '@testing-library/react';

it('render', () => {
  const header = render(<HeaderRight>some text</HeaderRight>);

  expect(
    header.container.firstElementChild.classList.contains('sg-header__right')
  ).toEqual(true);
});
