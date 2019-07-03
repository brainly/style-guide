// @flow

import * as React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import {BUTTON_SIZE, BUTTON_TYPE} from './ButtonConsts';

type ButtonTypeType =
  | 'primary'
  | 'primary-inverted'
  | 'primary-blue'
  | 'primary-mint'
  | 'secondary'
  | 'link-button'
  | 'link-button-inverted'
  | 'link-button-peach'
  | 'link-button-mustard'
  | 'destructive'
  | 'warning'
  | 'facebook';

type ButtonSizeType =
  | 'large'
  | 'medium'
  | 'small';

export {BUTTON_SIZE, BUTTON_TYPE};

export type ButtonPropsType = {
  /**
   * Children to be rendered inside Button
   * @example <Button
   *           icon={<Icon type={ICON_TYPE.ANSWER} color={ICON_COLOR.LIGHT} size={24} />}
   *           buttonType={BUTTON_TYPE.FB}
   *          >
   *            Button with white answer icon
   *          </Button>
   */
  children?: React.Node,
  /**
   * Specify type of the button that you want to use
   * @example <Button type="primary">
   *            button
   *          </Button>
   * @see type="primary" https://styleguide.brainly.com/latest/docs/interactive.html?type="primary"#buttons
   * @see type="primary-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="primary-inverted"#buttons
   * @see type="primary-blue" https://styleguide.brainly.com/latest/docs/interactive.html?type="primary-blue"#buttons
   * @see type="primary-mint" https://styleguide.brainly.com/latest/docs/interactive.html?type="primary-mint"#buttons
   * @see type="secondary" https://styleguide.brainly.com/latest/docs/interactive.html?type="secondary"#buttons
   * @see type="link-button" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button"#buttons
   * @see type="link-button-inverted" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button-inverted"#buttons
   * @see type="link-button-peach" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button-peach"#buttons
   * @see type="link-button-mustard" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button-mustard"#buttons
   * @see type="destructive" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button-inverted"#buttons
   * @see type="warning" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button-inverted"#buttons
   * @see type="facebook" https://styleguide.brainly.com/latest/docs/interactive.html?type="link-button-inverted"#buttons
   */
  type: ButtonTypeType,
  /**
   * You can render icon inside each type of button on the left side
   * @example <Button
   *           icon={ICON_TYPE.FB}
   *           buttonType={BUTTON_TYPE.FB}
   *          >
   *            Login with Facebook
   *          </Button>
   */
  icon?: ?Node,
  /**
   * There are three sizes options for buttons, not need to be specify, default is medium
   * @example <Button type="primary" size="medium">
   *            button
   *          </Button>
   * @see size="small" https://styleguide.brainly.com/latest/docs/interactive.html?size="small"#buttons
   * @see size="medium" https://styleguide.brainly.com/latest/docs/interactive.html?size="medium"#buttons
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#buttons
   */
  size?: ButtonSizeType,
  /**
   * Specify href for button, optional string
   * @example <Button href="https://brainly.com/" size="medium" type="primary-blue">
   *            button
   *          </Button>
   */
  href?: string,
  /**
   * Optional boolean for disabled button
   * @example <Button type="primary-mint" disabled>
   *            button
   *          </Button>
   */
  disabled?: ?boolean,
  /**
   * Optional boolean for full width button
   * @example <Button type="primary-mint" fullWidth>
   *            button
   *          </Button>
   */
  fullWidth?: ?boolean,
  /**
   * Additional class names
   */
  className?: string
};

const Button = ({
  size,
  type,
  icon,
  fullWidth,
  disabled,
  children,
  className,
  ...props
}: ButtonPropsType) => {
  const btnClass = classNames(
    'sg-button', {
      [`sg-button--${size || ''}`]: size,
      [`sg-button--${type || ''}`]: type,
      'sg-button--disabled': disabled,
      'sg-button--full-width': fullWidth
    },
    className
  );

  const iconClass = classNames(
    'sg-button__icon', {
      [`sg-button__icon--${size || ''}`]: size
    },
    className
  );

  let ico;

  if (icon) {
    ico = <span className={iconClass}>{icon}</span>;
  }

  let TypeToRender = 'button';

  if (props.href) {
    TypeToRender = 'a';
  }

  return (
    <TypeToRender
      className={btnClass}
      {...props}
      disabled={disabled}
      role={props.href ? 'button' : null}
    >
      {ico}
      {/* As soon as we have Proxima fixed, we could remove that span */}
      <span className="sg-button__text">{children}</span>
    </TypeToRender>
  );
};

export default Button;
