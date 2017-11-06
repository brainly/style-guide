import React from 'react';
import PropTypes from 'prop-types';
import Icon, {ICON_COLOR, TYPE as ICON_TYPE} from '../../icons/Icon';

const LabelIcon = ({iconType, iconColor, iconContent, iconSize}) => {
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

LabelIcon.propTypes = {
  iconContent: PropTypes.node,
  iconSize: PropTypes.number,
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE))
};

export default LabelIcon;
