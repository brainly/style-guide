import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import ActionListHole from './ActionListHole';

const DIRECTION = {
  TO_RIGHT: 'to-right',
  TO_TOP: 'to-top',
  CENTERED: 'centered',
  SPACE_BETWEEN: 'space-between'
};

const ActionList = ({children, direction, noWrap}) => {
  const actionListClass = classNames('sg-actions-list', {
    [`sg-actions-list--${direction}`]: direction,
    'sg-actions-list--no-wrap': noWrap
  });

  return (
    <div className={actionListClass}>
      {children}
    </div>
  );
};

ActionList.propTypes = {
  direction: PropTypes.oneOf(Object.values(DIRECTION)),
  noWrap: PropTypes.bool,
  children: PropTypes.node
};

export default ActionList;
export {DIRECTION};
