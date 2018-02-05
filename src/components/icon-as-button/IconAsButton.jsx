import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE, ICON_COLOR} from '../icons/Icon';
import IconAsButtonContent from './subcomponents/IconAsButtonContent';

export const SIZE = {
  NORMAL: {className: 'normal', iconSize: 26},
  SMALL: {className: 'small', iconSize: 18},
  XSMALL: {className: 'xsmall', iconSize: 14},
  XXSMALL: {className: 'xxsmall', iconSize: 10}
};

const IconAsButton = ({
  color, size = SIZE.NORMAL, type, children, action, transparent, active, border, overlay, className, ...props
}) => {
  const buttonClass = classNames('sg-icon-as-button', {
    [`sg-icon-as-button--${color}`]: color,
    [`sg-icon-as-button--${size.className}`]: size,
    'sg-icon-as-button--with-border': border,
    'sg-icon-as-button--action': action,
    'sg-icon-as-button--action-active': action && active,
    'sg-icon-as-button--transparent': transparent,
    'sg-icon-as-button--transparent-active': transparent && active
  }, className);

  let content;

  if (type) {
    content = <Icon type={type} color={ICON_COLOR.ADAPTIVE} size={size.iconSize} />;
  } else {
    content = children;
  }

  let renderType = 'button';

  if (props.href) {
    renderType = 'a';
  }

  return (
    <renderType {...props} className={buttonClass}>
      <div className="sg-icon-as-button__hole">
        <IconAsButtonContent overlay={overlay}>
          {content}
        </IconAsButtonContent>
      </div>
    </renderType>
  );
};

IconAsButton.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(ICON_COLOR)),
  type: PropTypes.oneOf(Object.values(TYPE)),
  children: PropTypes.element,
  border: PropTypes.bool,
  action: PropTypes.bool,
  transparent: PropTypes.bool,
  active: PropTypes.bool,
  overlay: PropTypes.node,
  className: PropTypes.string
};

export default IconAsButton;
export {TYPE, ICON_COLOR};
