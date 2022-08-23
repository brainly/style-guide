// @flow strict

import * as React from 'react';
import Text from '../text/Text.vanex';
import cx from 'classnames';

type ErrorMessageColorType = 'text-red-60' | 'text-red-40';

export type ErrorMessagePropsType = {
  id?: string,
  className?: string,
  color?: ErrorMessageColorType,
  children: React.Node,
  ...
};

const ErrorMessage = ({
  className,
  color = 'text-red-60',
  id,
  children,
  ...props
}: ErrorMessagePropsType) => {
  const errorMessageClass = cx('sg-error-message', className);

  return (
    <Text
      {...props}
      className={errorMessageClass}
      id={id}
      color={color}
      size="small"
      type="span"
      weight="bold"
    >
      {children}
    </Text>
  );
};

export default ErrorMessage;
