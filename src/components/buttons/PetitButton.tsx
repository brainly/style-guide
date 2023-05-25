import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';
import Spinner from '../spinner/Spinner';

export const PETIT_BUTTON_SIZE = {
  XS: 'xs',
  S: 's',
} as const;

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

type TargetType = '_self' | '_blank' | '_parent' | '_top';
// const anchorRelatedProps = [
//   'download',
//   'hreflang',
//   'ping',
//   'referrerpolicy',
//   'rel',
// ];

export type PetitButtonPropsType = {
  /**
   * Children to be rendered inside Button
   * @example <Button
   *           icon={<Icon type="answer" color="icon-white" size={24} />}
   *           variant="solid"
   *          >
   *            button
   *          </Button>
   */
  children?: React.ReactNode;

  /**
   * Specify variant of the button that you want to use
   * @example <PetitButton variant="solid-light">
   *            button
   *          </PetitButton>
   *
   */
  variant?: PetitButtonVariantType;

  /**
   * Specify href for button, optional string
   * @example <Button href="https://brainly.com/" size="m" variant="solid-indigo">
   *            button
   *          </Button>
   */
  href?: string;

  /**
   * Specifies where to display the linked URL.
   */
  target?: TargetType;

  /**
   * Accessible information that indicates opening in new tab.
   */
  newTabLabel?: string;

  /**
   * Accessible name for Button.
   */
  'aria-label'?: string;

  onClick?: (
    arg0: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => unknown;

  /**
   * The default behavior of the button.
   */
  type?: ButtonTypeType;

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

  /**
   * You can render icon inside each variant of button on the left side
   * @example <PetitButton
   *           icon={<Icon variant="facebook" color="icon-white" size={24} />}
   *           variant="facebook"
   *          >
   *            Login with Facebook
   *          </PetitButton>
   */
  icon?: React.ReactNode;

  /**
   * Reverses order of icon and text. Effective only when icon is set.
   */
  reversedOrder?: boolean;

  className?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'variant'
  | 'icon'
  | 'reversedOrder'
  | 'children'
  | 'size'
  | 'href'
  | 'disabled'
  | 'loading'
  | 'loadingAriaLive'
  | 'loadingAriaLabel'
  | 'fullWidth'
  | 'className'
  | 'target'
  | 'newTabLabel'
  | 'aria-label'
  | 'type'
  | 'onClick'
>;

const PetitButton = ({
  className,
  variant = PETIT_BUTTON_VARIANT.TRANSPARENT,
  children,
  size = PETIT_BUTTON_SIZE.S,
  loading,
  loadingAriaLabel,
  loadingAriaLive,
  disabled,
  icon,
  reversedOrder,
  href,
  target,
  newTabLabel = '(opens in a new tab)',
  type,
  onClick,
  'aria-label': ariaLabel,
  ...rest
}: PetitButtonPropsType) => {
  const buttonClass = cx(
    'sg-petit-button',
    `sg-petit-button--${variant}`,
    `sg-petit-button--${size}`,
    {
      'sg-petit-button--loading': loading,
      'sg-petit-button--reversed-order': reversedOrder,
    },
    className
  );

  const isDisabled = disabled || loading;
  const isLink = !!href;
  const hasIcon = icon !== undefined && icon !== null;

  const onButtonClick = e => {
    if (isLink && isDisabled) {
      return;
    }

    return onClick && onClick(e);
  };

  const TagToRender = isLink ? (isDisabled ? 'span' : 'a') : 'button';

  return (
    <TagToRender
      {...rest}
      className={buttonClass}
      disabled={isDisabled}
      aria-label={ariaLabel}
      type={type}
      target={target}
      href={href}
      onClick={onButtonClick}
      // On iOS the :active pseudo state is triggered only when there is a touch event set on the HTML element
      // and we use active pseudo class to provide haptic feedback.
      onTouchStart={() => null}
    >
      {loading && (
        <Spinner
          aria-live={loadingAriaLive}
          aria-label={loadingAriaLabel}
          className="sg-petit-button__spinner"
        />
      )}
      {hasIcon && <span className="sg-petit-button__icon">{icon}</span>}
      <Text className="sg-petit-button__text" weight="bold" size="small">
        {children}
        {target === '_blank' && (
          <span className="sg-visually-hidden">{newTabLabel}</span>
        )}
      </Text>
    </TagToRender>
  );
};

export default PetitButton;
