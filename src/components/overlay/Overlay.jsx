import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Overlay = ({children, className}) => {
  const overlayClass = classnames('sg-overlay', className);

  return <div className={overlayClass}>
    {children}
  </div>;
};

Overlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Overlay;
