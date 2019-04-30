// @flow strict

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

type LinkColorType =
  | 'black'
  | 'white'
  | 'gray'
  | 'gray-secondary'
  | 'gray-secondary-light'
  | 'mint-dark'
  | 'blue-dark';

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

export type LinkPropsType = {
  children?: ?React.Node,
  href?: ?string,
  size?: TextSizeType,
  type?: TextTypeType,
  color?: ?LinkColorType,
  weight?: TextWeightType,
  transform?: ?TextTransformType,
  align?: ?TextAlignType,
  noWrap?: ?boolean,
  breakWords?: ?boolean,
  underlined?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  disabled?: boolean,
  className?: ?string
};

export {LINK_COLOR} from './textConsts';
export const LINK_TYPE = TEXT_TYPE;
export const LINK_SIZE = TEXT_SIZE;
export const LINK_WEIGHT = TEXT_WEIGHT;
export const LINK_TRANSFORM = TEXT_TRANSFORM;
export const LINK_ALIGN = TEXT_ALIGN;

const Link = (props: LinkPropsType) => {
  const {
    children,
    href,
    color = LINK_COLOR.BLUE_DARK,
    underlined = false,
    unstyled = false,
    emphasised = true, // backward compatibility
    disabled = false, // backward compatibility
    weight,
    className,
    ...additionalProps
  } = props;
  const linkClass = classNames({
    'sg-text--link': !underlined && !unstyled,
    'sg-text--link-underlined': underlined && !unstyled,
    'sg-text--link-unstyled': !underlined && unstyled,
    'sg-text--bold': emphasised,
    'sg-text--link-disabled': disabled,
    [`sg-text--${String(color)}`]: color && !unstyled,
    [`sg-text--${String(weight)}`]: weight
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
