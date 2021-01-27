// @flow strict

import * as React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type PropsType = {
  className?: string,
  containerClassName?: string,
  children: Node,
  header?: Node,
  footer?: Node,
  noMaxWidth?: boolean,
  noMarginTop?: boolean,
  reversedOrder?: boolean,
  fullPage?: boolean,
  threeColumns?: boolean,
  ...
};

const Layout = ({
  children,
  header,
  footer,
  reversedOrder,
  noMaxWidth,
  noMarginTop,
  fullPage,
  threeColumns,
  className,
  containerClassName,
  ...props
}: PropsType) => {
  const layoutClass = classNames('sg-layout', className, {
    'sg-layout--three-columns': threeColumns,
  });
  const layoutContainerClass = classNames(
    'sg-layout__container',
    containerClassName,
    {
      'sg-layout__container--reversed-order': reversedOrder,
      'sg-layout__container--no-max-width': noMaxWidth,
      'sg-layout__container--no-margin-top': noMarginTop,
      'sg-layout__container--full-page': fullPage,
    }
  );
  let footerContent;

  if (footer !== undefined) {
    footerContent = <div className="sg-layout__footer">{footer}</div>;
  }

  return (
    <div {...props} className={layoutClass}>
      {header}
      <div className={layoutContainerClass}>{children}</div>
      {footerContent}
    </div>
  );
};

export default Layout;
