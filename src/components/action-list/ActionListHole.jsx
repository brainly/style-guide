import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ACTION_LIST_HOLE_SPACING = {
  XSMALL: 'xsmall',
  SMALL: 'small'
};

const ActionListHole = ({
  children,
  asContainer,
  spacing,
  noSpacing,
  spaceBellow,
  noShrink,
  grow,
  toEnd,
  toRight,
  className,
  ...props
}) => {
  const actionListHoleClass = classnames('sg-actions-list__hole', {
    'sg-actions-list__hole--container': asContainer,
    'sg-actions-list__hole--no-spacing': noSpacing,
    'sg-actions-list__hole--space-bellow': spaceBellow,
    [`sg-actions-list__hole--spaced-${spacing}`]: spacing,
    'sg-actions-list__hole--no-shrink': noShrink,
    'sg-actions-list__hole--grow': grow,
    'sg-actions-list__hole--to-end': toEnd,
    'sg-actions-list__hole--to-right': toRight
  }, className);

  return (
    <div {...props} className={actionListHoleClass}>
      {children}
    </div>
  );
};

ActionListHole.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  asContainer: PropTypes.bool,
  noSpacing: PropTypes.bool,
  spaceBellow: PropTypes.bool,
  spacing: PropTypes.oneOf(Object.values(ACTION_LIST_HOLE_SPACING)),
  noShrink: PropTypes.bool,
  grow: PropTypes.bool,
  toEnd: PropTypes.bool,
  toRight: PropTypes.bool
};

export default ActionListHole;
