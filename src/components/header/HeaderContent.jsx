import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeaderContent = ({children, autoHeight = false, className, ...props}) => {

  const headerContentClass = classnames('sg-header__content', {
    'sg-header__content--auto-height': autoHeight
  }, className);

  return (
    <div {...props} className={headerContentClass}>
        {children}
    </div>
  );
};

HeaderContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  autoHeight: PropTypes.bool
};

export default HeaderContent;
