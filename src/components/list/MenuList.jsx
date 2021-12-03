// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import type {MenuItemPropsType} from './subcomponents/MenuItem';
import MenuItem from './subcomponents/MenuItem';

export type SizeType = 'small' | 'normal' | 'large';

export const SIZE: {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
} = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export type MenuListPropsType = {
  size?: SizeType,
  className?: string,
  items?: Array<MenuItemPropsType>,
  ...
};

// This component is deprecated

const MenuList = ({
  items = [],
  size = SIZE.NORMAL,
  className,
  ...props
}: MenuListPropsType) => {
  const listClass = classNames(
    'sg-menu-list',
    {
      [`sg-menu-list--${size}`]: size !== SIZE.NORMAL,
    },
    className
  );

  return (
    <ul {...props} className={listClass}>
      {items.map(({...elementProps}, index) => (
        <MenuItem {...elementProps} key={index} />
      ))}
    </ul>
  );
};

export default MenuList;
export {MenuItem};
