// @flow strict

import * as React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon, ICON_COLOR} = IconModule;

export type StarPropsType = {size?: IconModule.IconSizeType, ...};

const Star = ({size, ...props}: StarPropsType) => (
  <span {...props} className="sg-rate-box__star">
    <Icon type="star" size={size} color={ICON_COLOR.ADAPTIVE} />
  </span>
);

export default Star;
