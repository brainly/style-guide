// @flow strict

import * as React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon, ICON_COLOR} = IconModule;

export type StarPropsType = $ReadOnly<{
  type: 'star' | 'star_outlined',
  size: IconModule.IconSizeType,
}>;

const Star = ({type, size}: StarPropsType) => {
  return (
    <span className="sg-rate-box__star">
      <Icon
        type={type}
        size={size}
        color={ICON_COLOR['icon-yellow-50']}
        className="sg-rate-box__star-icon"
        aria-hidden
      />
    </span>
  );
};

export default Star;
