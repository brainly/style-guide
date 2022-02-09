// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from './Text';
import type {TextColorType, TextSizeType} from './Text';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_COLOR,
} from './textConsts';
import {generateResponsiveClassNames} from '../utils/responsive-props';
import type {ResponsivePropType} from '../utils/responsive-props';

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
  | 'label';

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
  type?: TextTypeType,
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
  'aria-label'?: string,
  onClick?: () => mixed,
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
    type,
    onClick,
    'aria-label': ariaLabel,
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

  const linkClass = classNames(
    {
      [`sg-text--inherited`]: inherited,
      'sg-text--link': !underlined && !unstyled,
      'sg-text--link-underlined': underlined && !unstyled,
      'sg-text--link-unstyled': !underlined && unstyled,
      'sg-text--bold': emphasised && !inherited,
      'sg-text--link-disabled': disabled,
      [`sg-text--${String(color)}`]: color && !unstyled,
    },
    ...generateResponsiveClassNames(weight => `sg-text--${weight}`, weight),
    className
  );

  if (as === 'button') {
    return (
      <Text
        type={type || 'span'}
        {...additionalProps}
        className={linkClass}
        size={textSize}
      >
        <label className="sg-text--link-label" aria-label={ariaLabel}>
          {children}
          <button
            className="sg-visually-hidden"
            onClick={onClick}
            disabled={disabled}
          />
        </label>
      </Text>
    );
  }

  if (disabled) {
    return (
      <Text
        type={type || 'span'}
        {...additionalProps}
        className={linkClass}
        aria-label={ariaLabel}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text type={type}>
      <Text
        type="a"
        {...additionalProps}
        className={linkClass}
        href={href}
        inherited
        aria-label={ariaLabel}
        size={textSize}
      >
        {children}
      </Text>
    </Text>
  );
};

export default Link;
