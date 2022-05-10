// @flow strict

import * as React from 'react';
import Text from '../text/Text';

type ErrorMessageColor = 'text-red-60' | 'text-red-40';

export type ErrorMessagePropsType = {
  id?: string,
  color?: ErrorMessageColor,
  children: React.Node,
  ...
};

const ErrorMessage = ({
  color = 'text-red-60',
  id,
  children,
  ...props
}: ErrorMessagePropsType) => {
  return (
    <Text
      className="sg-error-message"
      id={id}
      color={color}
      size="small"
      type="span"
      weight="bold"
      {...props}
    >
      {children}
    </Text>
  );
};

export default ErrorMessage;
