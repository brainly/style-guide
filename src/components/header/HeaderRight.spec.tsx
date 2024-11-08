import * as React from 'react';
import HeaderRight from './HeaderRight';
import {render} from '@testing-library/react';

it('render', () => {
  const header = render(<HeaderRight>some text</HeaderRight>);

  expect(
    // @ts-expect-error TS18047
    header.container.firstElementChild.classList.contains('sg-header__right')
  ).toEqual(true);
});
