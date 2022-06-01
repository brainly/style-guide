// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type HeaderLeftPropsType = {
  children?: React.Node,
  className?: string,
  ...
};

// This component is deprecated

const HeaderLeft = ({children, className, ...props}: HeaderLeftPropsType) => {
  const headerClass = classnames('sg-header__left', className);

  return (
    <div {...props} className={headerClass}>
      {children}
    </div>
  );
};

export default HeaderLeft;
