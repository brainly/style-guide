import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6'
};

const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  XSMALL: 'xsmall'
};

const COLOR = {
  LIGHT: 'light'
};

const HeaderPrimary = ({children, type = TYPE.H1, size = SIZE.NORMAL, color, className, ...props}) => {
  const Type = type;
  const headerClass = classNames('sg-header-primary', {
    [`sg-header-primary--${size}`]: size !== SIZE.NORMAL,
    [`sg-header-primary--${color}`]: color
  }, className);

  return (
    <Type {...props} className={headerClass}>
      {children}
    </Type>
  );
};

HeaderPrimary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(TYPE)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string
};

export default HeaderPrimary;
export {TYPE, SIZE, COLOR};
