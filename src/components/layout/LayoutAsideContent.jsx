// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  className?: ?string,
  children: Node
};

const LayoutAsideContent = ({children, className, ...props}: PropsType) => {
  const layoutClass = classnames('sg-layout__aside-content', className);

  return (
    <div {...props} className={layoutClass}>
      {children}
    </div>
  );
};

export default LayoutAsideContent;
