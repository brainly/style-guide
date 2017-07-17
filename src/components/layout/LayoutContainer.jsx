import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LayoutContainer = ({children, reversedOrder, noMaxWidth, noMarginTop, fullPage}) => {
  const layoutContainerClass = classNames('sg-layout__container', {
    'sg-layout__container--reversed-order': reversedOrder,
    'sg-layout__container--no-max-width': noMaxWidth,
    'sg-layout__container--no-margin-top': noMarginTop,
    'sg-layout__container--full-page': fullPage
  });

  return <div className={layoutContainerClass}>
    {children}
  </div>;
};

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
  reversedOrder: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  noMarginTop: PropTypes.bool,
  fullPage: PropTypes.bool
};

export default LayoutContainer;
