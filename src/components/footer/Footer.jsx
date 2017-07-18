import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({children}) => <footer className="sg-footer">
  <div className="sg-footer__container">
    {children}
  </div>
</footer>;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
