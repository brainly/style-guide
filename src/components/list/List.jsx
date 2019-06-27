// @flow strict

import classNames from 'classnames';
import type {Node} from 'react';
import React from 'react';

type PropsType = {
  children?: Node,
  spaced?: boolean,
  className?: string
};

const List = ({spaced, className, children, ...props}: PropsType) => {
  const listClass = classNames('sg-list', {
    'sg-list--spaced-elements': spaced
  }, className);

  return (
    <ul {...props} className={listClass}>
      {children}
    </ul>
  );
};

export default List;
