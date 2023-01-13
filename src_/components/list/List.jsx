// @flow strict

import classNames from 'classnames';
import * as React from 'react';

export type ListPropsType = {
  children?: React.Node,
  spaced?: boolean,
  className?: string,
  ordered?: boolean,
  ...
};

const List = ({
  spaced,
  className,
  ordered,
  children,
  ...props
}: ListPropsType) => {
  const listClass = classNames(
    'sg-list',
    {
      'sg-list--spaced-elements': spaced,
    },
    className
  );

  const Tag = ordered ? 'ol' : 'ul';

  return (
    <Tag {...props} className={listClass} role="list">
      {children}
    </Tag>
  );
};

export default List;
