import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '../list/MenuItem';

const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large'
};

const MenuList = ({items, size = SIZE.NORMAL}) => {
  const listClass = classNames('sg-menu-list', {
    [`sg-menu-list--${size}`]: size !== SIZE.NORMAL
  });

  return <ul className={listClass}>
    {items.map(({text, href}, index) =>
      <MenuItem key={index} text={text} href={href}/>
    )}
  </ul>;
};

MenuList.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  items: PropTypes.array.isRequired
};

export default MenuList;
export {SIZE};
