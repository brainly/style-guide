import React, {useState} from 'react';
import {createPortal} from 'react-dom';

const IFrame = ({children, ...props}) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props} loading="lazy" ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default IFrame;
