// @flow strict

import classNames from 'classnames';
import * as React from 'react';

type PropsType = {
  children?: React.Node,
  className?: string,
  ...
};

const ListItem = ({children, className, ...props}: PropsType) => {
  const listItemClass = classNames('sg-list__element', className);

  return (
    <li {...props} className={listItemClass}>
      {children}
    </li>
  );
};

export default ListItem;
