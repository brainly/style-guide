// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type HeaderMiddlePropsType = {
  children?: React.Node,
  className?: string,
  ...
};

const HeaderMiddle = ({
  children,
  className,
  ...props
}: HeaderMiddlePropsType) => {
  const headerClass = classnames('sg-header__middle', className);

  return (
    <div {...props} className={headerClass}>
      {children}
    </div>
  );
};

export default HeaderMiddle;
