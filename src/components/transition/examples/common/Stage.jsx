// @flow strict

import * as React from 'react';
import Box from '../../../box/Box';
import Text from '../../../text/Text';

type PropsType = $ReadOnly<{
  children: React.Node,
  className?: string,
  description?: string,
  centered?: boolean,
  portrait?: boolean,
  onClick?: () => void,
}>;

const centeredStyle = {
  display: 'flex',
  alignItems: 'center',
};

const Stage = React.forwardRef<PropsType, HTMLElement>(
  (
    {children, className, description, centered, portrait, onClick}: PropsType,
    ref
  ) => (
    <Box
      style={{
        cursor: onClick !== undefined ? 'pointer' : 'default',
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
        <div
          style={{
            position: 'absolute',
            textAlign: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
            left: 10,
            bottom: 10,
            right: 10,
          }}
        >
          <Text size="small" color="text-gray-50">
            {description}
          </Text>
        </div>
      </div>
    </Box>
  )
);

export default Stage;
