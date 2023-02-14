import * as React from 'react';
import HeaderContainer from './HeaderContainer';
import {render} from '@testing-library/react';

it('render', () => {
  const headerContainer = render(<HeaderContainer>some text</HeaderContainer>);

  expect(
    headerContainer.container.firstElementChild.classList.contains(
      'sg-header__container'
    )
  ).toEqual(true);
});
