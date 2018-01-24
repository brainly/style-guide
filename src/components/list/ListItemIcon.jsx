import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItemIcon = ({small, children}) => {
  const iconClass = classNames('sg-list__icon', {
    'sg-list__icon--spacing-right-small': small
  });

  return (
    <div className={iconClass}>
      {children}
    </div>
  );
};

ListItemIcon.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool
};

export default ListItemIcon;