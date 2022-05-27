// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type FooterLinePropsType = {
  children: React.Node,
  className?: string,
  ...
};

// This component is deprecated

const FooterLine = ({children, className, ...props}: FooterLinePropsType) => {
  const footerClass = classNames('sg-footer__line', className);

  return (
    <div {...props} className={footerClass}>
      {children}
    </div>
  );
};

export default FooterLine;
