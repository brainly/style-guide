import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';

export const PETIT_BUTTON_SIZE = {
  XS: 'xs',
  S: 's',
};

type PetitButtonSizeType = 'xs' | 's';

export const PETIT_BUTTON_VARIANT = {
  TRANSPARENT: 'transparent',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  TRANSPARENT_LIGHT: 'transparent-light',
  TRANSPARENT_INDIGO: 'transparent-indigo',
  SOLID_LIGHT: 'solid-light',
  SOLID_INDIGO_LIGHT: 'solid-indigo-light',
} as const;

type PetitButtonVariantType =
  | 'transparent'
  | 'transparent-inverted'
  | 'transparent-light'
  | 'transparent-indigo'
  | 'solid-light'
  | 'solid-indigo-light';

export type PetitButtonPropsType = {
  /**
   * Specify variant of the button that you want to use
   * @example <PetitButton variant="solid-light">
   *            button
   *          </PetitButton>
   *
   */
  variant?: PetitButtonVariantType;

  /**
   * There are two sizes options for buttons, not need to be specify, default is s
   * @example <PetitButton  size="xs">
   *            button
   *          </PetitButton>
   */
  size?: PetitButtonSizeType;

  /**
   * Show loading state. By default loading state make button disabled while
   * showing spinner inside and keep button's width unchanged.
   */
  loading?: boolean;

  /**
   * `aria-live` for loading state. Defaults to "off".
   */
  loadingAriaLive?: AriaLiveType;

  /**
   * Accessible information about loading state. Defaults to "loading".
   */
  loadingAriaLabel?: string;

  /**
   * Optional boolean for disabled button
   * @example <Button variant="solid-indigo" disabled>
   *            button
   *          </Button>
   */
  disabled?: boolean;

  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PetitButton = ({
  className,
  variant,
  children,
  size,
  loading,
  loadingAriaLabel,
  loadingAriaLive,
  disabled,
  ...rest
}: PetitButtonPropsType) => {
  const buttonClass = cx(
    'sg-petit-button',
    `sg-petit-button--${variant}`,
    `sg-petit-button--${size}`,
    {'sg-petit-button--loading': loading},
    className
  );

  return (
    <button {...rest} className={buttonClass} disabled={disabled || loading}>
      {loading && (
        <Spinner
          aria-live={loadingAriaLive}
          aria-label={loadingAriaLabel}
          className="sg-petit-button__spinner"
        />
      )}
      <Text className="sg-petit-button__text" weight="bold" size="small">
        {children}
      </Text>
    </button>
  );
};

export default PetitButton;
