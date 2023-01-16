import * as React from 'react';
import classnames from 'classnames';

export const COLORS_MAP = {
  white: 'white',
  transparent: 'transparent',
  'blue-20': 'blue-20',
  'gray-20': 'gray-20',
} as const;

type ColorType = 'white' | 'transparent' | 'blue-20' | 'gray-20';
export type MediaPropsType = {
  aside: React.ReactNode;
  contentArray: Array<React.ReactNode>;
  toRight?: boolean;
  clickable?: boolean;
  noPadding?: boolean;
  small?: boolean;
  spacedBottom?: boolean;
  className?: string;
  color?: ColorType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'aside'
  | 'contentArray'
  | 'toRight'
  | 'clickable'
  | 'noPadding'
  | 'small'
  | 'spacedBottom'
  | 'className'
  | 'color'
>;

const Media = (props: MediaPropsType) => {
  const {
    contentArray = [],
    aside,
    className,
    toRight,
    clickable,
    noPadding,
    small,
    spacedBottom,
    color = 'white',
    ...restProps
  } = props;
  const mediaClassName = classnames(
    'sg-media',
    {
      'sg-media--to-right': toRight,
      'sg-media--clickable': clickable,
      'sg-media--no-padding': noPadding,
      [`sg-media--${String(color)}`]: color,
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
