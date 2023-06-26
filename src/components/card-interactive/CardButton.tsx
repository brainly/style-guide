import * as React from 'react';
import cx from 'classnames';
import UnstyledButton from '../buttons/UnstyledButton';
import Icon from '../icons/Icon';

export interface CardButtonPropsType
  extends React.ComponentPropsWithRef<'button'> {
  /**
   * Optional string. Variant of the card. Default is 'outline'.
   */
  variant?: 'solid' | 'outline';

  color?: 'light' | 'dark';

  /**
   * Optional React.ReactNode. Children of the CardButton.
   * @example <CardButton>Card content</CardButton>
   */
  children?: React.ReactNode;

  /**
   * Optional. Width of the card.
   * @example <CardButton width="100px" />
   */
  width?: React.CSSProperties['width'];

  /**
   * Optional. Height of the card.
   * @example <CardButton height="100px" />
   */
  height?: React.CSSProperties['height'];

  /**
   * Optional object. Inline styles.
   * @example <CardCheckbox style={--card-background-color: var(--green-20)} />
   */
  style?: React.CSSProperties;

  /**
   * Optional string. ID of the CardButton.
   */
  id?: string;
}

type CardButtonContextType = {
  color: 'light' | 'dark';
};

export const CardButtonContext = React.createContext<CardButtonContextType>({
  color: 'dark',
});

export const CardButtonRoot = React.forwardRef<
  HTMLButtonElement,
  CardButtonPropsType
>(
  (
    {
      variant = 'outline',
      color = 'dark',
      className,
      children,
      width,
      height,
      style,
      ...rest
    },
    ref
  ) => {
    const cssVariables = {
      '--card-width': width,
      '--card-height': height,
    };

    return (
      <CardButtonContext.Provider
        value={{
          color,
        }}
      >
        <UnstyledButton
          className={cx('sg-card-interactive', className)}
          style={{...style, ...cssVariables}}
          data-variant={variant}
          data-color={color}
          {...rest}
          ref={ref}
        >
          <div className="sg-card-interactive__border">
            <div className="sg-card-interactive__background">{children}</div>
          </div>
        </UnstyledButton>
      </CardButtonContext.Provider>
    );
  }
);

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
  size?: 16 | 24;
}

export const CardButtonIndicator = ({
  slot = 'top-left',
  size = 24,
  style,
  className,
}: CardButtonIndicatorPropsType) => {
  const {color} = React.useContext(CardButtonContext);

  const iconColor = color === 'light' ? 'icon-white' : 'icon-black';

  return (
    <div
      className={cx(
        'sg-card-interactive__indicator',
        `sg-card-interactive__indicator--${slot}`,
        className
      )}
      style={style}
    >
      <div className="sg-card-interactive__icon">
        <Icon type="arrow_right" color={iconColor} size={size} />
      </div>
    </div>
  );
};

const CardButton = Object.assign(CardButtonRoot, {
  Indicator: CardButtonIndicator,
});

CardButton.displayName = 'CardButton';
CardButtonIndicator.displayName = 'CardButton.Indicator';

export default CardButton;
