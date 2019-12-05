// @flow strict

import * as React from 'react';
import classnames from 'classnames';

type TextareaSizeType = 'short' | 'normal' | 'tall' | 'xtall';

type TextareaColorType = 'default' | 'white';

export const SIZE = {
  SHORT: 'short',
  NORMAL: 'normal',
  TALL: 'tall',
  XTALL: 'xtall',
};

export const TEXTAREA_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
};

export type TextareaPropsType = {
  // $FlowFixMe any generic prop types here broke autocomplete, so let's leave it as is for now
  type?: string | (any => React$Node),
  /**
   * Additional function to set ref for textarea
   */
  textareaRef?: (ref: ?HTMLElement) => mixed,
  /**
   * Optional specification for input value
   * @example <Textarea value="some example value" />
   */
  value?: mixed,
  /**
   * There are two color variants for form elements, default does not have to be specified
   * @example <Textarea color="white" placeholder="placeholder" />
   * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#textarea
   * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#textarea
   */
  color?: ?TextareaColorType,
  /**
   * Specify size of the textarea
   * @example <Textarea size="short" placeholder="example placeholder" />
   * @see size="short" https://styleguide.brainly.com/latest/docs/interactive.html?size="short"#textarea
   * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#textarea
   * @see size="tall" https://styleguide.brainly.com/latest/docs/interactive.html?size="tall"#textarea
   * @see size="xtall" https://styleguide.brainly.com/latest/docs/interactive.html?size="xtall"#textarea
   */
  size?: ?TextareaSizeType,
  /**
   * Optional additional boolean to specified if it's valid
   * @example <Textarea valid placeholder="example placeholder" />
   */
  valid?: boolean,
  /**
   * Optional additional boolean to specified if it's valid
   * @example <Textarea valid placeholder="example placeholder" />
   */
  invalid?: boolean,
  /**
   * Optional additional boolean to specified if it's full width
   * @example <Textarea fullWidth placeholder="example placeholder" />
   */
  fullWidth?: boolean,
  /**
   * Optional additional boolean for simple variant (does not have border radius)
   * @example <Textarea simple placeholder="example placeholder" />
   */
  simple?: boolean,
  /**
   * Optional additional boolean for variant with no padding
   * @example <Textarea noPadding placeholder="example placeholder" />
   */
  noPadding?: boolean,
  /**
   * Optional additional boolean for variant with height auto
   * @example <Textarea autoHeight placeholder="example placeholder" />
   */
  autoHeight?: boolean,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

const Textarea = (props: TextareaPropsType) => {
  const {
    valid,
    invalid,
    size = SIZE.NORMAL,
    color = 'default',
    fullWidth,
    simple,
    noPadding,
    autoHeight,
    value,
    className,
    textareaRef,
    type: Type = 'textarea',
    ...additionalProps
  } = props;

  if (valid === true && invalid === true) {
    throw {
      name: 'WrongValidation',
      message: 'Textarea can be either valid or invalid!',
    };
  }

  const textareaClass = classnames(
    'sg-textarea',
    {
      [`sg-textarea--${String(size)}`]: size !== SIZE.NORMAL,
      [`sg-textarea--${String(color)}`]: color !== 'default',
      'sg-textarea--valid': valid,
      'sg-textarea--invalid': invalid,
      'sg-textarea--full-width': fullWidth,
      'sg-textarea--simple': simple,
      'sg-textarea--no-padding': noPadding,
      'sg-textarea--auto-height': autoHeight,
    },
    className
  );

  return (
    <Type
      {...additionalProps}
      className={textareaClass}
      ref={textareaRef}
      value={value}
    />
  );
};

export default Textarea;
