import React from 'react';
import PropTypes from 'prop-types';

const OverlayedBox = ({overlay, children}) => <div className="sg-overlayed-box">
  {children}
  <div className="sg-overlayed-box__overlay">
    {overlay}
  </div>
</div>;

OverlayedBox.propTypes = {
  children: PropTypes.node,
  overlay: PropTypes.node
};

export default OverlayedBox;
