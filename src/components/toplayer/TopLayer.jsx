import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const TopLayer = ({children, size, lead, fill, modal, withBugbox, smallSpaced, splashScreen, limitedWidth, row}) => {
  const topLayerClassName = classnames('sg-toplayer', {
    'sg-toplayer--lead': lead,
    'sg-toplayer--fill': fill,
    'sg-toplayer--modal': modal,
    'sg-toplayer--with-bugbox': withBugbox,
    'sg-toplayer--small-spaced': smallSpaced,
    'sg-toplayer--splash-screen': splashScreen,
    'sg-toplayer--limited-width': limitedWidth,
    'sg-toplayer--row': row,
    [`sg-toplayer--${size}`]: size
  });

  return <div className={topLayerClassName}>
    <div className="sg-toplayer__header">
      <a className="sg-toplayer__close">×</a>
    </div>
    <div className="sg-toplayer__wrapper">
      {children}
    </div>
  </div>;
};

TopLayer.propTypes = {
  children: PropTypes.node.isRequired,
  lead: PropTypes.bool,
  fill: PropTypes.bool,
  modal: PropTypes.bool,
  withBugbox: PropTypes.bool,
  smallSpaced: PropTypes.bool,
  splashScreen: PropTypes.bool,
  limitedWidth: PropTypes.bool,
  row: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(sizes))
};

export default TopLayer;
export {sizes};
