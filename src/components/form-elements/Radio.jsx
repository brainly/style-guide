// @flow strict

import React from 'react';
import classNames from 'classnames';
import generateRandomString from '../../js/generateRandomString';

type RadioSizeType = 'xxs' | 's';

export const RADIO_SIZE = {
  xxs: 'xxs',
  s: 's',
};

export type RadioPropsType = {
  checked?: boolean,
  name?: string,
  id?: string,
  size?: ?RadioSizeType,
  className?: string,
  ...
};

const Radio = (props: RadioPropsType) => {
  const {
    checked,
    name,
    size = 'xxs',
    className,
    id = generateRandomString(),
    ...additionalProps
  } = props;

  const radioClass = classNames(
    'sg-radio',
    {
      [`sg-radio--${String(size)}`]: size,
    },
    className
  );

  return (
    <div className={radioClass}>
      <input
        {...additionalProps}
        className="sg-radio__element"
        type="radio"
        checked={checked}
        name={name}
        id={id}
      />
      <label className="sg-radio__ghost" htmlFor={id} />
    </div>
  );
};

export default Radio;
