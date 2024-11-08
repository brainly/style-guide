import * as React from 'react';
import classNames from 'classnames';
import {__DEV__, invariant, generateId} from '../utils';
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
  children?: React.ReactNode | null | undefined;
  as?: ElementType | null | undefined;
  href?: string | null | undefined;
  size?: ResponsivePropType<LinkSizeType>;
  color?: TextColorType | null | undefined;
  weight?: ResponsivePropType<TextWeightType>;
  transform?: ResponsivePropType<TextTransformType | null | undefined>;
  align?: ResponsivePropType<TextAlignType | null | undefined>;
  noWrap?: ResponsivePropType<boolean | null | undefined>;
  breakWords?: ResponsivePropType<boolean | null | undefined>;
  underlined?: boolean;
  unstyled?: boolean;
  emphasised?: boolean;
  disabled?: boolean;
  className?: string | null | undefined;
  inherited?: boolean;
  'aria-label'?: string;
  target?: TargetType;
  newTabLabel?: string;
  hideNewTabIndicator?: boolean;
  onClick?: (
    arg0: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => unknown;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'children'
  | 'as'
  | 'href'
  | 'size'
  | 'color'
  | 'weight'
  | 'transform'
  | 'align'
  | 'noWrap'
  | 'breakWords'
  | 'underlined'
  | 'unstyled'
  | 'emphasised'
  | 'disabled'
  | 'className'
  | 'inherited'
  | 'undefined'
  | 'target'
  | 'newTabLabel'
  | 'hideNewTabIndicator'
  | 'onClick'
>;
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
    emphasised = true,
    // backward compatibility
    disabled = false,
    // backward compatibility
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
  let textSize: ResponsivePropType<TextSizeType> | undefined;

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
      ), // $FlowFixMe
      `An anchor-related prop is not working for as="button": ${Object.keys(
        additionalProps
      )}`
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
      'sg-text--link-label': as === 'button',
    },
    ...generateResponsiveClassNames(weight => `sg-text--${weight}`, weight),
    className
  );

  // suppressHydrationWarning is used until 'useId' hook is available
  if (as === 'button') {
    return (
      <Text
        {...additionalProps}
        as="label"
        className={linkClass}
        size={textSize}
      >
        <span
          id={labelId}
          aria-label={ariaLabel}
          aria-hidden
          suppressHydrationWarning
        >
          {children}
        </span>
        <button
          className="sg-visually-hidden sg-text--link-button"
          onClick={onClick}
          disabled={disabled}
          type="button"
          aria-labelledby={labelId}
          suppressHydrationWarning
        />
      </Text>
    );
  }

  const linkType = disabled ? 'span' : 'a';

  // @ts-expect-error TS7006
  const onLinkClick = e => {
    if (!disabled && onClick) {
      return onClick(e);
    }
  };

  return (
    <Text
      {...additionalProps}
      as={linkType}
      href={href || ''}
      className={linkClass}
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
