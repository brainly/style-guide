import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ALIGNMENT = {START: 'start', END: 'end'};
const DIRECTION = {LEFT: 'left', RIGHT: 'right', TOP: 'top', BOTTOM: 'bottom'};
const HORIZONTAL_DIRECTIONS = [DIRECTION.LEFT, DIRECTION.RIGHT];

const Bubble = ({alignment, direction, full, children, className}) => {
  let alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = 'sg-bubble--column-' + alignment;
  } else {
    alignmentClass = 'sg-bubble--row-' + alignment;
  }

  const bubbleClass = classNames('sg-bubble', className, {
    'sg-bubble--full': full,
    [`sg-bubble--${direction}`]: direction,
    [alignmentClass]: alignment
  }, className);

  return (
    <div className={bubbleClass}>
      {children}
    </div>
  );
};

Bubble.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(Object.values(DIRECTION)).isRequired,
  alignment: PropTypes.oneOf(Object.values(ALIGNMENT)), // without define is center
  full: PropTypes.bool,
  className: PropTypes.string
};

export default Bubble;
export {DIRECTION, ALIGNMENT};
