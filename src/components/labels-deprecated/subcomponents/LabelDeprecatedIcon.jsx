// @flow strict

import * as React from 'react';
import * as IconModule from '../../icons/Icon';

const {default: Icon} = IconModule;

type PropsType = {
  iconContent?: ?React.Element<*>,
  iconSize?: IconModule.IconSizeType,
  iconColor?: IconModule.IconColorType,
  iconType?: IconModule.IconTypeType,
  ...
};

const LabelDeprecatedIcon = ({
  iconType,
  iconColor,
  iconContent,
  iconSize,
}: PropsType) => {
  if (iconContent) {
    return <div className="sg-label-deprecated__icon">{iconContent}</div>;
  }
  if (iconType) {
    return (
      <div className="sg-label-deprecated__icon">
        <Icon type={iconType} color={iconColor} size={iconSize} />
      </div>
    );
  }
  return null;
};

export default LabelDeprecatedIcon;
