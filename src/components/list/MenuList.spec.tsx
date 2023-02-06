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

    expect(menu.queryByRole('list')).toBeTruthy();
  });

  test('small size', () => {
    const menu = render(<MenuList items={menuItems} size={SIZE.SMALL} />);

    expect(
      menu.container.firstElementChild.classList.contains('sg-menu-list--small')
    ).toEqual(true);
  });

  test('large', () => {
    const menu = render(<MenuList items={menuItems} size={SIZE.LARGE} />);

    expect(
      menu.container.firstElementChild.classList.contains('sg-menu-list--large')
    ).toEqual(true);
  });
});

describe('<MenuItem />', () => {
  test('renders', () => {
    const menuItem = render(<MenuItem text="test" href="#" />);

    expect(menuItem.queryByRole('listitem')).toBeTruthy();
  });

  test('renders different type of html element', () => {
    const menuItem = render(<MenuItem type="span" text="foo" />);

    expect(menuItem.getByText('foo').tagName).toEqual('SPAN');
  });

  test('passes props to link element', () => {
    const menuItem = render(
      <MenuItem text="foo" id="m4l" href="http://link.com" />
    );

    expect(menuItem.queryByRole('link').getAttribute('id')).toEqual('m4l');
  });
});
