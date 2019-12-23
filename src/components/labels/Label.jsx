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

export type LabelType = 'default' | 'strong';

export const LABEL_TYPE = {
  DEFAULT: 'default',
  STRONG: 'strong',
};

export const COLORS_STRONG_MAP = {
  blue: 'blue-primary',
  mint: 'mint-primary',
  lavender: 'lavender-primary',
  peach: 'peach-primary',
  mustard: 'mustard-primary',
  gray: 'gray-primary',
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
   * @see type="strong" https://styleguide.brainly.com/latest/docs/interactive.html?type="strong"#labels
   */
  type: LabelType,
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
    type === 'default' ? COLORS_DEFAULT_MAP[color] : COLORS_STRONG_MAP[color];

  const labelClass = classNames(
    'sg-label',
    {
      [`sg-label--${String(filteredColor)}`]: color,
      [`sg-label--${type}`]: type,
    },
    className
  );

  return (
    <div {...props} className={labelClass}>
      {iconType && (
        <div className="sg-label__icon">
          <Icon
            type={iconType}
            color={type === 'default' ? 'dark' : 'light'}
            size={16}
          />
        </div>
      )}
      <span className="sg-label__text">
        <Text
          size="small"
          weight="bold"
          color={type === 'default' ? 'default' : 'white'}
        >
          {children}
        </Text>
      </span>
      {onClose ? (
        <button className="sg-label__close-button" onClick={onClose}>
          <Icon
            type="close"
            color={type === 'default' ? 'dark' : 'light'}
            size={16}
          />
        </button>
      ) : null}
    </div>
  );
};

export default Label;
export {ICON_TYPE};
