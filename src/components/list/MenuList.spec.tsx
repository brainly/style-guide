import * as React from 'react';
import {render} from '@testing-library/react';
import MenuList, {MenuItem, SIZE} from 'list/MenuList';

const menuItem = {
  text: 'Test',
  href: '#',
};
const menuItems = [menuItem];

describe('<MenuList />', () => {
  test('renders', () => {
    const menu = render(<MenuList items={menuItems} />);

    expect(menu.hasClass('sg-menu-list')).toEqual(true);
    expect(menu.hasClass('sg-menu-list--normal')).toEqual(false);
  });
  test('small size', () => {
    const menu = render(<MenuList items={menuItems} size={SIZE.SMALL} />);

    expect(menu.hasClass('sg-menu-list--small')).toEqual(true);
  });
  test('large', () => {
    const menu = render(<MenuList items={menuItems} size={SIZE.LARGE} />);

    expect(menu.hasClass('sg-menu-list--large')).toEqual(true);
  });
});
describe('<MenuItem />', () => {
  test('renders', () => {
    const menuItem = render(<MenuItem text="test" href="#" />);

    expect(menuItem.hasClass('sg-menu-list__element')).toEqual(true);
    expect(menuItem.find('.sg-menu-list__link')).toHaveLength(1);
  });
  test('renders different type of html element', () => {
    const menuItem = render(<MenuItem type="span" text="test" />);

    expect(menuItem.find('span')).toHaveLength(1);
  });
  test('passes props to link element', () => {
    const menuItem = render(<MenuItem type="span" text="test" id="m4l" />);

    expect(menuItem.find('.sg-menu-list__link').props().id).toEqual('m4l');
  });
});
