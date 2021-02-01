// @flow strict

import classNames from 'classnames';
import * as React from 'react';

export type ListItemIconPropsType = {
  children?: React.Node,
  className?: string,
  small?: boolean,
  ...
};

const ListItemIcon = ({
  small,
  children,
  className,
  ...props
}: ListItemIconPropsType) => {
  const iconClass = classNames(
    'sg-list__icon',
    {
      'sg-list__icon--spacing-right-small': small,
    },
    className
  );

  return (
    <div {...props} className={iconClass}>
      {children}
    </div>
  );
};

export default ListItemIcon;
