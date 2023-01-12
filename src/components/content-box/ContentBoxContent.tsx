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
export type ContentBoxContentPropsType = {
  children: React.ReactNode;
  full?: boolean | null | undefined;
  className?: string | null | undefined;
  spacedTop?: SizeType | null | undefined;
  spacedBottom?: SizeType | null | undefined;
  align?: AligmentType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'full' | 'className' | 'spacedTop' | 'spacedBottom' | 'align'
>;

const ContentBoxContent = ({
  children,
  full,
  spacedTop,
  spacedBottom,
  className,
  align = ALIGNMENT.LEFT,
  ...props
}: ContentBoxContentPropsType) => {
  const contentBoxClass = classNames(
    'sg-content-box__content',
    {
      'sg-content-box__content--full': full,
      'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
      'sg-content-box__content--spaced-top': spacedTop === SIZE.NORMAL,
      [`sg-content-box__content--spaced-top-${spacedTop || ''}`]:
        spacedTop && spacedTop !== SIZE.NORMAL,
      'sg-content-box__content--spaced-bottom': spacedBottom === SIZE.NORMAL,
      [`sg-content-box__content--spaced-bottom-${spacedBottom || ''}`]:
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

export default ContentBoxContent;
export {SIZE, ALIGNMENT};
