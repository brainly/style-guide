// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import * as IconModule from '../icons/Icon';

const {default: Icon, TYPE: ICON_TYPE} = IconModule;

export type LabelColorType =
  | 'blue'
  | 'mint'
  | 'lavender'
  | 'peach'
  | 'mustard'
  | 'gray'
  | 'mono';

export type LabelType =
  | 'default'
  | 'solid'
  | 'transparent'
  | 'transparent-color';

export const LABEL_TYPE = {
  DEFAULT: 'default',
  SOLID: 'solid',
  TRANSPARENT: 'transparent',
  TRANSPARENT_COLOR: 'transparent-color',
};

export const COLORS_SOLID_MAP = {
  blue: 'blue-primary',
  mint: 'mint-primary',
  lavender: 'lavender-primary',
  peach: 'peach-primary',
  mustard: 'mustard-primary',
  gray: 'gray-secondary',
  mono: 'black',
};

export const COLORS_DEFAULT_MAP = {
  blue: 'blue-secondary-light',
  mint: 'mint-secondary-light',
  lavender: 'lavender-secondary-light',
  peach: 'peach-secondary-light',
  mustard: 'mustard-secondary-light',
  gray: 'gray-secondary-light',
  mono: 'white',
};

const TRANSPARENT_COLOR_TEXT_MAP = {
  blue: 'blue-dark',
  mint: 'mint-dark',
  lavender: 'lavender-dark',
  peach: 'peach-dark',
  mustard: 'mustard-dark',
  gray: 'gray-secondary',
  mono: 'default',
};

const TRANSPARENT_ICON_COLOR_MAP = {
  blue: 'blue',
  mint: 'mint',
  lavender: 'lavender',
  peach: 'peach',
  mustard: 'mustard',
  gray: 'gray-secondary',
  mono: 'dark',
};

export const LABEL_COLORS_SET = {
  BLUE: 'blue',
  MINT: 'mint',
  LAVENDER: 'lavender',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  GRAY: 'gray',
  MONO: 'mono',
};

type PropsType = $ReadOnly<{
  /**
   * Specify type of label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   * @see type="default" https://styleguide.brainly.com/latest/docs/interactive.html?type="default"#labels
   * @see type="solid" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid"#labels
   * @see type="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent"#labels
   * @see type="transparent-color" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-color"#labels
   */
  type?: LabelType,
  /**
   * Specify color for label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   * @see color="blue" https://styleguide.brainly.com/latest/docs/interactive.html?color="blue"#labels
   * @see color="mint" https://styleguide.brainly.com/latest/docs/interactive.html?color="mint"#labels
   * @see color="lavender" https://styleguide.brainly.com/latest/docs/interactive.html?color="lavender"#labels
   * @see color="peach" https://styleguide.brainly.com/latest/docs/interactive.html?color="peach"#labels
   * @see color="mustard" https://styleguide.brainly.com/latest/docs/interactive.html?color="mustard"#labels
   * @see color="gray" https://styleguide.brainly.com/latest/docs/interactive.html?color="gray"#labels
   * @see color="mono" https://styleguide.brainly.com/latest/docs/interactive.html?color="mono"#labels
   */
  color: LabelColorType,
  /**
   * Icons types example, see more in SG interactive
   * @example <Label
   *           type="default"
   *           color="blue"
   *           iconType="heart"
   *          >
   *            example label
   *          </Label>
   * @see type="iconType" https://styleguide.brainly.com/latest/docs/interactive.html?iconType=heart#labels
   */
  iconType?: IconModule.IconTypeType,
  /**
   * Callback, called by clicking on **close** button. If specified, button will be added automatically
   * @example <Label
   *           type="default"
   *           color="blue"
   *           iconType="heart"
   *           onClose={() => doSomething()}
   *          >
   *            example label
   *          </Label>
   */
  onClose?: ?(SyntheticInputEvent<HTMLDivElement>) => mixed,
  /**
   * Children to be rendered inside Label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   */
  children: Node,
  /**
   * Additional class names
   */
  className?: string,
  ...
}>;

const Label = ({
  children,
  type = 'default',
  iconType,
  onClose,
  color,
  className,
  ...props
}: PropsType) => {
  const filteredColor =
    type === 'default' ? COLORS_DEFAULT_MAP[color] : COLORS_SOLID_MAP[color];

  const labelClass = classNames(
    'sg-label',
    {
      [`sg-label--${String(filteredColor)}`]:
        (color && type === 'solid') || type === 'default',
      [`sg-label--${type}`]: type,
      'sg-label--closable': onClose,
    },
    className
  );

  const textColor =
    type === 'default' || type === 'transparent'
      ? 'default'
      : type === 'solid'
      ? 'white'
      : TRANSPARENT_COLOR_TEXT_MAP[color];

  const iconColor =
    type === 'default'
      ? 'dark'
      : type === 'solid'
      ? 'light'
      : TRANSPARENT_ICON_COLOR_MAP[color];

  const closeIconColor =
    type === 'default' || type === 'transparent'
      ? 'dark'
      : type === 'solid'
      ? 'light'
      : TRANSPARENT_ICON_COLOR_MAP[color];

  return (
    <div {...props} className={labelClass}>
      {iconType && (
        <div className="sg-label__icon">
          <Icon type={iconType} color={iconColor} size={16} />
        </div>
      )}
      <span className="sg-label__text">
        <Text size="small" weight="bold" color={textColor}>
          {children}
        </Text>
      </span>
      {onClose ? (
        <button className="sg-label__close-button" onClick={onClose}>
          <Icon type="close" color={closeIconColor} size={16} />
        </button>
      ) : null}
    </div>
  );
};

export default Label;
export {ICON_TYPE};
