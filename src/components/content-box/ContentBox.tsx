import * as React from 'react';
import classNames from 'classnames';
import {SIZE} from './ContentBoxConstants';

type SizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'normal'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
export type ContentBoxPropsType = {
  children: React.ReactNode;
  spaced?: boolean | null | undefined;
  spacedSmall?: boolean | null | undefined;
  full?: boolean | null | undefined;
  className?: string | null | undefined;
  spacedTop?: SizeType | null | undefined;
  spacedBottom?: SizeType | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'spaced'
  | 'spacedSmall'
  | 'full'
  | 'className'
  | 'spacedTop'
  | 'spacedBottom'
>;

// This component is deprecated
const ContentBox = ({
  children,
  spacedTop,
  spacedBottom,
  spaced,
  spacedSmall,
  full,
  className,
  ...props
}: ContentBoxPropsType) => {
  const contentBoxClass = classNames(
    'sg-content-box',
    {
      'sg-content-box--spaced': spaced,
      'sg-content-box--spaced-small': spacedSmall,
      'sg-content-box--full': full,
      'sg-content-box--spaced-top': spacedTop === SIZE.NORMAL,
      [`sg-content-box--spaced-top-${spacedTop || ''}`]:
        spacedTop && spacedTop !== SIZE.NORMAL,
      'sg-content-box--spaced-bottom': spacedBottom === SIZE.NORMAL,
      [`sg-content-box--spaced-bottom-${spacedBottom || ''}`]:
        spacedBottom && spacedBottom !== SIZE.NORMAL,
    },
    className
  );
  return (
    <div {...props} className={contentBoxClass}>
      {children}
    </div>
  );
};

export default ContentBox;
export const CONTENT_BOX_SPACING_SIZE = SIZE;
