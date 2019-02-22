import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const DIRECTION = {
  TO_RIGHT: 'to-right',
  CENTERED: 'centered',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
  SPACE_EVENLY: 'space-evenly'
};

export const ALIGNMENT = {
  BASELINE: 'align-baseline',
  STRETCH: 'stretch'
};

const ActionList = ({children, toTop, direction, align, noWrap, className, ...props}) => {
  const actionListClass = classNames('sg-actions-list', {
    [`sg-actions-list--${direction}`]: direction,
    [`sg-actions-list--${align}`]: align,
    'sg-actions-list--to-top': toTop,
    'sg-actions-list--no-wrap': noWrap
  }, className);

  return (
    <div {...props} className={actionListClass}>
      {children}
    </div>
  );
};

ActionList.propTypes = {
  direction: PropTypes.oneOf(Object.values(DIRECTION)),
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  noWrap: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  toTop: PropTypes.bool
};

export default ActionList;
