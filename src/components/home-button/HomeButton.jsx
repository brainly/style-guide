// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import type {LogoTypeType} from '../logo/Logo';
import {LOGO_URLS} from '../logo/logo-url';
import {TYPE} from '../logo/Logo';

const ICONS = {
  brainly: 'brainly-mobile',
  eodev: 'eodev-mobile',
  nosdevoirs: 'nosdevoirs-mobile',
  znanija: 'znanija-mobile',
  'brainly-plus': 'brainly-plus',
};

export type HomeButtonPropsType = {
  type?: LogoTypeType,
  href?: string,
  className?: string,
  altTag?: string,
  ...
};

const HomeButton = ({
  type = TYPE.BRAINLY,
  href = '#',
  className,
  altTag,
  ...props
}: HomeButtonPropsType) => {
  const buttonClass = classnames(
    'sg-home-button',
    {
      [`sg-home-button--${type}`]: type !== TYPE.BRAINLY,
    },
    className
  );
  const logoPath = `${LOGO_URLS[type]}`;
  // $FlowFixMe - some icons are missing, we will investigate why
  const mobilePath = `${LOGO_URLS[ICONS[type]]}`;

  return (
    <a {...props} href={href} className={buttonClass}>
      <img
        className="sg-home-button__logo-small"
        src={mobilePath}
        alt={altTag}
      />
      <img className="sg-home-button__logo-big" src={logoPath} alt={altTag} />
    </a>
  );
};

export default HomeButton;
export {TYPE};
