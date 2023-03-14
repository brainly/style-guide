import * as React from 'react';
import PopupMenu from './PopupMenu';
import {render} from '@testing-library/react';

const items = ['one', 'two', 'three'];

it('render', () => {
  const popupMenu = render(<PopupMenu items={items} />);

  expect(
    popupMenu.container.firstElementChild.classList.contains('sg-popup-menu')
  ).toEqual(true);
});

it('render items', () => {
  const popupMenu = render(<PopupMenu items={items} />);

  items.forEach(item => {
    expect(popupMenu.queryByText(item)).toBeTruthy();
  });
});

it('extra spacing', () => {
  const popupMenu = render(<PopupMenu items={items} extraSpacing />);

  expect(
    popupMenu.container.firstElementChild.classList.contains(
      'sg-popup-menu--elements-spaced'
    )
  ).toEqual(true);
});
