import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE as iconTypes, ICON_COLOR} from '../icons/Icon';

export const COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-lightest',
  PEACH: 'peach'
};

export const PADDING = {
  NO_PADDING: 'no-padding',
  SMALL: 'small-padding',
  XSMALL: 'xsmall-padding',
  XXSMALL: 'xxsmall-padding',
  LARGE: 'large-padding'
};

const Box = ({color, padding, full, children, border = !color, imgSrc, noMinHeight, shadow,
  message, onClose, className, ...props}) => {
  const boxClass = classNames('sg-box', {
    [`sg-box--${color}`]: color,
    'sg-box--no-border': !border,
    'sg-box--full': full,
    [`sg-box--${padding}`]: padding && !message,
    'sg-box--image-wrapper': imgSrc,
    'sg-box--no-min-height': noMinHeight,
    'sg-box--with-shadow': shadow && !message,
    'sg-box--message': message,
    'sg-box--with-onClose': onClose

  }, className);

  let content;

  if (imgSrc) {
    content = <img className="sg-box__image" src={imgSrc} />;
  } else {
    content = <div className="sg-box__hole">{children}</div>;
  }

  return (
    <div {...props} className={boxClass}>
      {onClose ?
        <div className="sg-box--message__close" onClick={onClose}>
          <Icon type={iconTypes.X} color={ICON_COLOR.DARK} size={14} />
        </div> : null
      }
      {content}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(COLOR)),
  border: PropTypes.bool,
  noMinHeight: PropTypes.bool,
  full: PropTypes.bool,
  padding: PropTypes.oneOf(Object.values(PADDING)),
  imgSrc: PropTypes.string,
  shadow: PropTypes.bool,
  message: PropTypes.bool,
  onClose: PropTypes.bool,
  className: PropTypes.string
};

export default Box;
