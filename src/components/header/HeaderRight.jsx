// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type HeaderRightPropsType = {
  children?: React.Node,
  className?: string,
  ...
};

const HeaderRight = ({children, className, ...props}: HeaderRightPropsType) => {
  const headerClass = classnames('sg-header__right', className);

  return (
    <div {...props} className={headerClass}>
      {children}
    </div>
  );
};

export default HeaderRight;
