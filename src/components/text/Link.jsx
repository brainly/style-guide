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

type LinkPropsType = {
  href?: string,
  underlined?: boolean
} & TextPropsType;

const Link = (props: LinkPropsType) => {
  const {
    children,
    href,
    color = LINK_COLOR.BLUE,
    underlined,
    className,
    ...additionalProps
  } = props;
  const linkClass = classNames('sg-text--link', {
    [`sg-text--${color}`]: color !== LINK_COLOR.DEFAULT,
    'sg-text--link-underlined': underlined
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
