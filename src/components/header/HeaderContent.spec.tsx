import * as React from 'react';
import HeaderContent from './HeaderContent';
import {render} from '@testing-library/react';

test('render', () => {
  const headerContent = render(<HeaderContent>some text</HeaderContent>);

  expect(
    headerContent.container.firstElementChild.classList.contains(
      'sg-header__content'
    )
  ).toEqual(true);
});
test('auto-height', () => {
  const headerContent = render(
    <HeaderContent autoHeight>some text</HeaderContent>
  );

  expect(
    headerContent.container.firstElementChild.classList.contains(
      'sg-header__content--auto-height'
    )
  ).toEqual(true);
});
