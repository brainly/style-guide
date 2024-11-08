import * as React from 'react';
import {render} from '@testing-library/react';
import MenuList, {MenuItem, SIZE} from 'list/MenuList';

const menuItem = {
  text: 'Test',
  href: '#',
};
const menuItems = [menuItem];

describe('MenuList', () => {
  it('renders', () => {
    const menu = render(<MenuList items={menuItems} />);

    expect(menu.getByRole('list')).toBeTruthy();
  });

  it('small size', () => {
    const menu = render(<MenuList items={menuItems} size={SIZE.SMALL} />);

    expect(
      // @ts-ignore TS18047
      menu.container.firstElementChild.classList.contains('sg-menu-list--small')
    ).toEqual(true);
  });

  it('large', () => {
    const menu = render(<MenuList items={menuItems} size={SIZE.LARGE} />);

    expect(
      // @ts-ignore TS18047
      menu.container.firstElementChild.classList.contains('sg-menu-list--large')
    ).toEqual(true);
  });
});

describe('MenuItem', () => {
  it('renders', () => {
    const menuItem = render(<MenuItem text="test" href="#" />);

    expect(menuItem.getByRole('listitem')).toBeTruthy();
  });

  it('renders different type of html element', () => {
    const menuItem = render(<MenuItem as="span" text="foo" />);

    expect(menuItem.getByText('foo').tagName).toEqual('SPAN');
  });

  it('passes props to link element', () => {
    const menuItem = render(
      <MenuItem text="foo" id="m4l" href="http://link.com" />
    );

    expect(menuItem.getByRole('link').getAttribute('id')).toEqual('m4l');
  });
});
