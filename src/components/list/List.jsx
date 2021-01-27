// @flow strict

import classNames from 'classnames';
import * as React from 'react';

type PropsType = {
  children?: React.Node,
  spaced?: boolean,
  className?: string,
  ...
};

const List = ({spaced, className, children, ...props}: PropsType) => {
  const listClass = classNames(
    'sg-list',
    {
      'sg-list--spaced-elements': spaced,
    },
    className
  );

  return (
    <ul {...props} className={listClass}>
      {children}
    </ul>
  );
};

export default List;
