// @flow strict

import React from 'react';
import type {Node} from 'react';
import cx from 'classnames';

export const BUTTON_SIZE = Object.freeze({
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
});

export const BUTTON_TYPE = Object.freeze({
  SOLID: 'solid',
  SOLID_INVERTED: 'solid-inverted',
  SOLID_BLUE: 'solid-blue',
  SOLID_MINT: 'solid-mint',
  SOLID_LIGHT: 'solid-light',
  OUTLINE: 'outline',
  TRANSPARENT: 'transparent',
  TRANSPARENT_LIGHT: 'transparent-light',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  TRANSPARENT_PEACH: 'transparent-peach',
  TRANSPARENT_MUSTRAD: 'transparent-mustard',
  FACEBOOK: 'facebook',
});

type ButtonTypeType =
  | 'solid'
  | 'solid-inverted'
  | 'solid-blue'
  | 'solid-mint'
  | 'solid-light'
  | 'outline'
  | 'transparent'
  | 'transparent-light'
  | 'transparent-inverted'
  | 'transparent-peach'
  | 'transparent-mustard'
  | 'facebook';

type ButtonSizeType = 'large' | 'medium' | 'small';

export type ButtonPropsType = {
  /**
   * Children to be rendered inside Button
   * @example <Button
   *           icon={<Icon type="answer" color="light" size={24} />}
   *           type="solid"
   *          >
   *            button
   *          </Button>
   */
  children?: Node,
  /**
   * Specify type of the button that you want to use
   * @example <Button type="solid">
   *            button
   *          </Button>
   * @see type="solid" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid"#buttons
   * @see type="solid-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-inverted"#buttons
   * @see type="solid-blue" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-blue"#buttons
   * @see type="solid-mint" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid-mint"#buttons
   * @see type="outline" https://styleguide.brainly.com/latest/docs/interactive.html?type="outline"#buttons
   * @see type="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent"#buttons
   * @see type="transparent-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-inverted"#buttons
   * @see type="transparent-peach" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-peach"#buttons
   * @see type="transparent-mustard" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-mustard"#buttons
   * @see type="facebook" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-inverted"#buttons
   */
  type: ButtonTypeType,
  /**
   * You can render icon inside each type of button on the left side
   * @example <Button
   *           icon={<Icon type="facebook" color="light" size={24} />}
   *           buttonType="facebook"
   *          >
   *            Login with Facebook
   *          </Button>
   */
  icon?: Node,
  /**
   * There are three sizes options for buttons, not need to be specify, default is medium
   * @example <Button type="solid" size="medium">
   *            button
   *          </Button>
   * @see size="small" https://styleguide.brainly.com/latest/docs/interactive.html?size="small"#buttons
   * @see size="medium" https://styleguide.brainly.com/latest/docs/interactive.html?size="medium"#buttons
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#buttons
   */
  size?: ButtonSizeType,
  /**
   * Specify href for button, optional string
   * @example <Button href="https://brainly.com/" size="medium" type="solid-blue">
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
  type,
  icon,
  href,
  fullWidth,
  disabled,
  children,
  className,
  ...props
}: ButtonPropsType) => {
  const btnClass = cx(
    'sg-button',
    {
      [`sg-button--${String(size)}`]: size,
      [`sg-button--${String(type)}`]: type,
      'sg-button--disabled': disabled,
      'sg-button--full-width': fullWidth,
    },
    className
  );

  const iconClass = cx(
    'sg-button__icon',
    {
      [`sg-button__icon--${size || ''}`]: size,
    },
    className
  );

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
      disabled={disabled}
      role={href !== undefined ? 'button' : undefined}
    >
      {ico}
      {/* As soon as we have Proxima fixed, we could remove that span */}
      <span className="sg-button__text">{children}</span>
    </TypeToRender>
  );
};

export default Button;
