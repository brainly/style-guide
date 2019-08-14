// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children: Node,
  autoHeight?: boolean,
  className?: string,
};

const HeaderContent = ({
  children,
  autoHeight,
  className,
  ...props
}: PropsType) => {
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
