import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const OverlayedBox = ({overlay, children, className}) => {
  const boxClass = classnames('sg-overlayed-box', className);

  return <div className={boxClass}>
    {children}
    <div className="sg-overlayed-box__overlay">
      {overlay}
    </div>
  </div>;
};

OverlayedBox.propTypes = {
  children: PropTypes.node,
  overlay: PropTypes.node,
  className: PropTypes.string
};

export default OverlayedBox;
