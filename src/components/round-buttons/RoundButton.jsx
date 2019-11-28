// @flow strict

import React from 'react';
import cx from 'classnames';
import Icon, {TYPE} from '../icons/Icon';
import {ROUND_BUTTON_SIZE, ROUND_BUTTON_COLOR} from './roundButtonsConsts';

export {ROUND_BUTTON_SIZE, TYPE as ROUND_BUTTON_ICON_TYPE, ROUND_BUTTON_COLOR};

export type RoundButtonPropsType = {
  /**
   * Sizes for round buttons
   * @example <RoundButton size="small" />
   * @see size="small" https://styleguide.brainly.com/latest/docs/interactive.html?size="small"#round-buttons
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#buttons
   * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#buttons
   */
  size: $Values<typeof ROUND_BUTTON_SIZE>,
  /**
   * Icon types for round buttons
   * @example <RoundButton iconType="answer" />
   * @see type="points" https://styleguide.brainly.com/latest/docs/interactive.html?type="points"#round-buttons
   * @see type="heart" https://styleguide.brainly.com/latest/docs/interactive.html?type="heart"#buttons
   */
  iconType?: $Values<typeof TYPE>,
  /**
   * Color variants for round buttons
   * @example <RoundButton color="black" />
   * @see color="black" https://styleguide.brainly.com/latest/docs/interactive.html?color="black"#round-buttons
   * @see color="blue" https://styleguide.brainly.com/latest/docs/interactive.html?color="blue"#buttons
   * @see color="mint" https://styleguide.brainly.com/latest/docs/interactive.html?color="mint"#buttons
   * @see color="mustard" https://styleguide.brainly.com/latest/docs/interactive.html?color="mustard"#buttons
   * @see color="peach" https://styleguide.brainly.com/latest/docs/interactive.html?color="peach"#buttons
   */
  color: $Values<typeof ROUND_BUTTON_COLOR>,
  /**
   * Optional boolean for filled variant
   * @example <RoundButton color="black" filled/>
   */
  filled?: boolean,
  /**
   * Title for round button
   * @example <RoundButton title="example title" filled/>
   */
  title?: string,
  /**
   * ariaLabel for round button
   * @example <RoundButton ariaLabel="aria label" filled/>
   */
  ariaLabel?: string,
  /**
   * Additional class names
   */
  className?: string,
};

const RoundButton = ({
  size = 'medium',
  iconType = 'heart',
  color,
  filled,
  className,
  ariaLabel,
  title,
  ...props
}: RoundButtonPropsType) => {
  const roundButtonClass = cx(
    'sg-round-button',
    {
      [`sg-round-button--${String(color)}`]: color,
      [`sg-round-button--${String(size)}`]: size,
      'sg-round-button--filled': filled,
    },
    className
  );

  const buttonContent = (
    <Icon
      size={size === 'small' ? '16' : size === 'large' ? '32' : '24'}
      type={iconType}
      // to export it in an easy way to sketch
      color={
        filled !== undefined ? 'light' : color === 'black' ? 'dark' : color
      }
    />
  );

  return (
    <button {...props} aria-label={ariaLabel} className={roundButtonClass}>
      <span className="sg-round-button__hole">{buttonContent}</span>
    </button>
  );
};

export default RoundButton;
