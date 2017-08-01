import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = ({children, className}) => {
  const footerClass = classNames('sg-footer', className);

  return <footer className={footerClass}>
    <div className="sg-footer__container">
      {children}
    </div>
  </footer>;
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Footer;
