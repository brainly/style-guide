// @flow

import React from 'react';
import type {Node} from 'react';
import OverlayedBox from '../../overlayed-box/OverlayedBox';

type IconAsButtonContentType = {
  children: Node,
  overlay?: ?Node
};

const IconAsButtonContent = ({children, overlay}: IconAsButtonContentType) => {
  if (!overlay) {
    return children;
  }
  return (
    <OverlayedBox overlay={overlay}>
      {children}
    </OverlayedBox>
  );
};

export default IconAsButtonContent;
