// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';

export type FlashMessageTypeType = 'default' | 'success' | 'error' | 'info';

export const TYPE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

export type FlashMessagePropsType = {
  text: string,
  type?: FlashMessageTypeType,
  className?: string,
  ...
};

const FlashMessage = ({
  text,
  type = 'default',
  className,
  ...props
}: FlashMessagePropsType) => {
  const messageClass = classNames(
    'sg-flash__message',
    {
      [`sg-flash__message--${type}`]: type !== TYPE.DEFAULT,
    },
    className
  );

  return (
    <div {...props} aria-live="assertive" className="sg-flash" role="alert">
      <div className={messageClass}>
        <Text size="small" weight="bold" align="to-center">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default FlashMessage;
