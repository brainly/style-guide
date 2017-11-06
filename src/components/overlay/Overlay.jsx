import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Overlay = ({partial, children, className, ...props}) => {
  const overlayClass = classnames(
    'sg-overlay',
    {'sg-overlay--partial': partial},
    className);

  return (
    <div {...props} className={overlayClass}>
      {children}
    </div>
  );
};

Overlay.propTypes = {
  partial: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Overlay;
