import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TEXT_BIT_TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  DIV: 'div'
};

export const TEXT_BIT_SIZE = {
  SMALL: 'small',
  LARGE: 'large',
  XLARGE: 'xlarge'
};

export const TEXT_BIT_COLOR = {
  BLUE_SECONDARY: 'blue-secondary',
  WHITE: 'white',
  BLACK: 'black',
  GRAY_SECONDARY: 'gray-secondary',
  PEACH_PRIMARY: 'peach-primary'
};

const TextBit = ({children, type = TEXT_BIT_TYPE.H1, color, size, className, ...props}) => {
  const Type = type;
  const textClass = classNames('sg-text-bit', {
    [`sg-text-bit--${size}`]: size,
    [`sg-text-bit--${color}`]: color
  }, className);

  return (
    <Type {...props} className={textClass}>
      {children}
    </Type>
  );
};

TextBit.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(TEXT_BIT_SIZE)),
  color: PropTypes.oneOf(Object.values(TEXT_BIT_COLOR)),
  type: PropTypes.oneOf(Object.values(TEXT_BIT_TYPE)),
  className: PropTypes.string
};

export default TextBit;
