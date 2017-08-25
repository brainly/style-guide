import React from 'react';
import PopupMenu from './PopupMenu';
import {shallow} from 'enzyme';

const items = ['one', 'two', 'three'];

test('render', () => {
  const popupMenu = shallow(
    <PopupMenu items={items} />
  );

  expect(popupMenu.hasClass('sg-popup-menu')).toEqual(true);
});

test('render items', () => {
  const popupMenu = shallow(
    <PopupMenu items={items} />
  );

  expect(popupMenu.find('.sg-popup-menu__hole')).toHaveLength(items.length);
});

test('error when no items', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<PopupMenu />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('extra spacing', () => {
  const popupMenu = shallow(
    <PopupMenu items={items} extraSpacing />
  );

  expect(popupMenu.hasClass('sg-popup-menu--elements-spaced')).toEqual(true);
});
