// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type HeaderPropsType = {
  children: React.Node,
  withDivider?: boolean,
  fixed?: boolean,
  className?: string,
  ...
};

// This component is deprecated

const Header = ({
  children,
  fixed,
  withDivider,
  className,
  ...props
}: HeaderPropsType) => {
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
