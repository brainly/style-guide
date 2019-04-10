// @flow

import React from 'react';
import UUID from 'node-uuid';
import classNames from 'classnames';
import type {
  RadioSizeType
} from './formElementsTypes';

export const RADIO_SIZE = {
  NORMAL: 'normal',
  LARGE: 'large'
};

export type RadioPropsType = {
  checked?: boolean,
  name?: string,
  id?: string,
  size?: RadioSizeType,
  className?: string
};

const Radio = (props: RadioPropsType) => {
  const {
    checked,
    name,
    size = RADIO_SIZE.NORMAL,
    className,
    id = UUID.v1(),
    ...additionalProps
  } = props;

  const radioClass = classNames('sg-radio', {
    [`sg-radio--${size}`]: size !== RADIO_SIZE.NORMAL
  }, className);

  return (
    <div className={radioClass}>
      <input className="sg-radio__element" type="radio" checked={checked} name={name} id={id} {...additionalProps} />
      <label className="sg-radio__ghost" htmlFor={id} />
    </div>
  );
};

export default Radio;
