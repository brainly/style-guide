// @flow
import React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon, TYPE, ICON_COLOR} = IconModule;

type PropsType = {
  size?: IconModule.IconSizeType
};

const Star = ({size, ...props}: PropsType) => (
  <span className="sg-rate-box__star" {...props}>
    <Icon type={TYPE.STAR} size={size} color={ICON_COLOR.ADAPTIVE} />
  </span>
);

export default Star;
