import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE, colors as iconColors} from '../icons/Icon';

const colors = {
  adaptive: 'adaptive',
  gray: 'gray',
  gray_secondary: 'gray-secondary',
  gray_light: 'gray-light',
  dark: 'dark',
  mint: 'mint',
  peach: 'peach',
  light: 'light'
};
const sizes = {
  normal: 'normal',
  small: 'small',
  xsmall: 'xsmall',
  xxsmall: 'xxsmall'
};
const icoSizes = {
  normal: 26,
  small: 18,
  xsmall: 14,
  xxsmall: 10
};

const IconAsButton = ({color, size = sizes.normal, type, action, transparent, active, border}) => {
  const buttonClass = classNames('sg-icon-as-button', {
    [`sg-icon-as-button--${color}`]: color,
    [`sg-icon-as-button--${size}`]: size,
    'sg-icon-as-button--with-border': border,
    'sg-icon-as-button--action': action,
    'sg-icon-as-button--action-active': action && active,
    'sg-icon-as-button--transparent': transparent,
    'sg-icon-as-button--transparent-active': transparent && active
  });

  return <button className={buttonClass}>
    <div className="sg-icon-as-button__hole">
      <Icon type={type} color={iconColors.adaptive} size={icoSizes[size]}/>
    </div>
  </button>;
};

IconAsButton.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  color: PropTypes.oneOf(Object.values(colors)),
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  border: PropTypes.bool,
  action: PropTypes.bool,
  transparent: PropTypes.bool,
  active: PropTypes.bool
};

export default IconAsButton;
export {TYPE, colors, sizes};
