// @flow

import * as React from 'react';
import classNames from 'classnames';
import Text from './Text';
import {TEXT_TYPE, LINK_COLOR, TEXT_SIZE, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN} from './textConsts';

type TextTypeType =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'a';

type TextSizeType =
  | 'xsmall'
  | 'small'
  | 'normal'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

type TextColorType =
  | 'default'
  | 'white'
  | 'gray'
  | 'gray-secondary'
  | 'mint-dark'
  | 'mint'
  | 'peach-dark'
  | 'peach'
  | 'mustard'
  | 'blue-dark'
  | 'blue'
  | 'blue-secondary'
  | 'blue-secondary-light';

type TextWeightType =
  | 'regular'
  | 'bold';

type TextTransformType =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize';

type TextAlignType =
  | 'to-left'
  | 'to-center'
  | 'to-right'
  | 'justify';

type TextPropsType = {
  children?: ?React.Node,
  size?: TextSizeType,
  type?: TextTypeType,
  color?: TextColorType,
  weight?: TextWeightType,
  transform?: ?TextTransformType,
  align?: ?TextAlignType,
  noWrap?: ?boolean,
  asContainer?: ?boolean,
  full?: ?boolean,
  breakWords?: ?boolean,
  className?: ?string
};

export {LINK_COLOR} from './textConsts';
export const LINK_TYPE = TEXT_TYPE;
export const LINK_SIZE = TEXT_SIZE;
export const LINK_WEIGHT = TEXT_WEIGHT;
export const LINK_TRANSFORM = TEXT_TRANSFORM;
export const LINK_ALIGN = TEXT_ALIGN;

// backward compatibility
export const SIZE = {
  NORMAL: 'small',
  SMALL: 'small',
  OBSCURE: 'xsmall'
};

// backward compatibility
export const COLOR = {
  GRAY: 'gray',
  MINT: 'mint',
  PEACH: 'peach',
  LIGHT: 'white',
  MUSTARD: 'mustard',
  FINE_PRINT: 'blue-secondary',
  FINE_PRINT_LIGHT: 'blue-secondary-light'
};

type LinkPropsType = {
  href?: ?string,
  underlined?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  disabled?: boolean
} & TextPropsType;

const Link = (props: LinkPropsType) => {
  const {
    children,
    href,
    color,
    weight = LINK_WEIGHT.REGULAR,
    underlined = false,
    unstyled = false,
    emphasised = false, //backward compability
    disabled = false, //backward compability
    className,
    ...additionalProps
  } = props;
  const linkClass = classNames({
    'sg-text--link': !underlined && !unstyled,
    'sg-text--link-underlined': underlined && !unstyled,
    'sg-text--link-unstyled': !underlined && unstyled,
    'sg-text--bold': emphasised, //backward compability
    'sg-link--disabled': disabled, //backward compability
    [`sg-text--${color || ''}`]: color,
    [`sg-text--${weight}`]: weight !== LINK_WEIGHT.REGULAR
  }, className);

  if (!href) {
    return (
      <Text
        type="span"
        {...additionalProps}
        className={linkClass}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      type="a"
      {...additionalProps}
      className={linkClass}
      href={href}
    >
      {children}
    </Text>
  );
};

export default Link;
