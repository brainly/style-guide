// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type MediaPropsType = {
  aside: React.Node,
  contentArray: Array<React.Node>,
  toRight?: boolean,
  focused?: boolean,
  clickable?: boolean,
  noPadding?: boolean,
  transparent?: boolean,
  graySecondaryLight?: boolean,
  small?: boolean,
  spacedBottom?: boolean,
  className?: string,
  ...
};

const Media = (props: MediaPropsType) => {
  const {
    contentArray = [],
    aside,
    className,
    toRight,
    focused,
    clickable,
    noPadding,
    transparent,
    graySecondaryLight,
    small,
    spacedBottom,
    ...restProps
  } = props;
  const mediaClassName = classnames(
    'sg-media',
    {
      'sg-media--to-right': toRight,
      'sg-media--focused': focused,
      'sg-media--clickable': clickable,
      'sg-media--no-padding': noPadding,
      'sg-media--transparent': transparent,
      'sg-media--gray-secondary-light': graySecondaryLight,
    },
    className
  );
  const contentClassName = classnames('sg-media__content', {
    'sg-media__content--small': small,
    'sg-media__content--spaced-bottom': spacedBottom,
  });

  return (
    <div {...restProps} className={mediaClassName}>
      <div className="sg-media__aside">{aside}</div>
      <div className="sg-media__wrapper">
        {contentArray.map((content, index) => (
          <div key={index} className={contentClassName}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
