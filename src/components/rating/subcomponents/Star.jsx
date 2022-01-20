// @flow strict

import * as React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon, ICON_COLOR} = IconModule;

export type StarPropsType = {
  size?: IconModule.IconSizeType,
  name?: string,
  onChange?: () => mixed,
  active?: boolean,
  'aria-label': string,
  value?: number,
  ...
};

const Star = ({
  size,
  name,
  onChange,
  active,
  'aria-label': label,
  value,
  ...props
}: StarPropsType) => (
  <span {...props} className="sg-rate-box__star">
    {active && (
      <input
        type="radio"
        className="sg-rate-box__radio"
        name={name}
        onChange={onChange}
        value={value}
        aria-label={label}
      />
    )}
    <Icon
      type="star"
      size={size}
      color={ICON_COLOR.ADAPTIVE}
      className="sg-rate-box__star-icon"
      aria-hidden
    />
  </span>
);

export default Star;
