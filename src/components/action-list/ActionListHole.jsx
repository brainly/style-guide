import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ActionListHole = ({children, className, ...props}) => {
  const finalClassName = classnames('sg-actions-list__hole', className);

  return <div {...props} className={finalClassName}>
    {children}
  </div>;
};

ActionListHole.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ActionListHole;
