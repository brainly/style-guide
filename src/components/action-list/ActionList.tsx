import * as React from 'react';
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
} as const;

export const ALIGNMENT = {
  BASELINE: 'align-baseline',
  STRETCH: 'stretch',
} as const;

export type ActionListPropsType = {
  children?: React.ReactNode;
  toTop?: boolean | null | undefined;
  className?: string | null | undefined;
  noWrap?: boolean | null | undefined;
  direction?: DirectionType | null | undefined;
  align?: AligmentType | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'toTop' | 'className' | 'noWrap' | 'direction' | 'align'
>;

// This component is deprecated
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
