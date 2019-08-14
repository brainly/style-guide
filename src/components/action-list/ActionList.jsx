// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type DirectionType =
  | 'to-right'
  | 'centered'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AligmentType = 'align-baseline' | 'stretch';

export const DIRECTION = {
  TO_RIGHT: 'to-right',
  CENTERED: 'centered',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
  SPACE_EVENLY: 'space-evenly',
};

export const ALIGNMENT = {
  BASELINE: 'align-baseline',
  STRETCH: 'stretch',
};

type ActionListPropsType = {
  children: Node,
  toTop?: ?boolean,
  className?: ?string,
  noWrap?: ?boolean,
  direction?: ?DirectionType,
  align?: ?AligmentType,
};

const ActionList = ({
  children,
  toTop,
  direction,
  align,
  noWrap,
  className,
  ...props
}: ActionListPropsType) => {
  const actionListClass = classNames(
    'sg-actions-list',
    {
      [`sg-actions-list--${String(direction)}`]: direction,
      [`sg-actions-list--${String(align)}`]: align,
      'sg-actions-list--to-top': toTop,
      'sg-actions-list--no-wrap': noWrap,
    },
    className
  );

  return (
    <div {...props} className={actionListClass}>
      {children}
    </div>
  );
};

export default ActionList;
