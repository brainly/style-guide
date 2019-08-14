// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type ActionListHoleSpacingType = 'xsmall' | 'small';

export const ACTION_LIST_HOLE_SPACING = {
  XSMALL: 'xsmall',
  SMALL: 'small',
};

type ActionListHolePropsType = {
  children: Node,
  asContainer?: ?boolean,
  spacing?: ?ActionListHoleSpacingType,
  noSpacing?: ?boolean,
  spaceBellow?: ?boolean,
  spacedLarge?: ?boolean,
  noShrink?: ?boolean,
  grow?: ?boolean,
  toEnd?: ?boolean,
  toRight?: ?boolean,
  stretch?: ?boolean,
  equalWidth?: ?boolean,
  hideOverflow?: ?boolean,
  className?: ?string,
  ...
};

const ActionListHole = ({
  children,
  asContainer,
  spacing,
  noSpacing,
  spaceBellow,
  spacedLarge,
  noShrink,
  grow,
  toEnd,
  toRight,
  stretch,
  equalWidth,
  hideOverflow,
  className,
  ...props
}: ActionListHolePropsType) => {
  const actionListHoleClass = classnames(
    'sg-actions-list__hole',
    {
      'sg-actions-list__hole--container': asContainer,
      'sg-actions-list__hole--no-spacing': noSpacing,
      'sg-actions-list__hole--space-bellow': spaceBellow,
      [`sg-actions-list__hole--spaced-${String(spacing)}`]: spacing,
      'sg-actions-list__hole--spaced-large': spacedLarge,
      'sg-actions-list__hole--no-shrink': noShrink,
      'sg-actions-list__hole--grow': grow,
      'sg-actions-list__hole--to-end': toEnd,
      'sg-actions-list__hole--to-right': toRight,
      'sg-actions-list__hole--stretch': stretch,
      'sg-actions-list__hole--equal-width': equalWidth,
      'sg-actions-list__hole--hide-overflow': hideOverflow,
    },
    className
  );

  return (
    <div {...props} className={actionListHoleClass}>
      {children}
    </div>
  );
};

export default ActionListHole;
