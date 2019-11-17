// @flow strict

import React from 'react';
import cx from 'classnames';
import Icon, {ICON_COLOR, TYPE} from '../icons/Icon';
import {ROUND_BUTTON_SIZE, ROUND_BUTTON_COLOR} from './roundButtonsConsts';

export {ROUND_BUTTON_SIZE, TYPE as ROUND_BUTTON_ICON_TYPE, ROUND_BUTTON_COLOR};

export type RoundButtonPropsType = {
  size?: $Values<typeof ROUND_BUTTON_SIZE>,
  iconType?: $Values<typeof TYPE>,
  color: $Values<typeof ROUND_BUTTON_COLOR>,
  filled?: boolean,
  title?: string,
  ariaLabel?: string,
  className?: string,
};

const RoundButton = ({
  size = ROUND_BUTTON_SIZE.MEDIUM,
  iconType = TYPE.HEART,
  color,
  filled,
  className,
  ariaLabel,
  title,
  ...props
}: RoundButtonPropsType) => {
  const roundButtonClass = cx(
    'sg-round-button',
    {
      [`sg-round-button--${String(color)}`]: color,
      [`sg-round-button--${String(size)}`]: size,
      'sg-round-button--filled': filled,
    },
    className
  );

  const buttonContent = (
    <Icon
      size={size === ROUND_BUTTON_SIZE.SMALL ? '16' : '24'}
      type={iconType}
      color={filled !== undefined ? ICON_COLOR.LIGHT : ICON_COLOR.ADAPTIVE}
    />
  );

  return (
    <button {...props} aria-label={ariaLabel} className={roundButtonClass}>
      <span className="sg-round-button__hole">{buttonContent}</span>
    </button>
  );
};

export default RoundButton;
