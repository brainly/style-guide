// @flow strict

import * as React from 'react';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';
import cx from 'classnames';
import {__DEV__, invariant} from '../utils';
import {
  buttonStyle,
  disabledStyle,
  loadingStyle,
  sizeVariants,
  typeVariants,
  fullWidthStyle,
  iconOnlyStyle,
  reversedOrderStyle,
  iconStyle,
  iconVariants,
  spinnerStyle,
  buttonTextStyle,
} from './Button.css';

export const BUTTON_SIZE: {
  L: 'l',
  M: 'm',
  S: 's',
} = {
  L: 'l',
  M: 'm',
  S: 's',
};

export const BUTTON_TYPE: {
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
} = {
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
};

export const BUTTON_TOGGLE: {
  RED: 'red',
  YELLOW: 'yellow',
} = {
  RED: 'red',
  YELLOW: 'yellow',
};

const SPINNER_SIZE_MAP = {
  [BUTTON_SIZE.L]: SPINNER_SIZE.SMALL,
  [BUTTON_SIZE.M]: SPINNER_SIZE.XSMALL,
  [BUTTON_SIZE.S]: SPINNER_SIZE.XXSMALL,
};

const SPINNER_COLOR_MAP = {
  [BUTTON_TYPE.SOLID]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.SOLID_INVERTED]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.SOLID_INDIGO]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.SOLID_INDIGO_INVERTED]: SPINNER_COLOR['indigo-50'],
  [BUTTON_TYPE.SOLID_LIGHT]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.OUTLINE]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.OUTLINE_INDIGO]: SPINNER_COLOR['indigo-50'],
  [BUTTON_TYPE.OUTLINE_INVERTED]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.TRANSPARENT]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.TRANSPARENT_LIGHT]: SPINNER_COLOR['gray-50'],
  [BUTTON_TYPE.TRANSPARENT_RED]: SPINNER_COLOR['red-50'],
  [BUTTON_TYPE.TRANSPARENT_INVERTED]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.FACEBOOK]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.GOOGLE]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.APPLE]: SPINNER_COLOR['white'],
};

type ButtonType =
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

const TOGGLE_BUTTON_TYPES = [
  'solid-light',
  'outline',
  'transparent',
  'transparent-light',
];

export type ButtonPropsType = {
  /**
   * Specify type of the button that you want to use
   * @example <Button type="solid">
   *            button
   *          </Button>
   * @see type="solid" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid"#buttons
   * @see type="solid-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-inverted"#buttons

   * @see type="solid-indigo" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-indigo"#buttons
   * @see type="solid-indigo-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-indigo-inverted"#buttons
   * @see type="solid-light" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-light"#buttons
   * @see type="outline" https://styleguide.brainly.com/latest/docs/interactive.html?type="outline"#buttons
   * @see type="outline-indigo" https://styleguide.brainly.com/latest/docs/interactive.html?type="outline-indigo"#buttons
   * @see type="outline-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="outline-indigo-inverted"#buttons
   * @see type="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent"#buttons
   * @see type="transparent-light" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-light"#buttons
   * @see type="transparent-red" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-red"#buttons
   * @see type="transparent-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-inverted"#buttons
   * @see type="facebook" https://styleguide.brainly.com/latest/docs/interactive.html?type="facebook"#buttons
   * @see type="google" https://styleguide.brainly.com/latest/docs/interactive.html?type="google"#buttons
   * @see type="apple" https://styleguide.brainly.com/latest/docs/interactive.html?type="apple"#buttons
   *
   */
  type: ButtonType,
  /**
   * Set toggle state of the button.
   * Caution: Toggle property work with for specific button types:
   * `solid-light`,`outline`, `outline-indigo`, `outline-inverted`,
   * `transparent`, `transparent-light`, `transparent-red`, `transparent-inverted`
   */
  toggle?: ButtonToggleType,
  /**
   * You can render icon inside each type of button on the left side
   * @example <Button
   *           icon={<Icon type="facebook" color="icon-white" size={24} />}
   *           type="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   */
  icon?: React.Node,
  /** Optional and available when icon is set. it hides button's text
   * @example <Button
   *            icon={<Icon type="facebook" color="icon-white" size={24} />}
   *            iconOnly
   *            type="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   * */
  iconOnly?: boolean,
  /**
   * Reverses order of icon and text. Effective only when icon is set.
   */
  reversedOrder?: boolean,
  /**
   * Children to be rendered inside Button
   * @example <Button
   *           icon={<Icon type="answer" color="icon-white" size={24} />}
   *           type="solid"
   *          >
   *            button
   *          </Button>
   */
  children?: React.Node,
  /**
   * There are three sizes options for buttons, not need to be specify, default is m
   * @example <Button type="solid" size="m">
   *            button
   *          </Button>
   * @see size="s" https://styleguide.brainly.com/latest/docs/interactive.html?size="s"#buttons
   * @see size="m" https://styleguide.brainly.com/latest/docs/interactive.html?size="m"#buttons
   * @see size="l" https://styleguide.brainly.com/latest/docs/interactive.html?size="l"#buttons
   */
  size?: ButtonSizeType,
  /**
   * Specify href for button, optional string
   * @example <Button href="https://brainly.com/" size="m" type="solid-indigo">
   *            button
   *          </Button>
   */
  href?: string,
  /**
   * Optional boolean for disabled button
   * @example <Button type="solid-indigo" disabled>
   *            button
   *          </Button>
   */
  disabled?: boolean,
  /**
   * Show loading state. By default loading state make button disabled while
   * showing spinner inside and keep button's width unchanged.
   */
  loading?: boolean,
  /**
   * Optional boolean for full width button
   * @example <Button type="solid-indigo" fullWidth>
   *            button
   *          </Button>
   */
  fullWidth?: boolean,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

const Button = React.forwardRef<ButtonPropsType, HTMLElement>(
  (
    {
      size = 'm',
      type = 'solid',
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
      ...props
    }: ButtonPropsType,
    ref
  ) => {
    if (__DEV__) {
      invariant(
        !(
          (toggle === 'red' &&
            ![...TOGGLE_BUTTON_TYPES, 'transparent-red'].includes(type)) ||
          (toggle === 'yellow' && ![...TOGGLE_BUTTON_TYPES].includes(type))
        ),
        `Value of toggle property '${String(
          toggle
        )}' has no effect when button type is set to '${type}'.`
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
    }

    const isDisabled = disabled || loading;

    const btnClass = cx(
      buttonStyle,
      {
        [sizeVariants[size]]: size,
        [typeVariants[type]]: type,
        [disabledStyle]: isDisabled,
        [loadingStyle]: loading,
        [fullWidthStyle]: fullWidth,
        [iconOnlyStyle]: Boolean(icon) && iconOnly,
        [typeVariants[`${type}-toggle-${String(toggle)}`]]: toggle,
        [reversedOrderStyle]: reversedOrder,
      },
      className
    );

    const iconClass = cx(iconStyle, {
      [iconVariants[size]]: size,
    });

    let ico;

    if (icon !== undefined && icon !== null) {
      ico = <span className={iconClass}>{icon}</span>;
    }

    const TypeToRender = href !== undefined ? 'a' : 'button';

    return (
      <TypeToRender
        {...props}
        className={btnClass}
        href={href}
        disabled={isDisabled}
        role={href !== undefined ? 'button' : undefined}
        ref={ref}
      >
        {loading && (
          <Spinner
            size={SPINNER_SIZE_MAP[size]}
            color={SPINNER_COLOR_MAP[type]}
            className={spinnerStyle}
            aria-live="off"
          />
        )}
        {ico}
        {/* As soon as we have Proxima fixed, we could remove that span */}
        <span className={buttonTextStyle}>{children}</span>
      </TypeToRender>
    );
  }
);

Button.displayName = 'Button';

export default Button;
