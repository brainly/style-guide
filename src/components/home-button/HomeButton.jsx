// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import type {LogoTypeType} from '../logo/Logo';
import {getLogoUrl} from '../../logo-url';
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
  alt?: string,
  'aria-label'?: string,
  ...
};

const HomeButton = ({
  type = TYPE.BRAINLY,
  href = '#',
  className,
  alt,
  'aria-label': ariaLabel,
  ...props
}: HomeButtonPropsType) => {
  const buttonClass = classnames(
    'sg-home-button',
    {
      [`sg-home-button--${type}`]: type !== TYPE.BRAINLY,
    },
    className
  );
  const logoPath = `${getLogoUrl(type)}`;
  // $FlowFixMe - some icons are missing, we will investigate why
  const mobilePath = `${getLogoUrl(ICONS[type])}`;

  const defaultAriaLabel = `${type.replace(/-/g, ' ')} home`;

  return (
    <a
      {...props}
      href={href}
      className={buttonClass}
      aria-label={ariaLabel || defaultAriaLabel}
    >
      <img className="sg-home-button__logo-small" src={mobilePath} alt={alt} />
      <img className="sg-home-button__logo-big" src={logoPath} alt={alt} />
    </a>
  );
};

export default HomeButton;
export {TYPE};
