// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children: Node,
  withDivider?: boolean,
  fixed?: boolean,
  className?: string,
  ...
};

const Header = ({
  children,
  fixed,
  withDivider,
  className,
  ...props
}: PropsType) => {
  const headerClass = classnames(
    'sg-header',
    {
      'sg-header--fixed': fixed,
      'sg-header--with-divider': withDivider,
    },
    className
  );

  return (
    <header {...props} className={headerClass}>
      {children}
    </header>
  );
};

export default Header;
