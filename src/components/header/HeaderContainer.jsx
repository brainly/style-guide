// @flow strict

import * as React from 'react';
import classnames from 'classnames';

type PropsType = {
  children: React.Node,
  className?: string,
  ...
};

const HeaderContainer = ({children, className, ...props}: PropsType) => {
  const headerContainerClass = classnames('sg-header__container', className);

  return (
    <div {...props} className={headerContainerClass}>
      {children}
    </div>
  );
};

export default HeaderContainer;
