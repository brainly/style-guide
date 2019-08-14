// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children?: Node,
  className?: string,
};

const HeaderLeft = ({children, className, ...props}: PropsType) => {
  const headerClass = classnames('sg-header__left', className);

  return (
    <div {...props} className={headerClass}>
      {children}
    </div>
  );
};

export default HeaderLeft;
