// @flow strict

import React from 'react';
import classNames from 'classnames';
import * as MenuItemModule from './subcomponents/MenuItem';

const {default: MenuItem} = MenuItemModule;

export type SizeType =
  | 'small'
  | 'normal'
  | 'large';

export const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large'
};

type PropsType = {
  size?: SizeType,
  className?: string,
  items?: Array<MenuItemModule.PropsType>
};

const MenuList = ({items = [], size = SIZE.NORMAL, className, ...props}: PropsType) => {
  const listClass = classNames('sg-menu-list', {
    [`sg-menu-list--${size}`]: size !== SIZE.NORMAL
  }, className);

  return (
    <ul {...props} className={listClass}>
      {items.map(({...elementProps}, index) =>
        <MenuItem key={index} {...elementProps} />
      )}
    </ul>
  );
};

export default MenuList;
export {MenuItem};
