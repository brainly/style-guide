// @flow strict

import * as React from 'react';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';
import cx from 'classnames';
import {__DEV__, invariant} from '../utils';

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
  SOLID_LIGHT: 'solid-light',
  OUTLINE: 'outline',
  TRANSPARENT: 'transparent',
  TRANSPARENT_LIGHT: 'transparent-light',
  SOLID: 'solid',
  SOLID_INVERTED: 'solid-inverted',
  SOLID_BLUE: 'solid-blue',
  SOLID_MINT: 'solid-mint',
  TRANSPARENT_PEACH: 'transparent-peach',
  TRANSPARENT_MUSTARD: 'transparent-mustard',
  TRANSPARENT_BLUE: 'transparent-blue',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  FACEBOOK: 'facebook',
} = {
  SOLID_LIGHT: 'solid-light',
  OUTLINE: 'outline',
  TRANSPARENT: 'transparent',
  TRANSPARENT_LIGHT: 'transparent-light',
  SOLID: 'solid',
  SOLID_INVERTED: 'solid-inverted',
  SOLID_BLUE: 'solid-blue',
  SOLID_MINT: 'solid-mint',
  TRANSPARENT_PEACH: 'transparent-peach',
  TRANSPARENT_MUSTARD: 'transparent-mustard',
  TRANSPARENT_BLUE: 'transparent-blue',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  FACEBOOK: 'facebook',
};

export const BUTTON_TOGGLE: {
  PEACH: 'peach',
  MUSTARD: 'mustard',
  BLUE: 'blue',
} = {
  PEACH: 'peach',
  MUSTARD: 'mustard',
  BLUE: 'blue',
};

const SPINNER_SIZE_MAP = {
  [BUTTON_SIZE.L]: SPINNER_SIZE.SMALL,
  [BUTTON_SIZE.M]: SPINNER_SIZE.XSMALL,
  [BUTTON_SIZE.S]: SPINNER_SIZE.XXSMALL,
};

const SPINNER_COLOR_MAP = {
  [BUTTON_TYPE.SOLID]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.SOLID_INVERTED]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.SOLID_BLUE]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.SOLID_MINT]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.SOLID_LIGHT]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.OUTLINE]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.TRANSPARENT]: SPINNER_COLOR['black'],
  [BUTTON_TYPE.TRANSPARENT_LIGHT]: SPINNER_COLOR['gray-50'],
  [BUTTON_TYPE.TRANSPARENT_PEACH]: SPINNER_COLOR['red-40'],
  [BUTTON_TYPE.TRANSPARENT_MUSTARD]: SPINNER_COLOR['yellow-40'],
  [BUTTON_TYPE.TRANSPARENT_BLUE]: SPINNER_COLOR['blue-40'],
  [BUTTON_TYPE.TRANSPARENT_INVERTED]: SPINNER_COLOR['white'],
  [BUTTON_TYPE.FACEBOOK]: SPINNER_COLOR['white'],
};

type ButtonType =
  | 'solid-light'
  | 'outline'
  | 'transparent'
  | 'transparent-light'
  | 'solid'
  | 'solid-inverted'
  | 'solid-blue'
  | 'solid-mint'
  | 'transparent-peach'
  | 'transparent-mustard'
  | 'transparent-blue'
  | 'transparent-inverted'
  | 'facebook';

type ButtonToggleType = 'peach' | 'mustard' | 'blue';

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
   * @see type="solid-blue" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-blue"#buttons
   * @see type="solid-mint" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-mint"#buttons
   * @see type="solid-light" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-light"#buttons
   * @see type="outline" https://styleguide.brainly.com/latest/docs/interactive.html?type="outline"#buttons
   * @see type="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent"#buttons
   * @see type="transparent-light" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-light"#buttons
   * @see type="transparent-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-inverted"#buttons
   * @see type="transparent-peach" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-peach"#buttons
   * @see type="transparent-mustard" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-mustard"#buttons
   * @see type="transparent-blue" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-blue"#buttons
   * @see type="facebook" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-inverted"#buttons
   *
   */
  type: ButtonType,
  /**
   * Set toggle state of the button.
   * Caution: Toggle property work with for specific button types:
   * `solid-light`,`outline`, `transparent`, `transparent-light`, `transparent-peach`,
   * `transparent-mustard`, `transparent-blue`
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
   * @example <Button href="https://brainly.com/" size="m" type="solid-blue">
   *            button
   *          </Button>
   */
  href?: string,
  /**
   * Optional boolean for disabled button
   * @example <Button type="solid-mint" disabled>
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
   * @example <Button type="solid-mint" fullWidth>
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
          (toggle === 'blue' &&
            ![...TOGGLE_BUTTON_TYPES, 'transparent-blue'].includes(type)) ||
          (toggle === 'peach' &&
            ![...TOGGLE_BUTTON_TYPES, 'transparent-peach'].includes(type)) ||
          (toggle === 'mustard' &&
            ![...TOGGLE_BUTTON_TYPES, 'transparent-mustard'].includes(type))
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
      'sg-button',
      'relative',
      'inline-flex',
      'justify-center',
      'items-center',
      'text-black h-10',
      'rounded-[20px]',
      'border-none',
      'whitespace-nowrap',
      'no-underline',
      'button-text-normal',
      'font-bold text-white',
      'uppercase',
      'pl-[20px]',
      'pr-[20px]',
      'duration-200',
      'ease-in-out',
      'cursor-pointer',
      'box-border',
      {
        [`sg-button--${String(size)}`]: size,
        [`sg-button--${String(type)}`]: type,
        'cursor-not-allowed': isDisabled,
        'opacity-40': isDisabled,
        'w-full': fullWidth,
        'sg-button--icon-only': Boolean(icon) && iconOnly,
        [`sg-button--${String(type)}-toggle-${String(toggle)}`]: toggle,
        'flex-row-reverse': reversedOrder,
        'h-10': size === BUTTON_SIZE.M,
        'rounded-[28px]': size === BUTTON_SIZE.L,
        'h-14': size === BUTTON_SIZE.L,
        'pt-0': size === BUTTON_SIZE.L || size === BUTTON_SIZE.S,
        'pb-0': size === BUTTON_SIZE.L || BUTTON_SIZE.S,
        'pl-7': size === BUTTON_SIZE.L,
        'pr-7': size === BUTTON_SIZE.L,
        'button-text-large': size === BUTTON_SIZE.L,
        'rounded-2xl': size === BUTTON_SIZE.S,
        'h-8': size === BUTTON_SIZE.S,
        'pl-s': size === BUTTON_SIZE.S,
        'pr-s': size === BUTTON_SIZE.S,
        'button-text-small': size === BUTTON_SIZE.S,
        'bg-black': type === BUTTON_TYPE.SOLID,
        'bg-white': type === BUTTON_TYPE.SOLID_INVERTED,
        'text-black':
          type === BUTTON_TYPE.SOLID_INVERTED ||
          type === BUTTON_TYPE.SOLID_LIGHT ||
          type === BUTTON_TYPE.OUTLINE ||
          type === BUTTON_TYPE.TRANSPARENT,
        'bg-blue-40': type === BUTTON_TYPE.SOLID_BLUE,
        'bg-green-40': type === BUTTON_TYPE.SOLID_MINT,
        'bg-gray-40': type === BUTTON_TYPE.SOLID_LIGHT,
        'bg-red-20': toggle === BUTTON_TOGGLE.PEACH,
        'bg-yellow-20': toggle === BUTTON_TOGGLE.MUSTARD,
        'bg-blue-20': toggle === BUTTON_TOGGLE.BLUE,
        'bg-transparent':
          type === BUTTON_TYPE.OUTLINE ||
          type === BUTTON_TYPE.TRANSPARENT ||
          BUTTON_TYPE.TRANSPARENT_LIGHT ||
          BUTTON_TYPE.TRANSPARENT_INVERTED ||
          BUTTON_TYPE.TRANSPARENT_PEACH,
        'border-2': type === BUTTON_TYPE.OUTLINE,
        'border-solid': type === BUTTON_TYPE.OUTLINE,
        'border-black': type === BUTTON_TYPE.OUTLINE,
        'border-red-40':
          type === BUTTON_TYPE.OUTLINE || toggle === BUTTON_TOGGLE.PEACH,
        'border-yellow-40':
          type === BUTTON_TYPE.OUTLINE || toggle === BUTTON_TOGGLE.MUSTARD,
        'border-blue-40':
          type === BUTTON_TYPE.OUTLINE || toggle === BUTTON_TOGGLE.BLUE,
        'text-gray-50': BUTTON_TYPE.TRANSPARENT_LIGHT,
        'text-white': BUTTON_TYPE.TRANSPARENT_INVERTED,
        'text-red-40': BUTTON_TYPE.TRANSPARENT_PEACH,
      },
      className
    );

    const btnTextClasses = cx(
      'sg-button__text',
      'relative',
      'flex',
      'items-center',
      {
        'opacity-0': loading,
        't-px': size === BUTTON_SIZE.S,
      }
    );

    const iconClass = cx('sg-button__icon', 'inline-flex', 'mr-m', '-ml-xxs', {
      'mr-[6px]': size === BUTTON_SIZE.S,
      '-ml-xxs': size === BUTTON_SIZE.S,
      [`sg-button__icon--${size || ''}`]: size,
      'opacity-0': loading,
      '-mr-xxs': reversedOrder || (size === BUTTON_SIZE.S && reversedOrder),
      'ml-xxs': reversedOrder,
      'ml-xs': type.includes('transparent') && reversedOrder && !size,
      '-mr-[-2px]': type.includes('transparent') && reversedOrder && !size,
      'ml-[6px]':
        (type.includes('transparent') &&
          reversedOrder &&
          size === BUTTON_SIZE.S) ||
        (type.includes('transparent') &&
          reversedOrder &&
          size === BUTTON_SIZE.S) ||
        (size === BUTTON_SIZE.S && reversedOrder),
      'ml-[12px]':
        (type.includes('transparent') &&
          reversedOrder &&
          size === BUTTON_SIZE.L) ||
        (BUTTON_SIZE.L && reversedOrder),
      '-mr-[-3px]':
        type.includes('transparent') && reversedOrder && size === BUTTON_SIZE.L,
      'mr-[12px]': size === BUTTON_SIZE.L,
      '-ml-[6px]': size === BUTTON_SIZE.L,
      '-mr-[6px]': size === BUTTON_SIZE.L && reversedOrder,
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
            className="absolute"
          />
        )}
        {ico}
        {/* As soon as we have Proxima fixed, we could remove that span */}
        <span className={btnTextClasses}>{children}</span>
      </TypeToRender>
    );
  }
);

Button.displayName = 'Button';

export default Button;
