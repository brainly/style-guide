import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HORIZONTAL_DIRECTIONS = ['left', 'right'];
const VERTICAL_DIRECTIONS = ['top', 'bottom'];
const ALIGNMENT_OPTIONS = ['start', 'end'];

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
  direction: PropTypes.oneOf([...HORIZONTAL_DIRECTIONS, ...VERTICAL_DIRECTIONS]).isRequired,
  alignment: PropTypes.oneOf(ALIGNMENT_OPTIONS), // without define is center
  full: PropTypes.bool
};

export default Bubble;
