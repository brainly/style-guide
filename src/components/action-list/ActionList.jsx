import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DIRECTION = {
  TO_RIGHT: 'to-right',
  TO_TOP: 'to-top',
  CENTERED: 'centered',
  SPACE_BETWEEN: 'space-between'
};

const ActionList = ({holes = [], direction, noWrap}) => {
  const actionListClass = classNames('sg-actions-list', {
    [`sg-actions-list--${direction}`]: direction,
    'sg-actions-list--no-wrap': noWrap
  });

  return (
    <div className={actionListClass}>
      {holes.map((hole, i) => <div key={i} className="sg-actions-list__hole">{hole}</div>)}
    </div>
  );
};

ActionList.propTypes = {
  direction: PropTypes.oneOf(Object.values(DIRECTION)),
  noWrap: PropTypes.bool,
  holes: PropTypes.array.isRequired
};

export default ActionList;
export {DIRECTION};
