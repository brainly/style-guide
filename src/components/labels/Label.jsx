import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {COLOR as ICON_COLOR, TYPE as ICON_TYPE} from '../icons/Icon';

const SIZE = {
  NORMAL: {CLASS_NAME: 'normal', ICON_SIZE: 16},
  SMALL: {CLASS_NAME: 'small', ICON_SIZE: 14},
  LARGE: {CLASS_NAME: 'large', ICON_SIZE: 24}
};

const Label = ({text, number, iconType, iconColor,
  size = SIZE.NORMAL, secondary, unstyled, emphasised, elementsToTop
}) => {

  const labelClass = classNames('sg-label', {
    [`sg-label--${size.CLASS_NAME}`]: size !== SIZE.NORMAL,
    'sg-label--secondary': secondary,
    'sg-label--unstyled': unstyled,
    'sg-label--emphasised': emphasised,
    'sg-label--elements-to-the-top': elementsToTop
  });

  let numberElement;

  if (number) {
    numberElement = <div className="sg-label__number">{number}</div>;
  }

  return <div className={labelClass}>
    <div className="sg-label__icon">
      <Icon type={iconType} color={iconColor} size={size.ICON_SIZE}/>
    </div>
    <div className="sg-label__text">{text}</div>
    {numberElement}
  </div>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  number: PropTypes.number,
  secondary: PropTypes.bool,
  unstyled: PropTypes.bool,
  emphasised: PropTypes.bool,
  elementsToTop: PropTypes.bool
};

export default Label;
export {SIZE, ICON_TYPE, ICON_COLOR};
