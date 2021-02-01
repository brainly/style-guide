// @flow strict

import classNames from 'classnames';
import * as React from 'react';

export type ListItemPropsType = {
  children?: React.Node,
  className?: string,
  ...
};

const ListItem = ({children, className, ...props}: ListItemPropsType) => {
  const listItemClass = classNames('sg-list__element', className);

  return (
    <li {...props} className={listItemClass}>
      {children}
    </li>
  );
};

export default ListItem;
