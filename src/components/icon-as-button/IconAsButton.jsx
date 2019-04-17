// @flow
import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import * as IconModule from '../icons/Icon';
import IconAsButtonContent from './subcomponents/IconAsButtonContent';

const {ICON_COLOR, default: Icon} = IconModule;

type IconSizeType =
  | 'normal'
  | 'small'
  | 'xsmall'
  | 'xxsmall';

export const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  XSMALL: 'xsmall',
  XXSMALL: 'xxsmall'
};

const ICON_SIZE = {
  [SIZE.NORMAL]: 26,
  [SIZE.SMALL]: 18,
  [SIZE.XSMALL]: 14,
  [SIZE.XXSMALL]: 10
};

type IconAsButtonPropsType = {
  size?: IconSizeType,
  color?: IconModule.IconColorType,
  type?: ?IconModule.IconTypeType,
  children?: ?Node,
  border?: boolean,
  action?: boolean,
  transparent?: boolean,
  active?: boolean,
  overlay?: ?Node,
  href?: string,
  className?: string
};

const IconAsButton = ({
  color, size = SIZE.NORMAL, type, children, action, transparent, active, border, overlay, className, ...props
}: IconAsButtonPropsType) => {
  const buttonClass = classNames('sg-icon-as-button', {
    [`sg-icon-as-button--${String(color)}`]: color,
    [`sg-icon-as-button--${size}`]: size,
    'sg-icon-as-button--with-border': border,
    'sg-icon-as-button--action': action,
    'sg-icon-as-button--action-active': action && active,
    'sg-icon-as-button--transparent': transparent,
    'sg-icon-as-button--transparent-active': transparent && active
  }, className);

  let content;

  if (type) {
    content = <Icon type={type} color={ICON_COLOR.ADAPTIVE} size={ICON_SIZE[size]} />;
  } else {
    content = children;
  }

  let RenderType = 'button';

  if (props.href) {
    RenderType = 'a';
  }

  return (
    <RenderType {...props} role="button" className={buttonClass}>
      <div className="sg-icon-as-button__hole">
        <IconAsButtonContent overlay={overlay}>
          {content}
        </IconAsButtonContent>
      </div>
    </RenderType>
  );
};

export default IconAsButton;
export {TYPE, ICON_COLOR} from '../icons/Icon';
