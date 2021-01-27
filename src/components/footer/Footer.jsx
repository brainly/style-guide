// @flow strict

import * as React from 'react';
import classNames from 'classnames';

type PropsType = {
  children: React.Node,
  className?: string,
  ...
};

const Footer = ({children, className, ...props}: PropsType) => {
  const footerClass = classNames('sg-footer', className);

  return (
    <footer {...props} className={footerClass}>
      <div className="sg-footer__container">{children}</div>
    </footer>
  );
};

export default Footer;
