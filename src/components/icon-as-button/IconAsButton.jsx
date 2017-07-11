import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE, COLOR as iconColors} from '../icons/Icon';
import OverlayedBox from '../overlayed-box/OverlayedBox';

const COLOR = {
  ADAPTIVE: 'adaptive',
  GRAY: 'gray',
  GRAY_SECONDARY: 'gray-secondary',
  GRAY_LIGHT: 'gray-light',
  DARK: 'dark',
  MINT: 'mint',
  PEACH: 'peach',
  LIGHT: 'light'
};
const SIZE = {
  NORMAL: {className: 'normal', iconSize: 26},
  SMALL: {className: 'small', iconSize: 18},
  XSMALL: {className: 'xsmall', iconSize: 14},
  XXSMALL: {className: 'xxsmall', iconSize: 10}
};

const IconAsButtonContent = ({children, overlay}) => {
  if (!overlay) {
    return children;
  }
  return <OverlayedBox overlay={overlay}>{children}</OverlayedBox>;
};

IconAsButtonContent.propTypes = {
  children: PropTypes.element.isRequired,
  overlay: PropTypes.node
};

const IconAsButton = ({color, size = SIZE.NORMAL, type, action, transparent, active, border, overlay}) => {
  const buttonClass = classNames('sg-icon-as-button', {
    [`sg-icon-as-button--${color}`]: color,
    [`sg-icon-as-button--${size.className}`]: size,
    'sg-icon-as-button--with-border': border,
    'sg-icon-as-button--action': action,
    'sg-icon-as-button--action-active': action && active,
    'sg-icon-as-button--transparent': transparent,
    'sg-icon-as-button--transparent-active': transparent && active
  });

  return <button className={buttonClass}>
    <div className="sg-icon-as-button__hole">
      <IconAsButtonContent overlay={overlay}>
        <Icon type={type} color={iconColors.ADAPTIVE} size={size.iconSize}/>
      </IconAsButtonContent>
    </div>
  </button>;
};

IconAsButton.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  border: PropTypes.bool,
  action: PropTypes.bool,
  transparent: PropTypes.bool,
  active: PropTypes.bool,
  overlay: PropTypes.node
};

export default IconAsButton;
export {TYPE, COLOR, SIZE};
