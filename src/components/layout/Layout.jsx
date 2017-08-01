import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Layout = ({children, header, footer, reversedOrder, noMaxWidth, noMarginTop, fullPage, className}) => {
  const layoutContainerClass = classNames('sg-layout__container', {
    'sg-layout__container--reversed-order': reversedOrder,
    'sg-layout__container--no-max-width': noMaxWidth,
    'sg-layout__container--no-margin-top': noMarginTop,
    'sg-layout__container--full-page': fullPage
  }, className);

  let footerContent;

  if (footer) {
    footerContent = <div className="sg-layout__footer">{footer}</div>;
  }

  return (
    <div className="sg-layout">
      {header}
      <div className={layoutContainerClass}>
        {children}
      </div>
      {footerContent}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  reversedOrder: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  noMarginTop: PropTypes.bool,
  fullPage: PropTypes.bool,
  className: PropTypes.string
};

export default Layout;
