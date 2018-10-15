// @flow
import * as React from 'react';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

export type ContentBoxTitlePropsType = {
  children: React.Node,
  spaced?: boolean,
  spacedSmall?: boolean,
  className?: string,
  spacedTop?: ?$Values<typeof SIZE>,
  spacedBottom?: ?$Values<typeof SIZE>,
  align: $Values<typeof ALIGNMENT>
};

const ContentBoxTitle = ({
  children,
  spaced,
  spacedSmall,
  spacedTop,
  spacedBottom,
  className,
  align = ALIGNMENT.LEFT
}: ContentBoxTitlePropsType) => {

  const contentBoxClass = classNames('sg-content-box__title', {
    'sg-content-box__title--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__title--spaced': spaced,
    'sg-content-box__title--spaced-small': spacedSmall,
    'sg-content-box__title--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__title--spaced-top-${spacedTop || ''}`]: spacedTop && spacedTop !== SIZE.NORMAL,
    'sg-content-box__title--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__title--spaced-bottom-${spacedBottom || ''}`]: spacedBottom && spacedBottom !== SIZE.NORMAL
  }, className);

  return <div className={contentBoxClass}>{children}</div>;
};

export default ContentBoxTitle;
export {SIZE, ALIGNMENT};
