// @flow
import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import Icon, {TYPE as iconTypes, ICON_COLOR} from '../icons/Icon';

type ColorType =
  | 'blue'
  | 'lavender'
  | 'dark'
  | 'mint'
  | 'mint-secondary'
  | 'mint-secondary-light'
  | 'navyblue-secondary'
  | 'blue-secondary'
  | 'blue-secondary-light'
  | 'gray-secondary-lightest'
  | 'gray-secondary-ultra-light'
  | 'peach';

type PaddingType =
  | 'no-padding'
  | 'small-padding'
  | 'xsmall-padding'
  | 'xxsmall-padding'
  | 'large-padding';

type CloseIconColorType =
  | 'LIGHT'
  | 'DARK';

export const COLOR = {
  BLUE: 'blue',
  LAVENDER: 'lavender',
  DARK: 'dark',
  MINT: 'mint',
  MINT_SECONDARY: 'mint-secondary',
  MINT_SECONDARY_LIGHT: 'mint-secondary-light',
  NAVYBLUE_SECONDARY: 'navyblue-secondary',
  BLUE_SECONDARY: 'blue-secondary',
  BLUE_SECONDARY_LIGHT: 'blue-secondary-light',
  GRAY_SECONDARY_LIGHT: 'gray-secondary-lightest',
  GRAY_SECONDARY_ULTRA_LIGHT: 'gray-secondary-ultra-light',
  PEACH: 'peach'
};

export const PADDING = {
  NO_PADDING: 'no-padding',
  SMALL: 'small-padding',
  XSMALL: 'xsmall-padding',
  XXSMALL: 'xxsmall-padding',
  LARGE: 'large-padding'
};

export const CLOSE_ICON_COLOR = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

type BoxPropsType = {
  /**
   * Specify inner children components, provided by React and shouldn't be specified manually
   */
  children?: ?Node,
  /**
   * Additional class names
   */
  className?: ?string,
  /**
   * Specify background color
   * @example
   * <Box color="mint-secondary">some text</Box>
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   */
  color?: ?ColorType,
  /**
   * Specify if **<Box/>** should have borders around
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   * @default true
   */
  border?: boolean,
  /**
   * Specify if **<Box/>** should *NOT* have min height
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   * @default false
   */
  noMinHeight?: ?boolean,
  /**
   * Specify if **<Box/>** should take full parents width
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   * @default false
   */
  full?: ?boolean,
  /**
   * Specify padding sizes for inner content
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   */
  padding?: ?PaddingType,
  /**
   * Specify src for image, which will be displayed INSTEAD of inner content
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   */
  imgSrc?: ?string,
  /**
   * Specify if border-shadow should be displayed around the **<Box/>**
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   * @default false
   */
  shadow?: ?boolean,
  /**
   * Specify if **<Box/>** should have flat corners
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   * @default false
   */
  noBorderRadius?: ?boolean,
  /**
   * Color of **close** icon. Prop used only in case if **onClose** prop specified as well
   * @example
   * // right
   * <Box onClose={() => doSomething()} closeIconColor="DARK">some text</Box>
   * // wrong
   * <Box closeIconColor="DARK">some text</Box>
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   */
  closeIconColor?: ?CloseIconColorType,
  /**
   * Callback, called by clicking on **close** button. If specified, button will be aded automatically
   * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
   */
  onClose?: ?(SyntheticInputEvent<HTMLDivElement> => mixed)
};

/**
 * Container, used for grouping small blocks of information. Highlight any prop to
 * get detailed prop info.
 *
 * @see https://styleguide.brainly.com/143.5.4/docs/containers.html#box
 *
 * @returns {JSX.Element} Box component
 */
const Box = ({color, padding, full, children, border = !color, imgSrc, noMinHeight, shadow, noBorderRadius,
  onClose, closeIconColor, className, ...props}: BoxPropsType) => {
  const boxClass = classNames('sg-box', {
    [`sg-box--${String(color)}`]: color,
    'sg-box--no-border': !border,
    'sg-box--full': full,
    [`sg-box--${String(padding)}`]: padding,
    'sg-box--image-wrapper': imgSrc,
    'sg-box--no-min-height': noMinHeight,
    'sg-box--with-shadow': shadow,
    'sg-box--no-border-radius': noBorderRadius
  }, className);

  let content;

  if (imgSrc) {
    content = <img className="sg-box__image" src={imgSrc} />;
  } else {
    content = <div className="sg-box__hole">{children}</div>;
  }
  return (
    <div {...props} className={boxClass}>
      {onClose ?
        <div className="sg-box__close" onClick={onClose}>
          <Icon type={iconTypes.X} color={closeIconColor ? ICON_COLOR[closeIconColor] : ICON_COLOR.DARK} size={10} />
        </div> : null
      }
      {content}
    </div>
  );
};

export default Box;
