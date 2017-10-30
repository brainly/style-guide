import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeaderContainer = ({children, light, className, ...props}) => {

  const headerContainerClass = classnames('sg-header__container', {
    'sg-header__container--light': light
  }, className);

  return (
    <div {...props} className={headerContainerClass}>
      <div className="sg-header__content">
        {children}
      </div>
    </div>
  );
};

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  light: PropTypes.bool
};

export default HeaderContainer;
