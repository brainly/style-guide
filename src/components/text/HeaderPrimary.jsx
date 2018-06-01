import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HEADER_COLOR, HEADER_SIZE, HEADER_TYPE, HEADER_TRANSFORM} from './headerConsts';

const HeaderPrimary = ({
  children,
  type = HEADER_TYPE.H1,
  size = HEADER_SIZE.NORMAL,
  transform,
  color,
  className,
  ...props
}) => {
  const Type = type;
  const headerClass = classNames('sg-header-primary', {
    [`sg-header-primary--${size}`]: size !== HEADER_SIZE.NORMAL,
    [`sg-header-primary--${color}`]: color,
    [`sg-header-primary--${transform}`]: transform
  }, className);

  return (
    <Type {...props} className={headerClass}>
      {children}
    </Type>
  );
};

HeaderPrimary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(HEADER_TYPE)),
  size: PropTypes.oneOf(Object.values(HEADER_SIZE)),
  transform: PropTypes.oneOf(Object.values(HEADER_TRANSFORM)),
  color: PropTypes.oneOf(Object.values(HEADER_COLOR)),
  className: PropTypes.string
};

export default HeaderPrimary;
export {HEADER_TYPE, HEADER_SIZE, HEADER_COLOR, HEADER_TRANSFORM};
