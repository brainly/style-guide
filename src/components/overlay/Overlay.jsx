import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({children}) => <div className="sg-overlay">
  {children}
</div>;

Overlay.propTypes = {
  children: PropTypes.node
};

export default Overlay;
