import React from 'react';
import PropTypes from 'prop-types';

const LayoutBox = ({children}) =>
  <div className="sg-layout__box">
    {children}
  </div>;

LayoutBox.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutBox;
