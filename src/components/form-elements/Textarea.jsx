// @flow

import * as React from 'react';
import classnames from 'classnames';

type TextareaSizeType =
  | 'short'
  | 'normal'
  | 'tall'
  | 'xtall';

export const SIZE = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall'
};

export type TextareaPropsType = {
  type?: string | any => React$Node,
  textareaRef?: (ref: ?HTMLElement) => mixed,
  value?: any,
  size?: ?TextareaSizeType,
  valid?: boolean,
  invalid?: boolean,
  fullWidth?: boolean,
  simple?: boolean,
  noPadding?: boolean,
  autoHeight?: boolean,
  className?: string
};

const Textarea = (props: TextareaPropsType) => {
  const {
    valid,
    invalid,
    size = SIZE.NORMAL,
    fullWidth,
    simple,
    noPadding,
    autoHeight,
    value,
    className,
    textareaRef,
    type: Type = 'textarea',
    ...additionalProps
  } = props;

  if (valid && invalid) {
    throw {
      name: 'WrongValidation',
      message: 'Textarea can be either valid or invalid!'
    };
  }

  const textareaClass = classnames('sg-textarea', {
    [`sg-textarea--${String(size)}`]: size !== SIZE.NORMAL,
    'sg-textarea--valid': valid,
    'sg-textarea--invalid': invalid,
    'sg-textarea--full-width': fullWidth,
    'sg-textarea--simple': simple,
    'sg-textarea--no-padding': noPadding,
    'sg-textarea--auto-height': autoHeight
  }, className);

  return (
    <Type
      className={textareaClass}
      ref={textareaRef}
      value={value}
      {...additionalProps}
    />
  );
};

export default Textarea;
