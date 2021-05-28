// @flow strict

import * as React from 'react';
// import {Spinner} from '../..';
import cx from 'classnames';
import {__DEV__} from '../utils';
import invariant from '../utils/invariant';

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

// type ButtonColorType =
//   | {
//       type: $Values<typeof BUTTON_TYPE>,
//       toggle?: null,
//     }
//   | {
//       type: $Values<typeof TOGGLE_BUTTON_TYPE>,
//       toggle?: $Values<typeof BUTTON_TOGGLE> | null,
//     }
//   | {
//       type: $Values<typeof TOGGLE_BUTTON_TYPE> | 'transparent-peach',
//       toggle?: 'peach' | null,
//     }
//   | {
//       type: $Values<typeof TOGGLE_BUTTON_TYPE> | 'transparent-mustard',
//       toggle?: 'mustard' | null,
//     }
//   | {
//       type: $Values<typeof TOGGLE_BUTTON_TYPE> | 'transparent-blue',
//       toggle?: 'blue' | null,
//     };

// type ButtonIconType =
//   | {
//       icon?: React.Node,
//       iconOnly?: null,
//       reversedOrder?: boolean,
//     }
//   | {
//       icon: React.Node,
//       iconOnly?: boolean,
//       reversedOrder?: null,
//     };

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
   *           icon={<Icon type="facebook" color="light" size={24} />}
   *           type="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   *
   * iconOnly: optional and available when icon is set. it hides button's text
   * @example <Button
   *            icon={<Icon type="facebook" color="light" size={24} />}
   *            iconOnly
   *            type="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   */
  icon?: React.Node,
  iconOnly?: boolean,
  reversedOrder?: boolean,
  /**
   * Children to be rendered inside Button
   * @example <Button
   *           icon={<Icon type="answer" color="light" size={24} />}
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
   * Show loading state. By default loading state make button disabled and
   * keep button's width unchanged.
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

const Button = ({
  size,
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
}: ButtonPropsType) => {
  if (__DEV__) {
    invariant(
      toggle === 'blue' &&
        [
          'solid-light',
          'outline',
          'transparent',
          'transparent-light',
          'transparent-blue',
        ].includes(type),
      `Value of toggle property '${String(
        toggle
      )}' has no effect when button type is set to '${type}'`
    );

    invariant(
      toggle === 'peach' &&
        [
          'solid-light',
          'outline',
          'transparent',
          'transparent-light',
          'transparent-peach',
        ].includes(type),
      `Value of toggle property '${String(
        toggle
      )}' has no effect when button type is set to '${type}'`
    );

    invariant(
      toggle === 'mustard' &&
        [
          'solid-light',
          'outline',
          'transparent',
          'transparent-light',
          'transparent-mustard',
        ].includes(type),
      `Value of toggle property '${String(
        toggle
      )}' has no effect when button type is set to '${type}'`
    );
  }

  const isDisabled = disabled || loading;

  const btnClass = cx(
    'sg-button',
    {
      [`sg-button--${String(size)}`]: size,
      [`sg-button--${String(type)}`]: type,
      'sg-button--disabled': isDisabled,
      'sg-button--full-width': fullWidth,
      'sg-button--icon-only': Boolean(icon) && iconOnly,
      [`sg-button--${String(type)}-toggle-${String(toggle)}`]: toggle,
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

  const TypeToRender = href !== undefined ? 'a' : 'button';

  return (
    <TypeToRender
      {...props}
      className={btnClass}
      href={href}
      disabled={isDisabled}
      role={href !== undefined ? 'button' : undefined}
    >
      {ico}
      {/* As soon as we have Proxima fixed, we could remove that span */}
      <span className="sg-button__text">{children}</span>
    </TypeToRender>
  );
};

export default Button;
