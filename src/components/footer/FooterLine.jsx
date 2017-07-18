import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({children}) =>
  <div className="sg-footer__line">
    {children}
  </div>;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;


