import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({children, className, ...props}) => {
  const listItemClass = classNames('sg-list__element', className);

  return (
    <li className={listItemClass} {...props}>
      {children}
    </li>);
};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ListItem;
