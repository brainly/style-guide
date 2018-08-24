import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListItemIcon = ({small, children, className, ...props}) => {
  const iconClass = classNames('sg-list__icon', {
    'sg-list__icon--spacing-right-small': small
  }, className);

  return (
    <div className={iconClass} {...props}>
      {children}
    </div>
  );
};

ListItemIcon.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
  className: PropTypes.string
};

export default ListItemIcon;
