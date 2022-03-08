// @flow strict

/* eslint-disable max-len */

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
      'relative inline-flex justify-center items-center rounded-[20px] whitespace-nowrap no-underline button-text-normal font-bold uppercase duration-200 ease-in-out cursor-pointer box-border [will-change:background-color,border-color] [transition-property:background-color,border-color]',
      {
        'rounded-[28px] h-l text-button-text-large': size === BUTTON_SIZE.L,
        'px-[28px]': size === BUTTON_SIZE.L && !iconOnly,
        'h-m': size === BUTTON_SIZE.M,
        'px-[20px]': size === BUTTON_SIZE.M && !iconOnly,
        'rounded-2xl h-s text-button-text-small': size === BUTTON_SIZE.S,
        'px-s': size === BUTTON_SIZE.S && !iconOnly,
        'text-white bg-black hover:not(:disabled):bg-white focus:not(:disabled):bg-[#283037] active:bg-[#283037] active:focus:not(:disabled):bg-[#283037]':
          type === BUTTON_TYPE.SOLID,
        'text-white bg-blue-40 hover:not(:disabled):bg-[#1091e7] focus:not(:disabled):bg-[#1091e7] active:not(:disabled):bg-[#1091e7] active:focus:not(:disabled):bg-[#1091e7]':
          type === BUTTON_TYPE.SOLID_BLUE,
        'bg-white text-black hover:not(:disabled):bg-[#f7f9fb] focus:not(:disabled):bg-[#f7f9fb] active:not(:disabled):bg-[#f7f9fb] active:focus:not(:disabled):bg-[#f7f9fb]':
          type === BUTTON_TYPE.SOLID_INVERTED,
        'text-black bg-gray-20 hover:not(:disabled):bg-[#e6eef4] focus:not(:disabled):bg-[#e6eef4] active:not(:disabled):bg-[#e6eef4] active:focus:not(:disabled):bg-[#e6eef4]':
          type === BUTTON_TYPE.SOLID_LIGHT && !toggle,
        'text-white bg-green-40 hover:not(:disabled):bg-[#30b16f] focus:not(:disabled):bg-[#30b16f] active:not(:disabled):bg-[#30b16f] active:focus:not(:disabled):bg-[#30b16f]':
          type === BUTTON_TYPE.SOLID_MINT,
        'bg-transparent text-black px-2.5 hover:not(:disabled):bg-[#687b8c1f focus:not(:disabled):bg-[#687b8c1f] active:not(:disabled):bg-[#687b8c1f] active:focus:not(:disabled):bg-[#687b8c1f]':
          type === BUTTON_TYPE.TRANSPARENT,
        'bg-transparent text-blue-40 px-2.5 hover:not(:disabled):bg-[#4fb3f61f] focus:not(:disabled):bg-[#4fb3f61f] active:not(:disabled):bg-[#4fb3f61f] active:focus:not(:disabled):bg-[#4fb3f61f]':
          type === BUTTON_TYPE.TRANSPARENT_BLUE,
        'text-white bg-transparent px-2.5 hover:not(:disabled):bg-[#ffffff1f] focus:not(:disabled):bg-[#ffffff1f] active:not(:disabled):bg-[#ffffff1f] active:focus:not(:disabled):bg-[#ffffff1f]':
          type === BUTTON_TYPE.TRANSPARENT_INVERTED,
        'bg-transparent text-gray-50 px-2.5 hover:not(:disabled):bg-[#687b8c1f] focus:not(:disabled):bg-[#687b8c1f] active:not(:disabled):bg-[#687b8c1f] active:focus:not(:disabled):bg-[#687b8c1f]':
          type === BUTTON_TYPE.TRANSPARENT_LIGHT,
        'bg-transparent text-yellow-40 px-2.5 hover:not(:disabled):bg-[#fbbe2e1f] focus:not(:disabled):bg-[#fbbe2e1f] active:not(:disabled):bg-[#fbbe2e1f] active:focus:not(:disabled):bg-[#fbbe2e1f]':
          type === BUTTON_TYPE.TRANSPARENT_MUSTARD,
        'bg-transparent px-2.5 text-red-40 hover:not(:disabled):bg-[#ff79681f] focus:not(:disabled):bg-[#ff79681f] active:not(:disabled):bg-[#ff79681f] active:focus:not(:disabled):bg-[#ff79681f]':
          type === BUTTON_TYPE.TRANSPARENT_PEACH,
        'text-black bg-transparent border-2 border-solid border-black hover:not(:disabled):bg-[#687b8c1f] focus:not(:disabled):bg-[#687b8c1f] active:not(:disabled):bg-[#687b8c1f] active:focus:not(:disabled):bg-[#687b8c1f]':
          type === BUTTON_TYPE.OUTLINE,
        'text-white bg-facebook hover:not(:disabled):bg-facebook focus:not(:disabled):bg-facebook active:focus:not(:disabled):bg-facebook hover:not(:disabled):border-facebook-hover focus:not(:disabled):border-facebook-hover active:not(:disabled):border-facebook-hover active:focus:not(:disabled):border-facebook-hover':
          type === BUTTON_TYPE.FACEBOOK,
        'cursor-not-allowed opacity-40': isDisabled,
        'w-full': fullWidth,
        'p-0 sg-button--icon-only': Boolean(icon) && iconOnly,
        'w-10': Boolean(icon) && iconOnly && size === BUTTON_SIZE.M,
        'w-8': Boolean(icon) && iconOnly && size === BUTTON_SIZE.S,
        'w-14': Boolean(icon) && iconOnly && size === BUTTON_SIZE.L,
        'flex-row-reverse': reversedOrder,
        'bg-red-20 hover:not(:disabled):bg-[#ffdbd6] focus:not(:disabled):bg-[#ffdbd6] active:not(:disabled):bg-[#ffdbd6] active:focus:not(:disabled):bg-[#ffdbd6]':
          type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.PEACH,
        'bg-yellow-20 hover:not(:disabled):bg-[#ffedc2] focus:not(:disabled):bg-[#ffedc2] active:not(:disabled):bg-[#ffedc2] active:focus:not(:disabled):bg-[#ffedc2]':
          type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.MUSTARD,
        'bg-blue-20 hover:not(:disabled):bg-[#c8e9fe] focus:not(:disabled):bg-[#c8e9fe] active:not(:disabled):bg-[#c8e9fe] active:focus:not(:disabled):bg-[#c8e9fe]':
          type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.BLUE,
        'border-red-40 hover:not(:disabled):bg-[#ff79681f] focus:not(:disabled):bg-[#ff79681f] active:not(:disabled):bg-[#ff79681f] active:focus:not(:disabled):bg-[#ff79681f]':
          type === BUTTON_TYPE.OUTLINE && toggle === BUTTON_TOGGLE.PEACH,
        'border-yellow-40 hover:not(:disabled):bg-[#fbbe2e1f] focus:not(:disabled):bg-[#fbbe2e1f] active:not(:disabled):bg-[#fbbe2e1f] active:focus:not(:disabled):bg-[#fbbe2e1f]':
          type === BUTTON_TYPE.OUTLINE && toggle === BUTTON_TOGGLE.MUSTARD,
        'border-blue-40 hover:not(:disabled):bg-[#4fb3f61f] focus:not(:disabled):bg-[#4fb3f61f] active:not(:disabled):bg-[#4fb3f61f] active:focus:not(:disabled):bg-[#4fb3f61f]':
          type === BUTTON_TYPE.OUTLINE && toggle === BUTTON_TOGGLE.BLUE,
        'hover:not(:disabled):bg-[#ff79681f] focus:not(:disabled):bg-[#ff79681f] active:not(:disabled):bg-[#ff79681f] active:focus:not(:disabled):bg-[#ff79681f]':
          (type === BUTTON_TYPE.TRANSPARENT &&
            toggle === BUTTON_TOGGLE.PEACH) ||
          (type === BUTTON_TYPE.TRANSPARENT_LIGHT &&
            toggle === BUTTON_TOGGLE.PEACH) ||
          (type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.PEACH),
        'hover:not(:disabled):bg-[#fbbe2e1f] focus:not(:disabled):bg-[#fbbe2e1f] active:not(:disabled):bg-[#fbbe2e1f] active:focus:not(:disabled):bg-[#fbbe2e1f]':
          (type === BUTTON_TYPE.TRANSPARENT &&
            toggle === BUTTON_TOGGLE.MUSTARD) ||
          (type === BUTTON_TYPE.TRANSPARENT_LIGHT &&
            toggle === BUTTON_TOGGLE.MUSTARD) ||
          (type === BUTTON_TYPE.SOLID_LIGHT &&
            toggle === BUTTON_TOGGLE.MUSTARD) ||
          (type === BUTTON_TYPE.TRANSPARENT_MUSTARD &&
            toggle === BUTTON_TOGGLE.MUSTARD),
        'hover:not(:disabled):bg-[#4fb3f61f] focus:not(:disabled):bg-[#4fb3f61f] active:not(:disabled):bg-[#4fb3f61f] active:focus:not(:disabled):bg-[#4fb3f61f]':
          (type === BUTTON_TYPE.TRANSPARENT && toggle === BUTTON_TOGGLE.BLUE) ||
          (type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.BLUE) ||
          (type === BUTTON_TYPE.TRANSPARENT_LIGHT &&
            toggle === BUTTON_TOGGLE.BLUE) ||
          (BUTTON_TYPE.TRANSPARENT_BLUE && BUTTON_TOGGLE.BLUE),
        'px-[14px]':
          size === BUTTON_SIZE.L &&
          (type === BUTTON_TYPE.TRANSPARENT ||
            type === BUTTON_TYPE.TRANSPARENT_LIGHT ||
            type === BUTTON_TYPE.TRANSPARENT_INVERTED ||
            type === BUTTON_TYPE.TRANSPARENT_PEACH ||
            type === BUTTON_TYPE.TRANSPARENT_MUSTARD ||
            type === BUTTON_TYPE.TRANSPARENT_BLUE),
        'px-xs':
          size === BUTTON_SIZE.S &&
          (type === BUTTON_TYPE.TRANSPARENT ||
            type === BUTTON_TYPE.TRANSPARENT_LIGHT ||
            type === BUTTON_TYPE.TRANSPARENT_INVERTED ||
            type === BUTTON_TYPE.TRANSPARENT_PEACH ||
            type === BUTTON_TYPE.TRANSPARENT_MUSTARD ||
            type === BUTTON_TYPE.TRANSPARENT_BLUE),
      },
      className
    );

    const btnTextClasses = cx('flex items-center', {
      relative: !iconOnly,
      'opacity-0': loading,
      't-px': size === BUTTON_SIZE.S,
      'absolute w-px h-px p-0 -m-px overflow-hidden border-none [clip:rect(0,0,0,0)]':
        Boolean(icon) && iconOnly,
    });

    const iconClass = cx('inline-flex', {
      'mr-m -ml-xxs': !iconOnly,
      '-ml-xxs mr-[6px]': size === BUTTON_SIZE.S && !iconOnly,
      'opacity-0': loading,
      '-mr-xxs ml-[6px]': size === BUTTON_SIZE.S && reversedOrder,
      '-mr-xxs ml-xxs': reversedOrder,
      'ml-xs': type.includes('transparent') && reversedOrder && !size,
      '-mr-[-2px]': type.includes('transparent') && reversedOrder && !size,
      'ml-[6px]':
        type.includes('transparent') && reversedOrder && size === BUTTON_SIZE.S,
      'ml-[12px] -mr-[-3px]':
        type.includes('transparent') && reversedOrder && size === BUTTON_SIZE.L,
      'mr-[12px] -ml-[6px]': size === BUTTON_SIZE.L && !iconOnly,
      '-mr-[6px] ml-[12px]': size === BUTTON_SIZE.L && reversedOrder,
      'm-0': Boolean(icon) && iconOnly,
      '-ml-0.5': type.includes('transparent'),
      '-ml-[3px]': type.includes('transparent') && size === BUTTON_SIZE.L,
      'text-red-40':
        (type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.PEACH) ||
        (type === BUTTON_TYPE.OUTLINE && toggle === BUTTON_TOGGLE.PEACH) ||
        (type === BUTTON_TYPE.TRANSPARENT && toggle === BUTTON_TOGGLE.PEACH) ||
        (type === BUTTON_TYPE.TRANSPARENT_LIGHT &&
          toggle === BUTTON_TOGGLE.PEACH),
      'text-yellow-40':
        (type === BUTTON_TYPE.SOLID_LIGHT &&
          toggle === BUTTON_TOGGLE.MUSTARD) ||
        (type === BUTTON_TYPE.OUTLINE && toggle === BUTTON_TOGGLE.MUSTARD) ||
        (type === BUTTON_TYPE.TRANSPARENT &&
          toggle === BUTTON_TOGGLE.MUSTARD) ||
        (type === BUTTON_TYPE.TRANSPARENT_LIGHT &&
          toggle === BUTTON_TOGGLE.MUSTARD),
      'text-blue-40':
        (type === BUTTON_TYPE.SOLID_LIGHT && toggle === BUTTON_TOGGLE.BLUE) ||
        (type === BUTTON_TYPE.OUTLINE && toggle === BUTTON_TOGGLE.BLUE) ||
        (type === BUTTON_TYPE.TRANSPARENT && toggle === BUTTON_TOGGLE.BLUE) ||
        (type === BUTTON_TYPE.TRANSPARENT_LIGHT &&
          toggle === BUTTON_TOGGLE.BLUE),
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
