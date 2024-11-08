import * as React from 'react';
import HeaderContent from './HeaderContent';
import {render} from '@testing-library/react';

it('render', () => {
  const headerContent = render(<HeaderContent>some text</HeaderContent>);

  expect(
    // @ts-ignore TS18047
    headerContent.container.firstElementChild.classList.contains(
      'sg-header__content'
    )
  ).toEqual(true);
});
it('auto-height', () => {
  const headerContent = render(
    <HeaderContent autoHeight>some text</HeaderContent>
  );

  expect(
    // @ts-ignore TS18047
    headerContent.container.firstElementChild.classList.contains(
      'sg-header__content--auto-height'
    )
  ).toEqual(true);
});
