// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text, {TEXT_COLOR} from '../text/Text';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from '../icons/Icon';
import type {IconTypeType} from '../icons/Icon';

export type LabelColorType =
  | 'blue'
  | 'green'
  | 'indigo'
  | 'red'
  | 'yellow'
  | 'gray'
  | 'achromatic';

export type LabelType =
  | 'default'
  | 'solid'
  | 'transparent'
  | 'transparent-color';

export const LABEL_TYPE: {
  DEFAULT: 'default',
  SOLID: 'solid',
  TRANSPARENT: 'transparent',
  TRANSPARENT_COLOR: 'transparent-color',
} = {
  DEFAULT: 'default',
  SOLID: 'solid',
  TRANSPARENT: 'transparent',
  TRANSPARENT_COLOR: 'transparent-color',
};

export const COLORS_SOLID_MAP: {
  blue: 'blue-50',
  green: 'green-50',
  indigo: 'indigo-40',
  red: 'red-50',
  yellow: 'yellow-50',
  gray: 'gray-50',
  achromatic: 'black',
} = {
  blue: 'blue-50',
  green: 'green-50',
  indigo: 'indigo-40',
  red: 'red-50',
  yellow: 'yellow-50',
  gray: 'gray-50',
  achromatic: 'black',
};

export const COLORS_DEFAULT_MAP: {
  blue: 'blue-20',
  green: 'green-20',
  indigo: 'indigo-20',
  red: 'red-20',
  yellow: 'yellow-20',
  gray: 'gray-20',
  achromatic: 'white',
} = {
  blue: 'blue-20',
  green: 'green-20',
  indigo: 'indigo-20',
  red: 'red-20',
  yellow: 'yellow-20',
  gray: 'gray-20',
  achromatic: 'white',
};

const TRANSPARENT_COLOR_TEXT_MAP: {
  blue: 'text-blue-60',
  green: 'text-green-60',
  indigo: 'text-indigo-60',
  red: 'text-red-60',
  yellow: 'text-yellow-60',
  gray: 'text-gray-50',
  achromatic: 'text-black',
} = {
  blue: 'text-blue-60',
  green: 'text-green-60',
  indigo: 'text-indigo-60',
  red: 'text-red-60',
  yellow: 'text-yellow-60',
  gray: 'text-gray-50',
  achromatic: 'text-black',
};

const TRANSPARENT_ICON_COLOR_MAP: {
  blue: 'icon-blue-50',
  green: 'icon-green-50',
  indigo: 'icon-indigo-50',
  red: 'icon-red-50',
  yellow: 'icon-yellow-50',
  gray: 'icon-gray-50',
  achromatic: 'icon-black',
} = {
  blue: 'icon-blue-50',
  green: 'icon-green-50',
  indigo: 'icon-indigo-50',
  red: 'icon-red-50',
  yellow: 'icon-yellow-50',
  gray: 'icon-gray-50',
  achromatic: 'icon-black',
};

export const LABEL_COLORS_SET: {
  BLUE: 'blue',
  GREEN: 'green',
  INDIGO: 'indigo',
  RED: 'red',
  YELLOW: 'yellow',
  GRAY: 'gray',
  ACHROMATIC: 'achromatic',
} = {
  BLUE: 'blue',
  GREEN: 'green',
  INDIGO: 'indigo',
  RED: 'red',
  YELLOW: 'yellow',
  GRAY: 'gray',
  ACHROMATIC: 'achromatic',
};

export type LabelPropsType = $ReadOnly<{
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
   * @see color="green" https://styleguide.brainly.com/latest/docs/interactive.html?color="green"#labels
   * @see color="indigo" https://styleguide.brainly.com/latest/docs/interactive.html?color="indigo"#labels
   * @see color="red" https://styleguide.brainly.com/latest/docs/interactive.html?color="red"#labels
   * @see color="yellow" https://styleguide.brainly.com/latest/docs/interactive.html?color="yellow"#labels
   * @see color="gray" https://styleguide.brainly.com/latest/docs/interactive.html?color="gray"#labels
   * @see color="achromatic" https://styleguide.brainly.com/latest/docs/interactive.html?color="achromatic"#labels
   */
  color?: LabelColorType,
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
  iconType?: IconTypeType,
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
  onClose?: ?(SyntheticInputEvent<HTMLButtonElement>) => void,
  /**
   * Children to be rendered inside Label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   */
  children: React.Node,
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
  color = 'achromatic',
  className,
  ...props
}: LabelPropsType) => {
  const backgroundColor =
    type === 'default' ? COLORS_DEFAULT_MAP[color] : COLORS_SOLID_MAP[color];

  const labelClass = classNames(
    'sg-label',
    {
      [`sg-label--${String(backgroundColor)}`]:
        backgroundColor && (type === 'solid' || type === 'default'),
      'sg-label--closable': onClose,
      'sg-label--transparent':
        type === 'transparent' || type === 'transparent-color',
    },
    className
  );

  const textColor =
    type === 'default' || type === 'transparent'
      ? TEXT_COLOR['text-black']
      : type === 'solid'
      ? TEXT_COLOR['text-white']
      : TRANSPARENT_COLOR_TEXT_MAP[color];

  const iconColor =
    type === 'default'
      ? ICON_COLOR['icon-black']
      : type === 'solid'
      ? ICON_COLOR['icon-white']
      : TRANSPARENT_ICON_COLOR_MAP[color];

  const closeIconColor =
    type === 'default' || type === 'transparent'
      ? ICON_COLOR['icon-black']
      : type === 'solid'
      ? ICON_COLOR['icon-white']
      : TRANSPARENT_ICON_COLOR_MAP[color];

  return (
    <div {...props} className={labelClass}>
      {iconType && (
        <div className="sg-label__icon">
          <Icon type={iconType} color={iconColor} size={16} />
        </div>
      )}
      <Text
        size="small"
        weight="bold"
        color={textColor}
        className="sg-label__text"
      >
        {children}
      </Text>
      {onClose ? (
        <button
          className="sg-label__close-button"
          onClick={onClose}
          title="close"
          aria-label="close"
        >
          <Icon type="close" color={closeIconColor} size={16} />
        </button>
      ) : null}
    </div>
  );
};

export default Label;
export {ICON_TYPE};
