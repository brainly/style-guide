// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type PropsType = {
  children: React.Node,
  className?: string,
  ...
};

const FooterLine = ({children, className, ...props}: PropsType) => {
  const footerClass = classNames('sg-footer__line', className);

  return (
    <div {...props} className={footerClass}>
      {children}
    </div>
  );
};

export default FooterLine;
