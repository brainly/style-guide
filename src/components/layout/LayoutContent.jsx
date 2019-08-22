// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type PropsType = {
  className?: ?string,
  children: Node,
  noMaxWidth?: boolean,
  center?: boolean,
  ...
};

const LayoutContent = ({
  children,
  noMaxWidth,
  center,
  className,
  ...props
}: PropsType) => {
  const layoutContentClass = classNames(
    'sg-layout__content',
    {
      'sg-layout__content--no-max-width': noMaxWidth,
      'sg-layout__content--center': center,
    },
    className
  );

  return (
    <div {...props} className={layoutContentClass}>
      {children}
    </div>
  );
};

export default LayoutContent;
