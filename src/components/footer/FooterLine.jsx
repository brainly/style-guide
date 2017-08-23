import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterLine = ({children, className, ...props}) => {
  const footerClass = classNames('sg-footer__line', className);

  return <div {...props} className={footerClass}>
    {children}
  </div>;
};

FooterLine.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default FooterLine;


