// @flow strict

import classNames from 'classnames';
import type {Node} from 'react';
import React from 'react';

type PropsType = {
  children?: Node,
  className?: string,
  small?: boolean,
};

const ListItemIcon = ({small, children, className, ...props}: PropsType) => {
  const iconClass = classNames(
    'sg-list__icon',
    {
      'sg-list__icon--spacing-right-small': small,
    },
    className
  );

  return (
    <div className={iconClass} {...props}>
      {children}
    </div>
  );
};

export default ListItemIcon;
