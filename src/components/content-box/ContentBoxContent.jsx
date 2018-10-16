// @flow
import * as React from 'react';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

export type ContentBoxContentPropsType = {
  children: React.Node,
  full?: boolean,
  className?: string,
  spacedTop?: ?$Values<typeof SIZE>,
  spacedBottom?: ?$Values<typeof SIZE>,
  align?: $Values<typeof ALIGNMENT>
};

const ContentBoxContent = ({
  children,
  full,
  spacedTop,
  spacedBottom,
  className,
  align = ALIGNMENT.LEFT,
  ...props
}: ContentBoxContentPropsType) => {
  const contentBoxClass = classNames('sg-content-box__content', {
    'sg-content-box__content--full': full,
    'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
    'sg-content-box__content--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__content--spaced-top-${spacedTop || ''}`]: spacedTop && spacedTop !== SIZE.NORMAL,
    'sg-content-box__content--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__content--spaced-bottom-${spacedBottom || ''}`]: spacedBottom && spacedBottom !== SIZE.NORMAL
  }, className);

  return (
    <div {...props} className={contentBoxClass}>
      {children}
    </div>
  );
};

export default ContentBoxContent;
export {SIZE, ALIGNMENT};
