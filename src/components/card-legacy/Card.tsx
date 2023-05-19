import * as React from 'react';
import classNames from 'classnames';

export type CardPaddingType =
  | 'padding-small'
  | 'padding-normal'
  | 'padding-large'
  | 'padding-xlarge';

export const CARD_PADDING = {
  SMALL: 'padding-small',
  NORMAL: 'padding-normal',
  LARGE: 'padding-large',
  XLARGE: 'padding-xlarge',
} as const;

export type CardPropsType = {
  children?: React.ReactNode;
  className?: string;
  full?: boolean;
  vertical?: boolean;
  centered?: boolean;
  noBorder?: boolean;
  shadow?: boolean;
  transparent?: boolean;
  padding?: CardPaddingType;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'className'
  | 'full'
  | 'vertical'
  | 'centered'
  | 'noBorder'
  | 'shadow'
  | 'transparent'
  | 'padding'
>;

const Card = ({
  children,
  full,
  vertical,
  centered,
  padding,
  shadow,
  noBorder,
  transparent,
  className,
  ...props
}: CardPropsType) => {
  const cardClass = classNames(
    'sg-card',
    {
      'sg-card--full': full,
      'sg-card--vertical': vertical,
      'sg-card--with-shadow': shadow,
      'sg-card--no-border': noBorder,
      'sg-card--centered': centered,
      'sg-card--transparent': transparent,
      [`sg-card--${String(padding)}`]: padding,
    },
    className
  );

  return (
    <div {...props} className={cardClass}>
      {children}
    </div>
  );
};

export default Card;
