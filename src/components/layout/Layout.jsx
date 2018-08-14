import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Layout = ({
  children,
  header,
  footer,
  reversedOrder,
  noMaxWidth,
  noMarginTop,
  fullPage,
  fullHeight,
  wide,
  threeColumns,
  className,
  ...props
}) => {
  const layoutClass = classNames('sg-layout', className, {
    'sg-layout--three-columns': threeColumns
  });
  const layoutContainerClass = classNames('sg-layout__container', {
    'sg-layout__container--reversed-order': reversedOrder,
    'sg-layout__container--no-max-width': noMaxWidth,
    'sg-layout__container--no-margin-top': noMarginTop,
    'sg-layout__container--full-page': fullPage,
    'sg-layout__container--full-height': fullHeight
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
  noMaxWidth: PropTypes.bool,
  noMarginTop: PropTypes.bool,
  fullPage: PropTypes.bool,
  fullHeight: PropTypes.bool,
  wide: PropTypes.bool,
  threeColumns: PropTypes.bool,
  className: PropTypes.string
};

export default Layout;
