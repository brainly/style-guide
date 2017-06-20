import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Bubble = ({alignment, direction, full, children}) => {
  let alignmentClass;

  if (['left', 'right'].includes(direction)) {
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
  direction: PropTypes.oneOf['top', 'right', 'bottom', 'left'],
  alignment: PropTypes.oneOf(['start', 'middle', 'end']),
  full: PropTypes.bool
};

export default Bubble;
