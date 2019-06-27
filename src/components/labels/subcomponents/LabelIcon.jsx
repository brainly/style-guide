// @flow

import React from 'react';
import type {Node} from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon} = IconModule;

type PropsType = {
  iconContent?: Node,
  iconSize?: IconModule.IconSizeType,
  iconColor?: IconModule.IconColorType,
  iconType?: IconModule.IconTypeType
};

const LabelIcon = ({iconType, iconColor, iconContent, iconSize}: PropsType) => {
  if (iconContent) {
    return (
      <div className="sg-label__icon">
        {iconContent}
      </div>
    );
  }
  if (iconType) {
    return (
      <div className="sg-label__icon">
        <Icon type={iconType} color={iconColor} size={iconSize} />
      </div>
    );
  }
  return null;
};

export default LabelIcon;
