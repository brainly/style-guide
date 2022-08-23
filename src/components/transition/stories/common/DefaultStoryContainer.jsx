// @flow strict

import * as React from 'react';
import Text from '../../../text/Text.vanex';

type PropsType = $ReadOnly<{
  height: string,
  children: React.Node,
  caption: string,
  onClick: () => void,
}>;

const DefaultStoryContainer = ({
  height,
  children,
  caption,
  onClick,
}: PropsType) => (
  <div
    style={{
      height,
      minWidth: 200,
      display: 'flex',
      padding: '3em',
      justifyContent: 'center',
      position: 'relative',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    <div
      style={{
        userSelect: 'none',
        position: 'absolute',
        left: 10,
        bottom: 10,
        right: 10,
      }}
    >
      <Text size="small" color="text-gray-50" noWrap align="to-center">
        {caption}
      </Text>
    </div>
    {children}
  </div>
);

export default DefaultStoryContainer;
