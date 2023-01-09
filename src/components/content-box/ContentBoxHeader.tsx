import * as React from 'react';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
type SizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'normal'
  | 'large'
  | 'xlarge'
  | 'xxlarge';
type AligmentType = 'left' | 'center' | 'right';
export type ContentBoxHeaderPropsType = {
  children: React.ReactNode;
  spaced?: boolean | null | undefined;
  spacedSmall?: boolean | null | undefined;
  full?: boolean | null | undefined;
  className?: string | null | undefined;
  spacedTop?: SizeType | null | undefined;
  spacedBottom?: SizeType | null | undefined;
  align?: AligmentType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'spaced'
  | 'spacedSmall'
  | 'full'
  | 'className'
  | 'spacedTop'
  | 'spacedBottom'
  | 'align'
>;

const ContentBoxHeader = ({
  children,
  spaced,
  spacedSmall,
  spacedTop,
  spacedBottom,
  className,
  align = ALIGNMENT.LEFT,
  ...props
}: ContentBoxHeaderPropsType) => {
  const contentBoxClass = classNames(
    'sg-content-box__header',
    {
      'sg-content-box__header--with-centered-elements':
        align === ALIGNMENT.CENTER,
      'sg-content-box__header--spaced': spaced,
      'sg-content-box__header--spaced-small': spacedSmall,
      'sg-content-box__header--spaced-top': spacedTop === SIZE.NORMAL,
      [`sg-content-box__header--spaced-top-${spacedTop || ''}`]:
        spacedTop && spacedTop !== SIZE.NORMAL,
      'sg-content-box__header--spaced-bottom': spacedBottom === SIZE.NORMAL,
      [`sg-content-box__header--spaced-bottom-${spacedBottom || ''}`]:
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

export default ContentBoxHeader;
export {SIZE, ALIGNMENT};
