import React from 'react';
import PropTypes from 'prop-types';
import OverlayedBox from '../../overlayed-box/OverlayedBox';

const IconAsButtonContent = ({children = null, overlay}) => {
  if (!overlay) {
    return children;
  }
  return (
    <OverlayedBox overlay={overlay}>
      {children}
    </OverlayedBox>
  );
};

IconAsButtonContent.propTypes = {
  children: PropTypes.element.isRequired,
  overlay: PropTypes.node
};

export default IconAsButtonContent;
