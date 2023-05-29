import * as React from 'react';
import cx from 'classnames';

export interface CardButtonPropsType
  extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
}

export const CardButtonRoot = React.forwardRef<
  HTMLButtonElement,
  CardCheckboxPropsType
>(({children, ...rest}: CardButtonPropsType, ref) => {
  return (
    <button className="card-interactive" {...rest}>
      <div className="card-interactive__border">
        <div className="card-interactive__background">{children}</div>
      </div>
    </button>
  );
});

export interface CardButtonIndicatorPropsType {
  slot?:
    | 'top-left'
    | 'center-left'
    | 'bottom-left'
    | 'top-right'
    | 'center-right'
    | 'bottom-right';
  style?: React.CSSProperties;
  className?: string;
}

export const CardButtonIndicator = ({
  slot = 'top-left',
  style,
  className,
}: CardButtonIndicatorPropsType) => {
  return (
    <div
      className={cx(
        'sg-card-interactive__indicator',
        `sg-card-interactive__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <div className="sg-card-interactive__icon">icon</div>
    </div>
  );
};

const CardButton = Object.assign(CardButtonRoot, {
  Indicator: CardButtonIndicator,
});

CardButton.displayName = 'CardButton';
CardButtonIndicator.displayName = 'CardButton.Indicator';

export default CardButton;
