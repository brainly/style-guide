// @flow strict

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
  children: React.Node,
  spaced?: ?boolean,
  spacedSmall?: ?boolean,
  full?: ?boolean,
  className?: ?string,
  spacedTop?: ?SizeType,
  spacedBottom?: ?SizeType,
  align?: AligmentType,
  ...
};

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
