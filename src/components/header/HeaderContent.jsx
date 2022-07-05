// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type HeaderContentPropsType = {
  children: React.Node,
  autoHeight?: boolean,
  className?: string,
  ...
};

// This component is deprecated

const HeaderContent = ({
  children,
  autoHeight,
  className,
  ...props
}: HeaderContentPropsType) => {
  const headerContentClass = classnames(
    'sg-header__content',
    {
      'sg-header__content--auto-height': autoHeight,
    },
    className
  );

  return (
    <div {...props} className={headerContentClass}>
      {children}
    </div>
  );
};

export default HeaderContent;
