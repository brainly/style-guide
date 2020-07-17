// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import Icon, {ICON_COLOR} from '../icons/Icon';

type ColorType =
  | 'blue'
  | 'lavender'
  | 'dark'
  | 'mint'
  | 'mint-secondary'
  | 'mint-secondary-light'
  | 'mint-secondary-ultra-light'
  | 'navyblue-secondary'
  | 'blue-secondary'
  | 'blue-secondary-light'
  | 'gray-secondary-lightest'
  | 'gray-secondary-ultra-light'
  | 'mustard-primary'
  | 'peach'
  | 'peach-secondary'
  | 'peach-secondary-light';

type PaddingType =
  | 'no-padding'
  | 'small-padding'
  | 'xsmall-padding'
  | 'xxsmall-padding'
  | 'large-padding';

type CloseIconColorType = 'LIGHT' | 'DARK';

export const COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  MINT_SECONDARY_ULTRA_LIGHT: 'mint-secondary-ultra-light',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-lightest',
  GRAY_SECONDARY_ULTRA_LIGHT: 'gray-secondary-ultra-light',
  MUSTARD_PRIMARY: 'mustard-primary',
  PEACH: 'peach',
  PEACH_SECONDARY: 'peach-secondary',
  PEACH_SECONDARY_LIGHT: 'peach-secondary-light',
};

export const PADDING = {
  NO_PADDING: 'no-padding',
  SMALL: 'small-padding',
  XSMALL: 'xsmall-padding',
  XXSMALL: 'xxsmall-padding',
  LARGE: 'large-padding',
};

export const CLOSE_ICON_COLOR = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

type BoxDeprecatedPropsType = {
  /**
   * Children to be render inside of the BoxDeprecated. Takes no effect if **imgSrc** prop specified.
   * @example <BoxDeprecated>
   *            some child
   *          </BoxDeprecated>
   *
   *          // child from box below won't be rendered
   *          <BoxDeprecated imgSrc="https://some_url">
   *            THIS CONTENT WILL
   *            BE REPLACED BY IMAGE
   *          </BoxDeprecated>
   */
  children?: ?Node,
  /**
   * Additional class names
   */
  className?: ?string,
  /**
   * Specify background color
   * @example <BoxDeprecated color="mint-secondary">
   *            some text
   *          </BoxDeprecated>
   * @see color=blue https://styleguide.brainly.com/latest/docs/interactive.html?color=blue#boxes
   * @see color=lavender https://styleguide.brainly.com/latest/docs/interactive.html?color=lavender#boxes
   * @see color=dark https://styleguide.brainly.com/latest/docs/interactive.html?color=dark#boxes
   * @see color=mint https://styleguide.brainly.com/latest/docs/interactive.html?color=mint#boxes
   * @see color=mint-secondary https://styleguide.brainly.com/latest/docs/interactive.html?color=mint-secondary#boxes
   * @see color=mint-secondary-light https://styleguide.brainly.com/latest/docs/interactive.html?color=mint-secondary-light#boxes
   * @see color=navyblue-secondary https://styleguide.brainly.com/latest/docs/interactive.html?color=navyblue-secondary#boxes
   * @see color=blue-secondary https://styleguide.brainly.com/latest/docs/interactive.html?color=blue-secondary#boxes
   * @see color=blue-secondary-light https://styleguide.brainly.com/latest/docs/interactive.html?color=blue-secondary-light#boxes
   * @see color=gray-secondary-lightest https://styleguide.brainly.com/latest/docs/interactive.html?color=gray-secondary-lightest#boxes
   * @see color=gray-secondary-ultra-light https://styleguide.brainly.com/latest/docs/interactive.html?color=gray-secondary-ultra-light#boxes
   * @see color=peach https://styleguide.brainly.com/latest/docs/interactive.html?color=peach#boxes
   * @see color=mustard-primary https://styleguide.brainly.com/latest/docs/interactive.html?color=mustard-primary#boxes
   */
  color?: ?ColorType,
  /**
   * Specify if **<BoxDeprecated/>** should have borders around
   * @example <BoxDeprecated border={false}>
   *            some text
   *          </BoxDeprecated>
   * @see border=true https://styleguide.brainly.com/latest/docs/interactive.html?border=false#boxes
   * @see border=false https://styleguide.brainly.com/latest/docs/interactive.html?border=false#boxes
   * @default true
   */
  border?: boolean,
  /**
   * Specify if **<BoxDeprecated/>** should *NOT* have min height
   * @example <BoxDeprecated noMinHeight>
   *            some text
   *          </BoxDeprecated>
   * @see noMinHeight=true https://styleguide.brainly.com/latest/docs/interactive.html?noMinHeight=true#boxes
   * @see noMinHeight=false https://styleguide.brainly.com/latest/docs/interactive.html?noMinHeight=false#boxes
   * @default false
   */
  noMinHeight?: ?boolean,
  /**
   * Specify if **<BoxDeprecated/>** should take full parents width
   * @example <BoxDeprecated full>
   *            some text
   *          </BoxDeprecated>
   * @see full=true https://styleguide.brainly.com/latest/docs/interactive.html?full=true#boxes
   * @see full=false https://styleguide.brainly.com/latest/docs/interactive.html?full=false#boxes
   * @default false
   */
  full?: ?boolean,
  /**
   * Specify padding sizes for inner content
   * @example <BoxDeprecated padding="large-padding">
   *            some text
   *          </BoxDeprecated>
   * @see no-padding https://styleguide.brainly.com/latest/docs/interactive.html?padding=no-padding#boxes
   * @see small-padding https://styleguide.brainly.com/latest/docs/interactive.html?padding=small-padding#boxes
   * @see xsmall-padding https://styleguide.brainly.com/latest/docs/interactive.html?padding=xsmall-padding#boxes
   * @see xxsmall-padding https://styleguide.brainly.com/latest/docs/interactive.html?padding=xxsmall-padding#boxes
   * @see large-padding https://styleguide.brainly.com/latest/docs/interactive.html?padding=large-padding#boxes
   */
  padding?: ?PaddingType,
  /**
   * Specify src for image, which will be displayed INSTEAD of inner content
   * @example <BoxDeprecated imgSrc="https://some_url">
   *            THIS CONTENT WILL
   *            BE REPLACED BY IMAGE
   *          </BoxDeprecated>
   */
  imgSrc?: ?string,
  /**
   * Specify if border-shadow should be displayed around the **<BoxDeprecated/>**
   * @example <BoxDeprecated shadow>
   *            some text
   *          </BoxDeprecated>
   * @see shadow=true https://styleguide.brainly.com/latest/docs/interactive.html?shadow=true#boxes
   * @see shadow=false https://styleguide.brainly.com/latest/docs/interactive.html?shadow=false#boxes
   * @default false
   */
  shadow?: ?boolean,
  /**
   * Specify if **<BoxDeprecated/>** should have flat corners
   * @example <BoxDeprecated noBorderRadius>
   *            some text
   *          </BoxDeprecated>
   * @see noBorderRadius=true https://styleguide.brainly.com/latest/docs/interactive.html?noBorderRadius=true#boxes
   * @see noBorderRadius=false https://styleguide.brainly.com/latest/docs/interactive.html?noBorderRadius=false#boxes
   * @default false
   */
  noBorderRadius?: ?boolean,
  /**
   * Color of **close** icon. Prop used only in case if **onClose** prop specified as well
   * @example // right
   *          <BoxDeprecated
   *            onClose={() => doSomething()}
   *            closeIconColor="DARK"
   *          >
   *            some text
   *          </BoxDeprecated>
   *
   *          // wrong
   *          <BoxDeprecated closeIconColor="DARK">
   *            some text
   *          </BoxDeprecated>
   * @todo add interactive example for this prop
   */
  closeIconColor?: ?CloseIconColorType,
  /**
   * Callback, called by clicking on **close** button. If specified, button will be added automatically
   * @example <BoxDeprecated onClose={() => doSomething()}>
   *            some text
   *          </BoxDeprecated>
   * @todo add interactive example for this prop
   */
  onClose?: ?(SyntheticInputEvent<HTMLDivElement>) => mixed,
  ...
};

/**
 * Container, used for grouping small blocks of information. Highlight any prop to
 * get detailed prop info.
 *
 * @see react docs: https://styleguide.brainly.com/latest/docs/interactive.html#boxes
 * @see twig-compatible docs: https://styleguide.brainly.com/latest/docs/containers.html#box
 *
 * @example <BoxDeprecated>
 *             some child
 *          </BoxDeprecated>
 * @returns {JSX.Element} BoxDeprecated component
 */
const BoxDeprecated = ({
  color,
  padding,
  full,
  children,
  border = !color,
  imgSrc,
  noMinHeight,
  shadow,
  noBorderRadius,
  onClose,
  closeIconColor,
  className,
  ...props
}: BoxDeprecatedPropsType) => {
  const boxClass = classNames(
    'sg-box-deprecated',
    {
      [`sg-box-deprecated--${String(color)}`]: color,
      'sg-box-deprecated--no-border': !border,
      'sg-box-deprecated--full': full,
      [`sg-box-deprecated--${String(padding)}`]: padding,
      'sg-box-deprecated--image-wrapper': imgSrc,
      'sg-box-deprecated--no-min-height': noMinHeight,
      'sg-box-deprecated--with-shadow': shadow,
      'sg-box-deprecated--no-border-radius': noBorderRadius,
    },
    className
  );

  let content;

  if (imgSrc !== undefined && imgSrc !== null) {
    content = <img className="sg-box-deprecated__image" src={imgSrc} />;
  } else {
    content = <div className="sg-box-deprecated__hole">{children}</div>;
  }
  return (
    <div {...props} className={boxClass}>
      {onClose ? (
        <div className="sg-box-deprecated__close" onClick={onClose}>
          <Icon
            type="close"
            color={
              closeIconColor ? ICON_COLOR[closeIconColor] : ICON_COLOR.DARK
            }
            size={16}
          />
        </div>
      ) : null}
      {content}
    </div>
  );
};

export default BoxDeprecated;
