import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Overlay = ({fixed, children, className}) => {
  const overlayClass = classnames('sg-overlay', {
    'sg-overlay--fixed': fixed
  },
  className);


  return <div className={overlayClass}>
    {children}
  </div>;
};

Overlay.propTypes = {
  fixed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Overlay;
