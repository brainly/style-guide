// @flow strict

import * as React from 'react';
import Box from '../../../box/Box';
import Text from '../../../text/Text';

type PropsType = $ReadOnly<{
  children: React.Node,
  format?: 'portrait' | 'landscape' | 'listitem',
  className?: string,
  description?: string,
  centered?: boolean,
  overflowHidden?: boolean,
  onClick?: () => void,
}>;

const centeredStyle = {
  display: 'flex',
  alignItems: 'center',
};

const formats = {
  portrait: [320, 568],
  landscape: [640, 400],
  listitem: [250, 200],
};

const Stage = React.forwardRef<PropsType, HTMLElement>(
  (
    {
      children,
      format = 'landscape',
      className,
      description,
      centered,
      overflowHidden,
      onClick,
    }: PropsType,
    ref
  ) => (
    <Box
      style={{
        cursor: onClick !== undefined ? 'pointer' : 'default',
        width: formats[format][0],
        height: formats[format][1],
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
          overflow: overflowHidden ? 'hidden' : 'auto',
          padding: 16,
          ...(centered ? centeredStyle : {}),
        }}
      >
        <div className={className} style={{margin: 'auto'}}>
          {children}
        </div>

        {description !== undefined && (
          <div
            style={{
              position: 'absolute',
              textAlign: 'center',
              left: 10,
              bottom: 10,
              right: 10,
            }}
          >
            <Text size="small" color="text-gray-50">
              {description}
            </Text>
          </div>
        )}
      </div>
    </Box>
  )
);

export default Stage;
