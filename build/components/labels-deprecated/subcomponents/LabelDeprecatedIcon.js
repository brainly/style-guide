import * as React from 'react';
import * as IconModule from '../../icons/Icon';
var Icon = IconModule.default;

var LabelDeprecatedIcon = function LabelDeprecatedIcon(_ref) {
  var iconType = _ref.iconType,
      iconColor = _ref.iconColor,
      iconContent = _ref.iconContent,
      iconSize = _ref.iconSize;

  if (iconContent) {
    return React.createElement("div", {
      className: "sg-label-deprecated__icon"
    }, iconContent);
  }

  if (iconType) {
    return React.createElement("div", {
      className: "sg-label-deprecated__icon"
    }, React.createElement(Icon, {
      type: iconType,
      color: iconColor,
      size: iconSize
    }));
  }

  return null;
};

export default LabelDeprecatedIcon;