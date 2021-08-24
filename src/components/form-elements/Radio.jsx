// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import generateRandomString from '../../js/generateRandomString';
import Text from '../text/Text';

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
  children?: React.Node,
  ...
};

const Radio = (props: RadioPropsType) => {
  const {
    checked,
    name,
    size = 'xxs',
    className,
    id = generateRandomString(),
    children,
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
    <label className={radioClass} htmlFor={id}>
      <input
        {...additionalProps}
        className="sg-radio__element"
        type="radio"
        checked={checked}
        name={name}
        id={id}
      />
      <span className="sg-radio__ghost" aria-hidden="true" />
      {children !== undefined && children !== null && (
        <Text
          size="small"
          type="span"
          weight="bold"
          className="sg-radio__label"
        >
          {children}
        </Text>
      )}
    </label>
  );
};

export default Radio;
