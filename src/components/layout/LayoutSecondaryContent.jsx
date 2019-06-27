// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  className?: ?string,
  children: Node
};

const LayoutSecondaryContent = ({children, className, ...props}: PropsType) => {
  const layoutClass = classnames('sg-layout__secondary-content', className);

  return (
    <div {...props} className={layoutClass}>
      {children}
    </div>
  );
};

export default LayoutSecondaryContent;
