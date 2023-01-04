import * as React from 'react';
import classnames from 'classnames';
type ActionListHoleSpacingType = 'xsmall' | 'small';
export const ACTION_LIST_HOLE_SPACING = {
  XSMALL: 'xsmall',
  SMALL: 'small',
};
export type ActionListHolePropsType = {
  children: React.ReactNode;
  asContainer?: boolean | null | undefined;
  spacing?: ActionListHoleSpacingType | null | undefined;
  noSpacing?: boolean | null | undefined;
  spaceBellow?: boolean | null | undefined;
  spacedLarge?: boolean | null | undefined;
  noShrink?: boolean | null | undefined;
  grow?: boolean | null | undefined;
  toEnd?: boolean | null | undefined;
  toRight?: boolean | null | undefined;
  stretch?: boolean | null | undefined;
  equalWidth?: boolean | null | undefined;
  hideOverflow?: boolean | null | undefined;
  className?: string | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'asContainer'
  | 'spacing'
  | 'noSpacing'
  | 'spaceBellow'
  | 'spacedLarge'
  | 'noShrink'
  | 'grow'
  | 'toEnd'
  | 'toRight'
  | 'stretch'
  | 'equalWidth'
  | 'hideOverflow'
  | 'className'
>;

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