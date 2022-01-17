// @flow strict

import * as React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon, ICON_COLOR} = IconModule;

export type StarPropsType = {
  size?: IconModule.IconSizeType,
  name?: string,
  onChange?: () => mixed,
  active?: boolean,
  label: string,
  value?: number,
  ...
};

const Star = ({
  size,
  name,
  onChange,
  active,
  label,
  value,
  ...props
}: StarPropsType) => (
  <span {...props} className="sg-rate-box__star">
    <Icon type="star" size={size} color={ICON_COLOR.ADAPTIVE} aria-hidden />
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
  </span>
);

export default Star;
