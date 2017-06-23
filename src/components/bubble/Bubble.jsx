import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const alignments = {start: 'start', end: 'end'};
const directions = {left: 'left', right: 'right', top: 'top', bottom: 'bottom'};
const HORIZONTAL_DIRECTIONS = [directions.left, directions.right];

const Bubble = ({alignment, direction, full, children}) => {
  let alignmentClass;

  if (HORIZONTAL_DIRECTIONS.includes(direction)) {
    alignmentClass = 'sg-bubble--column-' + alignment;
  } else {
    alignmentClass = 'sg-bubble--row-' + alignment;
  }

  const bubbleClass = classNames('sg-bubble', {
    'sg-bubble--full': full,
    [`sg-bubble--${direction}`]: direction,
    [alignmentClass]: alignment
  });

  return (
    <div className={bubbleClass}>
      {children}
    </div>
  );
};

Bubble.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(Object.values(directions)).isRequired,
  alignment: PropTypes.oneOf(Object.values(alignments)), // without define is center
  full: PropTypes.bool
};

export default Bubble;
export {directions, alignments};
