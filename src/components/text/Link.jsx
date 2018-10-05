// @flow

import * as React from 'react';
import classNames from 'classnames';
import Text from './Text';
import {TEXT_TYPE, TEXT_COLOR, TEXT_SIZE, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN} from './textConsts';
import type {TextPropsType} from './Text';

export const LINK_COLOR = TEXT_COLOR;
export const LINK_TYPE = TEXT_TYPE;
export const LINK_SIZE = TEXT_SIZE;
export const LINK_WEIGHT = TEXT_WEIGHT;
export const LINK_TRANSFORM = TEXT_TRANSFORM;
export const LINK_ALIGN = TEXT_ALIGN;

// backward compatibility
export const SIZE = {
  NORMAL: 'xsmall',
  SMALL: 'small',
  OBSCURE: 'xsmall'
};
// backward compatibility
export const COLOR = {
  GRAY: 'gray',
  MINT: 'mint',
  PEACH: 'peach',
  LIGHT: 'light',
  MUSTARD: 'mustard',
  FINE_PRINT: 'for-fine-print',
  FINE_PRINT_LIGHT: 'for-fine-print-light'
};

type LinkPropsType = {
  href?: string,
  underlined?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  disabled?: boolean
} & TextPropsType;

const Link = (props: LinkPropsType) => {
  const {
    children,
    href,
    color = LINK_COLOR.BLUE,
    underlined = false,
    unstyled = false,
    emphasised = true, //backward compability
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
    [`sg-text--${color}`]: !unstyled ? color !== LINK_COLOR.DEFAULT : null
  }, className);

  if (!href) {
    return (
      <Text
        type={LINK_TYPE.SPAN}
        {...additionalProps}
        className={linkClass}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      type={LINK_TYPE.LINK}
      {...additionalProps}
      className={linkClass}
      href={href}
    >
      {children}
    </Text>
  );
};

export default Link;
