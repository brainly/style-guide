// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type LayoutContentPropsType = {
  className?: ?string,
  children: React.Node,
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
}: LayoutContentPropsType) => {
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
