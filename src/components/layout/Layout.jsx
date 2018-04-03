import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Layout = ({
  children,
  header,
  footer,
  reversedOrder,
  threeColumns,
  noMaxWidth,
  noMarginTop,
  fullPage,
  className,
  ...props}) => {
  const layoutClass = classNames('sg-layout', {
    'sg-layout--three-columns': threeColumns
  });
  const layoutContainerClass = classNames('sg-layout__container', {
    'sg-layout__container--reversed-order': reversedOrder,
    'sg-layout__container--no-max-width': noMaxWidth,
    'sg-layout__container--no-margin-top': noMarginTop,
    'sg-layout__container--full-page': fullPage
  });
  let footerContent;

  if (footer) {
    footerContent = <div className="sg-layout__footer">{footer}</div>;
  }

  return (
    <div {...props} className={layoutClass}>
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
  threeColumns: PropTypes.bool,
  noMaxWidth: PropTypes.bool,
  noMarginTop: PropTypes.bool,
  fullPage: PropTypes.bool,
  className: PropTypes.string
};

export default Layout;
