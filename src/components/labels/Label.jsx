import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {COLOR as ICON_COLOR, TYPE as ICON_TYPE} from '../icons/Icon';

const SIZE = {
  NORMAL: {CLASS_NAME: 'normal', ICON_SIZE: 16},
  SMALL: {CLASS_NAME: 'small', ICON_SIZE: 14},
  LARGE: {CLASS_NAME: 'large', ICON_SIZE: 24}
};

const LabelIcon = ({iconType, iconColor, iconContent, iconSize}) => {
  if (iconContent) {
    return <div className="sg-label__icon">
      {iconContent}
    </div>;
  }
  if (iconType) {
    return <div className="sg-label__icon">
      <Icon type={iconType} color={iconColor} size={iconSize}/>
    </div>;
  }
  return null;
};

LabelIcon.propTypes = {
  iconContent: PropTypes.node,
  iconSize: PropTypes.number,
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE))
};

const Label = props => {
  const {
    size = SIZE.NORMAL,
    text,
    children,
    number,
    iconContent,
    iconType,
    iconColor,
    htmlFor,
    secondary,
    unstyled,
    emphasised,
    elementsToTop,
    className
  } = props;

  const labelClass = classNames('sg-label', {
    [`sg-label--${size.CLASS_NAME}`]: size !== SIZE.NORMAL,
    'sg-label--secondary': secondary,
    'sg-label--unstyled': unstyled,
    'sg-label--emphasised': emphasised,
    'sg-label--elements-to-the-top': elementsToTop
  }, className);

  let textElement;
  let numberElement;

  if (text) {
    textElement = <label className="sg-label__text" htmlFor={htmlFor}>{text}</label>;
  }
  if (number !== undefined) {
    numberElement = <div className="sg-label__number">{number}</div>;
  }

  return <div className={labelClass}>
    <LabelIcon iconContent={iconContent} iconType={iconType} iconColor={iconColor} iconSize={size.ICON_SIZE}/>
    {textElement}
    {numberElement}
    {children}
  </div>;
};

Label.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  iconContent: PropTypes.node,
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  number: PropTypes.number,
  secondary: PropTypes.bool,
  unstyled: PropTypes.bool,
  emphasised: PropTypes.bool,
  elementsToTop: PropTypes.bool,
  className: PropTypes.string
};

export default Label;
export {SIZE, ICON_TYPE, ICON_COLOR, LabelIcon};
