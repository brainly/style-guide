import * as React from 'react';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';
import cx from 'classnames';
import {__DEV__, invariant} from '../utils';

export const BUTTON_SIZE: {
  L: 'l';
  M: 'm';
  S: 's';
} = {
  L: 'l',
  M: 'm',
  S: 's',
};
export const BUTTON_VARIANT = {
  SOLID: 'solid',
  SOLID_INVERTED: 'solid-inverted',
  SOLID_INDIGO: 'solid-indigo',
  SOLID_INDIGO_INVERTED: 'solid-indigo-inverted',
  SOLID_LIGHT: 'solid-light',
  OUTLINE: 'outline',
  OUTLINE_INDIGO: 'outline-indigo',
  OUTLINE_INVERTED: 'outline-inverted',
  TRANSPARENT: 'transparent',
  TRANSPARENT_LIGHT: 'transparent-light',
  TRANSPARENT_RED: 'transparent-red',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  APPLE: 'apple',
} as const;

export const BUTTON_TOGGLE = {
  RED: 'red',
  YELLOW: 'yellow',
} as const;

const SPINNER_SIZE_MAP = {
  [BUTTON_SIZE.L]: SPINNER_SIZE.SMALL,
  [BUTTON_SIZE.M]: SPINNER_SIZE.XSMALL,
  [BUTTON_SIZE.S]: SPINNER_SIZE.XXSMALL,
};

const SPINNER_COLOR_MAP = {
  [BUTTON_VARIANT.SOLID]: SPINNER_COLOR['white'],
  [BUTTON_VARIANT.SOLID_INVERTED]: SPINNER_COLOR['black'],
  [BUTTON_VARIANT.SOLID_INDIGO]: SPINNER_COLOR['white'],
  [BUTTON_VARIANT.SOLID_INDIGO_INVERTED]: SPINNER_COLOR['indigo-50'],
  [BUTTON_VARIANT.SOLID_LIGHT]: SPINNER_COLOR['black'],
  [BUTTON_VARIANT.OUTLINE]: SPINNER_COLOR['black'],
  [BUTTON_VARIANT.OUTLINE_INDIGO]: SPINNER_COLOR['indigo-50'],
  [BUTTON_VARIANT.OUTLINE_INVERTED]: SPINNER_COLOR['white'],
  [BUTTON_VARIANT.TRANSPARENT]: SPINNER_COLOR['black'],
  [BUTTON_VARIANT.TRANSPARENT_LIGHT]: SPINNER_COLOR['gray-50'],
  [BUTTON_VARIANT.TRANSPARENT_RED]: SPINNER_COLOR['red-50'],
  [BUTTON_VARIANT.TRANSPARENT_INVERTED]: SPINNER_COLOR['white'],
  [BUTTON_VARIANT.FACEBOOK]: SPINNER_COLOR['white'],
  [BUTTON_VARIANT.GOOGLE]: SPINNER_COLOR['black'],
  [BUTTON_VARIANT.APPLE]: SPINNER_COLOR['white'],
};

type ButtonVariantType =
  | 'solid'
  | 'solid-inverted'
  | 'solid-indigo'
  | 'solid-indigo-inverted'
  | 'solid-light'
  | 'outline'
  | 'outline-indigo'
  | 'outline-inverted'
  | 'transparent'
  | 'transparent-light'
  | 'transparent-red'
  | 'transparent-inverted'
  | 'facebook'
  | 'google'
  | 'apple';
type ButtonToggleType = 'red' | 'yellow';
type ButtonSizeType = 'l' | 'm' | 's';
export type AriaLiveType = 'off' | 'polite' | 'assertive';
export type ButtonTypeType = 'button' | 'submit' | 'reset';

const TOGGLE_BUTTON_VARIANTS = [
  'solid-light',
  'outline',
  'transparent',
  'transparent-light',
];

type TargetType = '_self' | '_blank' | '_parent' | '_top';
const anchorRelatedProps = [
  'download',
  'hreflang',
  'ping',
  'referrerpolicy',
  'rel',
];

export type ButtonPropsType = {
  /**
   * Specify type of the button that you want to use
   * @example <Button variant="solid">
   *            button
   *          </Button>
   * @see variant="solid" https://styleguide.brainly.com/latest/docs/interactive.html?variant="solid"#buttons
   * @see variant="solid-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?variant="solid-inverted"#buttons
   * @see variant="solid-indigo" https://styleguide.brainly.com/latest/docs/interactive.html?variant="solid-indigo"#buttons
   * @see variant="solid-indigo-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?variant="solid-indigo-inverted"#buttons
   * @see variant="solid-light" https://styleguide.brainly.com/latest/docs/interactive.html?variant="solid-light"#buttons
   * @see variant="outline" https://styleguide.brainly.com/latest/docs/interactive.html?variant="outline"#buttons
   * @see variant="outline-indigo" https://styleguide.brainly.com/latest/docs/interactive.html?variant="outline-indigo"#buttons
   * @see variant="outline-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?variant="outline-indigo-inverted"#buttons
   * @see variant="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?variant="transparent"#buttons
   * @see variant="transparent-light" https://styleguide.brainly.com/latest/docs/interactive.html?variant="transparent-light"#buttons
   * @see variant="transparent-red" https://styleguide.brainly.com/latest/docs/interactive.html?variant="transparent-red"#buttons
   * @see variant="transparent-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?variant="transparent-inverted"#buttons
   * @see variant="facebook" https://styleguide.brainly.com/latest/docs/interactive.html?variant="facebook"#buttons
   * @see variant="google" https://styleguide.brainly.com/latest/docs/interactive.html?variant="google"#buttons
   * @see variant="apple" https://styleguide.brainly.com/latest/docs/interactive.html?variant="apple"#buttons
   *
   */
  variant?: ButtonVariantType;

  /**
   * Set toggle state of the button.
   * Caution: Toggle property work with for specific button variants:
   * `solid-light`,`outline`, `outline-indigo`, `outline-inverted`,
   * `transparent`, `transparent-light`, `transparent-red`, `transparent-inverted`
   */
  toggle?: ButtonToggleType;

  /**
   * You can render icon inside each variant of button on the left side
   * @example <Button
   *           icon={<Icon variant="facebook" color="icon-white" size={24} />}
   *           variant="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   */
  icon?: React.ReactNode;

  /** Optional and available when icon is set. it hides button's text
   * @example <Button
   *            icon={<Icon variant="facebook" color="icon-white" size={24} />}
   *            iconOnly
   *            variant="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   * */
  iconOnly?: boolean;

  /**
   * Reverses order of icon and text. Effective only when icon is set.
   */
  reversedOrder?: boolean;

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
   * There are three sizes options for buttons, not need to be specify, default is m
   * @example <Button variant="solid" size="m">
   *            button
   *          </Button>
   * @see size="s" https://styleguide.brainly.com/latest/docs/interactive.html?size="s"#buttons
   * @see size="m" https://styleguide.brainly.com/latest/docs/interactive.html?size="m"#buttons
   * @see size="l" https://styleguide.brainly.com/latest/docs/interactive.html?size="l"#buttons
   */
  size?: ButtonSizeType;

  /**
   * Specify href for button, optional string
   * @example <Button href="https://brainly.com/" size="m" variant="solid-indigo">
   *            button
   *          </Button>
   */
  href?: string;

  /**
   * Optional boolean for disabled button
   * @example <Button variant="solid-indigo" disabled>
   *            button
   *          </Button>
   */
  disabled?: boolean;

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
   * Optional boolean for full width button
   * @example <Button variant="solid-indigo" fullWidth>
   *            button
   *          </Button>
   */
  fullWidth?: boolean;

  /**
   * Additional class names
   */
  className?: string;

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

  /**
   * The default behavior of the button.
   */
  type?: ButtonTypeType;

  /**
   * Callback, called by clicking on Button
   */
  onClick?: (
    arg0: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => unknown;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'variant'
  | 'toggle'
  | 'icon'
  | 'iconOnly'
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
const Button = React.forwardRef(
  (
    {
      size = 'm',
      variant = 'solid',
      icon,
      iconOnly,
      reversedOrder,
      href,
      fullWidth,
      disabled,
      loading,
      toggle,
      children,
      className,
      target,
      newTabLabel = '(opens in a new tab)',
      onClick,
      'aria-label': ariaLabel,
      loadingAriaLive = 'off',
      loadingAriaLabel,
      type,
      ...props
    }: ButtonPropsType,
    ref
  ) => {
    const isDisabled = disabled || loading;
    const isLink = !!href;

    if (__DEV__) {
      invariant(
        !(
          (toggle === 'red' &&
            ![...TOGGLE_BUTTON_VARIANTS, 'transparent-red'].includes(
              variant
            )) ||
          (toggle === 'yellow' &&
            ![...TOGGLE_BUTTON_VARIANTS].includes(variant))
        ),
        `Value of toggle property '${String(
          toggle
        )}' has no effect when button variant is set to '${variant}'.`
      );
      invariant(
        !(iconOnly && !icon),
        `Using 'iconOnly' property has no effect when 'icon' property is not set.`
      );
      invariant(
        !(reversedOrder && !icon),
        `Using 'reversedOrder' property has no effect when 'icon' property is not set.`
      );
      invariant(
        !(iconOnly && reversedOrder),
        `Using 'reversedOrder' property has no effect when 'iconOnly' property is set.`
      );
      invariant(
        !(
          !isLink &&
          (target ||
            Object.keys(props).some(p => anchorRelatedProps.includes(p)))
        ), // $FlowFixMe
        `An anchor-related prop is not working when "href" is not provided: ${Object.keys(
          props
        )}`
      );
      invariant(
        !(isLink && type),
        '`type` prop is not working when href is provided'
      );
      invariant(
        !(iconOnly && !ariaLabel),
        'Using `iconOnly` without `aria-label` will affect people with visual impairments'
      );
    }

    const btnClass = cx(
      'sg-button',
      {
        [`sg-button--${String(size)}`]: size,
        [`sg-button--${String(variant)}`]: variant,
        'sg-button--disabled': isDisabled,
        'sg-button--loading': loading,
        'sg-button--full-width': fullWidth,
        'sg-button--icon-only': Boolean(icon) && iconOnly,
        [`sg-button--${String(variant)}-toggle-${String(toggle)}`]: toggle,
        'sg-button--reversed-order': reversedOrder,
      },
      className
    );
    const iconClass = cx('sg-button__icon', {
      [`sg-button__icon--${size || ''}`]: size,
    });
    let ico;

    if (icon !== undefined && icon !== null) {
      ico = <span className={iconClass}>{icon}</span>;
    }

    // @ts-ignore TS7006
    const onButtonClick = e => {
      if (isLink && isDisabled) {
        return;
      }

      return onClick && onClick(e);
    };

    const TagToRender = isLink ? (isDisabled ? 'span' : 'a') : 'button';

    return (
      <TagToRender
        {...props}
        className={btnClass}
        href={href}
        disabled={isDisabled}
        // @ts-ignore generics while using React.forwardRef
        ref={ref}
        target={target}
        aria-label={ariaLabel}
        onClick={onButtonClick}
        // On iOS the :active pseudo state is triggered only when there is a touch event set on the HTML element
        // and we use active pseudo class to provide haptic feedback.
        onTouchStart={() => null}
        type={type}
      >
        {variant.includes('transparent') ? (
          <span className="sg-button__hover-overlay" />
        ) : null}
        {loading && (
          <Spinner
            size={SPINNER_SIZE_MAP[size]}
            color={SPINNER_COLOR_MAP[variant]}
            className="sg-button__spinner"
            aria-live={loadingAriaLive}
            aria-label={loadingAriaLabel}
          />
        )}
        {ico}
        <span className="sg-button__text">
          {children}
          {target === '_blank' && (
            <span className="sg-visually-hidden">{newTabLabel}</span>
          )}
        </span>
      </TagToRender>
    );
  }
);

Button.displayName = 'Button';
export default Button;
