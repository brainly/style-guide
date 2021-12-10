// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from './Text';
import type {TextColorType} from './Text';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_COLOR,
} from './textConsts';

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
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge';

type TextWeightType = 'regular' | 'bold';

type TextTransformType = 'uppercase' | 'lowercase' | 'capitalize';

type TextAlignType = 'to-left' | 'to-center' | 'to-right' | 'justify';

export type LinkPropsType = {
  children?: ?React.Node,
  href?: ?string,
  size?: TextSizeType,
  type?: TextTypeType,
  color?: ?TextColorType,
  weight?: TextWeightType,
  transform?: ?TextTransformType,
  align?: ?TextAlignType,
  noWrap?: ?boolean,
  breakWords?: ?boolean,
  underlined?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  disabled?: boolean,
  className?: ?string,
  inherited?: boolean,
  ...
};

export {TEXT_COLOR};
export const LINK_TYPE = TEXT_TYPE;
export const LINK_SIZE = TEXT_SIZE;
export const LINK_WEIGHT = TEXT_WEIGHT;
export const LINK_TRANSFORM = TEXT_TRANSFORM;
export const LINK_ALIGN = TEXT_ALIGN;

const Link = (props: LinkPropsType) => {
  const {
    children,
    href,
    color,
    underlined = false,
    unstyled = false,
    emphasised = true, // backward compatibility
    disabled = false, // backward compatibility
    weight,
    className,
    inherited = false,
    ...additionalProps
  } = props;
  const linkClass = classNames(
    {
      [`sg-text--inherited`]: inherited,
      'sg-text--link': !underlined && !unstyled,
      'sg-text--link-underlined': underlined && !unstyled,
      'sg-text--link-unstyled': !underlined && unstyled,
      'sg-text--bold': emphasised && !inherited,
      'sg-text--link-disabled': disabled,
      [`sg-text--${String(color)}`]: color && !unstyled,
      [`sg-text--${String(weight)}`]: weight,
    },
    className
  );

  if (href === undefined || href === '' || href === null) {
    return (
      <Text type="span" {...additionalProps} className={linkClass}>
        {children}
      </Text>
    );
  }

  return (
    <Text type="a" {...additionalProps} className={linkClass} href={href}>
      {children}
    </Text>
  );
};

export default Link;
