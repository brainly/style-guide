// @flow strict

import React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';

export type FlashMessageTypeType =
  | 'default'
  | 'success'
  | 'error'
  | 'info';

export const TYPE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

type PropsType = {
  text: string,
  type?: FlashMessageTypeType,
  className?: string
};

const FlashMessage = ({text, type = 'default', className, ...props}: PropsType) => {
  const messageClass = classNames('sg-flash__message', {
    [`sg-flash__message--${type}`]: type !== TYPE.DEFAULT
  }, className);

  return (
    <div {...props} className="sg-flash">
      <div className={messageClass}>
        <Text size="small" color="default" weight="bold">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default FlashMessage;
