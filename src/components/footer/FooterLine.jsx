import React from 'react';
import PropTypes from 'prop-types';

const FooterLine = ({children}) =>
  <div className="sg-footer__line">
    {children}
  </div>;

FooterLine.propTypes = {
  children: PropTypes.node.isRequired
};

export default FooterLine;


