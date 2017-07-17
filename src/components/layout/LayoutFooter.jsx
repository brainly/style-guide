import React from 'react';
import PropTypes from 'prop-types';

const LayoutFooter = ({children}) =>
  <div className="sg-layout__footer">
    {children}
  </div>;

LayoutFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutFooter;
