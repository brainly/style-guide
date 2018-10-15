// @flow
import * as React from 'react';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

export type ContentBoxActionsPropsType = {
  children: React.Node,
  className?: string,
  spacedTop?: $Values<typeof SIZE>,
  spacedBottom?: $Values<typeof SIZE>,
  align?: $Values<typeof ALIGNMENT>
};

const ContentBoxActions = ({
  children,
  spacedTop,
  spacedBottom,
  className,
  align = ALIGNMENT.LEFT,
  ...props
}: ContentBoxActionsPropsType) => {
  const contentBoxClass = classNames('sg-content-box__actions', {
    'sg-content-box__actions--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__actions--with-elements-to-right': align === ALIGNMENT.RIGHT,
    'sg-content-box__actions--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__actions--spaced-top-${spacedTop}`]: spacedTop && spacedTop !== SIZE.NORMAL,
    'sg-content-box__actions--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__actions--spaced-bottom-${spacedBottom}`]: spacedBottom && spacedBottom !== SIZE.NORMAL
  }, className);

  return (
    <div {...props} className={contentBoxClass}>
      {children}
    </div>
  );
};

export default ContentBoxActions;
export {SIZE, ALIGNMENT};
