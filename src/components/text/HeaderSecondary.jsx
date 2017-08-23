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

const HeaderSecondary = ({children, type = TYPE.H1, size = SIZE.NORMAL, color, className, ...props}) => {
  const Type = type;
  const headerClass = classNames('sg-header-secondary', {
    [`sg-header-secondary--${size}`]: size !== SIZE.NORMAL,
    [`sg-header-secondary--${color}`]: color
  }, className);

  return <Type {...props} className={headerClass}>
    {children}
  </Type>;
};

HeaderSecondary.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(TYPE)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(COLOR)),
  className: PropTypes.string
};

export default HeaderSecondary;
export {TYPE, SIZE, COLOR};
