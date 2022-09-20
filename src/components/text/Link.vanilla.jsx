// @flow strict

import * as React from 'react';
import {__DEV__, invariant, generateId} from '../utils';
import Text from './Text.vanilla';
import type {TextColorType, TextSizeType} from './Text.vanilla';
import {
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_COLOR,
} from './textConsts';
import type {ResponsivePropType} from '../utils/responsive-props';
import * as styles from './styles';
import {runResponsiveRecipe} from '../../vanilla-extract/responsive-recipes';

const anchorRelatedProps = [
  'download',
  'hreflang',
  'ping',
  'referrerpolicy',
  'rel',
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

type TargetType = '_self' | '_blank' | '_parent' | '_top';

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
  'aria-label'?: string,
  target?: TargetType,
  newTabLabel?: string,
  hideNewTabIndicator?: boolean,
  onClick?: (
    SyntheticMouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => mixed,
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
    'aria-label': ariaLabel,
    target,
    onClick,
    newTabLabel = '(opens in a new tab)',
    hideNewTabIndicator = false,
    ...additionalProps
  } = props;
  const {current: labelId} = React.useRef(generateId());

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
      !(as === 'a' && !disabled && (href === null || href === undefined)),
      'An anchor element without a href will be accessible only for users with a pointing device.'
    );

    invariant(
      !(
        as === 'button' &&
        (href ||
          Object.keys(additionalProps).some(p =>
            anchorRelatedProps.includes(p)
          ))
      ),
      // $FlowFixMe
      `An anchor-related prop is not working for as="button": ${Object.keys(
        additionalProps
      )}`
    );
  }

  const textClassNames = runResponsiveRecipe(styles.text, {
    inherited,
    weight: emphasised && !inherited ? 'bold' : weight,
    color: color && !unstyled ? color : undefined,
  });

  const linkClassNames = runResponsiveRecipe(styles.link, {
    styled: !underlined && !unstyled,
    underlined: underlined && !unstyled,
    unstyled: !underlined && unstyled,
    disabled,
    label: as === 'button',
  });

  // const linkClass = classNames(
  // {
  // [inheritedStyle]: inherited,
  // [linkVariants.main]: !underlined && !unstyled,
  // [linkVariants.underlined]: underlined && !unstyled,
  // [linkVariants.unstyled]: !underlined && unstyled,
  // [weightVariants.bold]: emphasised && !inherited,
  // [linkVariants.disabled]: disabled,
  // [colorVariants[color]]: color && !unstyled,
  // [linkVariants.label]: as === 'button',
  // },
  // ...generateResponsiveClassNames(weight => weight, weight).map(
  //   className => weightVariants[className]
  // ),
  // className
  // );

  if (as === 'button') {
    return (
      <Text
        {...additionalProps}
        type="label"
        className={`${linkClassNames} ${textClassNames}`}
        size={textSize}
      >
        <span id={labelId} aria-label={ariaLabel} aria-hidden>
          {children}
        </span>
        <button
          className="sg-visually-hidden"
          onClick={onClick}
          disabled={disabled}
          type="button"
          aria-labelledby={labelId}
        />
      </Text>
    );
  }

  const linkType = disabled ? 'span' : 'a';
  const onLinkClick = e => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <Text
      {...additionalProps}
      type={linkType}
      href={href || ''}
      className={`${linkClassNames} ${textClassNames}`}
      size={textSize}
      onClick={onLinkClick}
      aria-label={ariaLabel}
      target={target}
    >
      {children}
      {target === '_blank' && (
        <>
          <span aria-hidden hidden={hideNewTabIndicator}>
            ⬈
          </span>
          <span className="sg-visually-hidden">{newTabLabel}</span>
        </>
      )}
    </Text>
  );
};

export default Link;
