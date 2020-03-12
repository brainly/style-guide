// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children: Node,
  dark?: boolean,
  className?: string,
  ...
};

const HeaderContainer = ({children, dark, className, ...props}: PropsType) => {
  const headerContainerClass = classnames(
    'sg-header__container',
    {
      'sg-header__container--dark': dark,
    },
    className
  );

  return (
    <div {...props} className={headerContainerClass}>
      {children}
    </div>
  );
};

export default HeaderContainer;
