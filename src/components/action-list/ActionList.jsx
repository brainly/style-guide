import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DIRECTION = {
  TO_RIGHT: 'to-right',
  TO_TOP: 'to-top',
  CENTERED: 'centered',
  SPACE_BETWEEN: 'space-between'
};

const ActionList = ({children, direction, noWrap, className}) => {
  const actionListClass = classNames('sg-actions-list', {
    [`sg-actions-list--${direction}`]: direction,
    'sg-actions-list--no-wrap': noWrap
  }, className);

  return (
    <div className={actionListClass}>
      {children}
    </div>
  );
};

ActionList.propTypes = {
  direction: PropTypes.oneOf(Object.values(DIRECTION)),
  noWrap: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default ActionList;
export {DIRECTION};
