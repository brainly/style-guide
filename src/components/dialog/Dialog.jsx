//@flow strict

import * as React from 'react';

const Dialog = ({isOpen, children, onClose}) => {
  return isOpen ? <div>Dialog</div> : null;
};

export default Dialog;
