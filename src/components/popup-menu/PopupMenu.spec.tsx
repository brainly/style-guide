import * as React from 'react';
import PopupMenu from './PopupMenu';
import {render} from '@testing-library/react';

const items = ['one', 'two', 'three'];

test('render', () => {
  const popupMenu = render(<PopupMenu items={items} />);

  expect(
    popupMenu.container.firstElementChild.classList.contains('sg-popup-menu')
  ).toEqual(true);
});

test('render items', () => {
  const popupMenu = render(<PopupMenu items={items} />);

  items.forEach(item => {
    expect(popupMenu.queryByText(item)).toBeTruthy();
  });
});

test('extra spacing', () => {
  const popupMenu = render(<PopupMenu items={items} extraSpacing />);

  expect(
    popupMenu.container.firstElementChild.classList.contains(
      'sg-popup-menu--elements-spaced'
    )
  ).toEqual(true);
});
