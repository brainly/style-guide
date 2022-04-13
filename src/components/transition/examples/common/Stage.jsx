// @flow strict

import * as React from 'react';
import Box from '../../../box/Box';

type PropsType = $ReadOnly<{
  children: React.Node,
  className?: string,
  centered?: boolean,
  portrait?: boolean,
  onClick?: () => void,
}>;

const centeredStyle = {
  display: 'flex',
  alignItems: 'center',
};

const Stage = React.forwardRef<PropsType, HTMLElement>(
  ({children, className, centered, portrait, onClick}: PropsType, ref) => (
    <Box
      style={{
        width: portrait ? 320 : 640,
        height: portrait ? 568 : 400,
        padding: 0,
      }}
      onClick={onClick}
      color="gray-10"
    >
      <div
        ref={ref}
        style={{
          height: '100%',
          position: 'relative',
          overflow: 'auto',
          padding: 16,
          ...(centered ? centeredStyle : {}),
        }}
      >
        <div className={className} style={{margin: 'auto'}}>
          {children}
        </div>
      </div>
    </Box>
  )
);

export default Stage;
