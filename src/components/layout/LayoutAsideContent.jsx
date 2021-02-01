// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type LayoutAsideContentPropsType = {
  className?: ?string,
  children: React.Node,
  ...
};

const LayoutAsideContent = ({
  children,
  className,
  ...props
}: LayoutAsideContentPropsType) => {
  const layoutClass = classnames('sg-layout__aside-content', className);

  return (
    <div {...props} className={layoutClass}>
      {children}
    </div>
  );
};

export default LayoutAsideContent;
