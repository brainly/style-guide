// @flow

import * as React from 'react';
import classNames from 'classnames';
import Text from './Text';
import {TEXT_TYPE, TEXT_COLOR} from './textConsts';
import type {TextPropsType} from './Text';

export const COLOR = TEXT_COLOR;

type LinkPropsType = {
  href?: string,
  underlined?: boolean
} & TextPropsType;

const Link = (props: LinkPropsType) => {
  const {
    children,
    href,
    color = TEXT_COLOR.BLUE,
    underlined,
    className,
    ...additionalProps
  } = props;
  const linkClass = classNames('sg-text--link', {
    [`sg-text--${color}`]: color !== TEXT_COLOR.DEFAULT,
    'sg-text--link-underlined': underlined
  }, className);

  if (!href) {
    return (
      <Text
        type={TEXT_TYPE.SPAN}
        {...additionalProps}
        className={linkClass}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text
      type={TEXT_TYPE.LINK}
      {...additionalProps}
      className={linkClass}
      href={href}
    >
      {children}
    </Text>
  );
};

export default Link;
