import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({children}) => <footer className="sg-layout__footer">
  <div className="sg-footer">
    <div className="sg-footer__container">
      {children}
    </div>
  </div>
</footer>;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
