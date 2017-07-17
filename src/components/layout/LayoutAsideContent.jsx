import React from 'react';
import PropTypes from 'prop-types';

const LayoutAsideContent = ({children}) =>
  <div className="sg-layout__aside-content">
    {children}
  </div>;

LayoutAsideContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutAsideContent;
