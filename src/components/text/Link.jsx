// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import {__DEV__, invariant} from '../utils';
import Text from './Text';
import type {TextColorType, TextSizeType} from './Text';
import {
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_COLOR,
} from './textConsts';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

const anchorRelatedProps = [
  'download',
  'hreflang',
  'ping',
  'referrerpolicy',
  'rel',
  'target',
];

type LinkSizeType =
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

type ElementType = 'a' | 'button';

export type LinkPropsType = {
  children?: ?React.Node,
  as?: ?ElementType,
  href?: ?string,
  size?: ResponsivePropType<LinkSizeType>,
  color?: ?TextColorType,
  weight?: ResponsivePropType<TextWeightType>,
  transform?: ResponsivePropType<?TextTransformType>,
  align?: ResponsivePropType<?TextAlignType>,
  noWrap?: ResponsivePropType<?boolean>,
  breakWords?: ResponsivePropType<?boolean>,
  underlined?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  disabled?: boolean,
  className?: ?string,
  inherited?: boolean,
  ariaNewTabLabel?: string,
  onClick?: () => mixed,
  ...
};

export {TEXT_COLOR};
export const LINK_SIZE = TEXT_SIZE;
export const LINK_WEIGHT = TEXT_WEIGHT;
export const LINK_TRANSFORM = TEXT_TRANSFORM;
export const LINK_ALIGN = TEXT_ALIGN;

const Link = (props: LinkPropsType) => {
  const {
    children,
    as = 'a',
    href,
    color,
    underlined = false,
    unstyled = false,
    emphasised = true, // backward compatibility
    disabled = false, // backward compatibility
    weight,
    className,
    inherited = false,
    size,
    onClick,
    ...additionalProps
  } = props;

  let textSize: ResponsivePropType<TextSizeType>;

  if (typeof size === 'object') {
    if (Array.isArray(size)) {
      textSize = size.map(sizeItem => sizeItem);
    } else {
      textSize = {
        sm: size.sm,
        md: size.md,
        lg: size.lg,
        xl: size.xl,
      };
    }
  } else if (size) {
    textSize = size;
  }

  if (__DEV__) {
    invariant(
      !(as === 'a' && (href === null || href === undefined)),
      'An anchor element without a href will be accessible only for users with a pointing device.'
    );

    invariant(
      !(as === 'button' &&
        (href ||
          Object.keys(additionalProps).some(p =>
            anchorRelatedProps.includes(p)
          )),
      'An anchor-related prop is not working for a button.')
    );
  }

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
      'sg-text--link-label': as === 'button',
    },
    ...generateResponsiveClassNames(weight => `sg-text--${weight}`, weight),
    className
  );

  if (as === 'button') {
    return (
      <Text
        type="label"
        {...additionalProps}
        className={linkClass}
        size={textSize}
      >
        {children}
        <button
          className="sg-visually-hidden"
          onClick={onClick}
          disabled={disabled}
          type="button"
        />
      </Text>
    );
  }

  const linkType = disabled ? 'span' : 'a';

  return (
    <Text
      type={linkType}
      {...additionalProps}
      href={href}
      className={linkClass}
      size={textSize}
    >
      {children}
    </Text>
  );
};

export default Link;
